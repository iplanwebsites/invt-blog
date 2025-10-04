const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all markdown files in articles directory
const articleFiles = glob.sync('articles/**/*.md');

console.log(`Found ${articleFiles.length} article files`);

let processedCount = 0;
let skippedCount = 0;
let errorCount = 0;

articleFiles.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');

    // Check if file has frontmatter
    if (!content.startsWith('---')) {
      console.log(`⚠️  Skipped (no frontmatter): ${filePath}`);
      skippedCount++;
      return;
    }

    // Extract frontmatter
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (!frontmatterMatch) {
      console.log(`⚠️  Skipped (invalid frontmatter): ${filePath}`);
      skippedCount++;
      return;
    }

    const frontmatter = frontmatterMatch[1];
    const restOfContent = content.slice(frontmatterMatch[0].length);

    // Check if cover property already exists
    if (frontmatter.includes('cover:')) {
      console.log(`⏭️  Skipped (cover exists): ${filePath}`);
      skippedCount++;
      return;
    }

    // Extract unsplashPhotoId
    const unsplashMatch = frontmatter.match(/unsplashPhotoId:\s*"?([^"\n]+)"?/);
    if (!unsplashMatch) {
      console.log(`⚠️  Skipped (no unsplashPhotoId): ${filePath}`);
      skippedCount++;
      return;
    }

    const unsplashId = unsplashMatch[1].trim();
    const coverValue = `${unsplashId}.jpg`;

    // Add cover property after unsplashPhotoId
    const updatedFrontmatter = frontmatter.replace(
      /unsplashPhotoId:\s*"?([^"\n]+)"?/,
      `unsplashPhotoId: "$1"\ncover: "${coverValue}"`
    );

    // Reconstruct file content
    const updatedContent = `---\n${updatedFrontmatter}\n---${restOfContent}`;

    // Write back to file
    fs.writeFileSync(filePath, updatedContent, 'utf8');

    console.log(`✅ Processed: ${filePath} (cover: ${coverValue})`);
    processedCount++;

  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    errorCount++;
  }
});

console.log('\n📊 Summary:');
console.log(`   ✅ Processed: ${processedCount}`);
console.log(`   ⏭️  Skipped: ${skippedCount}`);
console.log(`   ❌ Errors: ${errorCount}`);
console.log(`   📁 Total: ${articleFiles.length}`);
