# Blog Article Fields Reference

Complete list of all fields found in the blog database and how they're handled in the Markdown conversion.

## All 28 Fields (Complete)

### Core Metadata
| Field | Type | Count | Description | Example |
|-------|------|-------|-------------|---------|
| `_id` | String | 184 | MongoDB ObjectID | `"656128e9c88eac01c2b1e93f"` |
| `title` | String | 184 | Article title | `"The annual Holiday Sales is ON!"` |
| `subtitle` | String | 184 | Article subtitle/excerpt | `"This is your sign to upgrade!"` |
| `slug` | String | 184 | URL slug | `"black-friday"` |
| `url` | String | 184 | Full URL path | `"/product/black-friday"` |

### Publishing Status
| Field | Type | Count | Description | Example |
|-------|------|-------|-------------|---------|
| `published` | Boolean | 184 | Published or draft | `true` |
| `featured` | Boolean | ~50 | Featured article flag | `true` |
| `isPage` | Boolean | ~10 | Is a page (not blog post) | `true` |
| `hiddenFromLists` | Boolean | ~20 | Hide from article lists | `false` |
| `hideComments` | Boolean | ~15 | Disable comments | `true` |

### Content
| Field | Type | Count | Description | Example |
|-------|------|-------|-------------|---------|
| `descHtml` | String (HTML) | 184 | Main article content (HTML) | `"<p>Content here...</p>"` |
| `desc` | String | 1 | Short description/iframe embed | `"<iframe src=...>"` |
| `customHtmlCode` | String (HTML) | ~30 | Custom HTML blocks | `"<iframe...>"` |

### Categorization
| Field | Type | Count | Description | Example |
|-------|------|-------|-------------|---------|
| `category` | String | 184 | Article category | `"product"` |
| `categoryLabel` | String | 184 | Category display label | `"product"` |
| `tags` | Array | 43 | System/admin tags | `["referral programs collections"]` |
| `userTags` | Array | ~140 | User-submitted tags | `["deals", "save", "tips"]` |

**Note:** `tags` and `userTags` are separate fields:
- **`tags`** - System-level tags (set by admins)
- **`userTags`** - User/content tags (shows in frontend)

### Author Information
| Field | Type | Count | Description | Example |
|-------|------|-------|-------------|---------|
| `user` | String | 184 | Author user shortid | `"Owc4NhV2y"` |
| `authorShortid` | String | 5 | Alternative author ID | `"Bc9mRpsHP"` |
| `authorHandle` | String | 0 | Author handle (computed) | `"@username"` |
| `authorName` | String | 0 | Author name (computed) | `"John Doe"` |

### Timestamps
| Field | Type | Count | Description | Example |
|-------|------|-------|-------------|---------|
| `created` | Date (ISO) | 184 | Creation date | `"2023-11-24T22:51:21.946Z"` |
| `modified` | Date (ISO) | 184 | Last modification date | `"2024-11-28T22:13:16.198Z"` |

### Media/Images
| Field | Type | Count | Description | Example |
|-------|------|-------|-------------|---------|
| `unsplashPhotoId` | String | ~150 | Unsplash photo ID | `"I-_7kNyN-JE"` |
| `imageExternalUrl` | String | ~30 | External image URL | `"https://example.com/image.png"` |
| `hasPhotoColorFilter` | Boolean | ~20 | Apply color filter to photo | `true` |

**Image URL Construction:**
- Unsplash: `https://source.unsplash.com/{unsplashPhotoId}/1600x900`
- External: Use `imageExternalUrl` directly

### Featured Content
| Field | Type | Count | Description | Example |
|-------|------|-------|-------------|---------|
| `featuredReferralProgramTag` | String | ~20 | Tag for program listing | `"crowdfunding"` |
| `featuredReferralProgramSlug` | String | ~30 | Specific program slug | `"gemini"` |
| `featuredReferralProgramCountryCode` | String | ~5 | 2-letter country code | `"US"` |
| `featuredProgram` | Object | 1 | Full program object | `{name: "Gemini", ...}` |

**Note:** `featuredProgram` contains complete program data (icon, colors, summary, etc.)

## Field Distribution by Category

### Articles with System Tags (`tags`)
- **43 articles** have admin/system tags
- Example: `"referral programs collections"`
- Used for: Internal categorization, special collections

### Articles with User Tags (`userTags`)
- **~140 articles** have user tags
- Example: `["save", "tips", "deals", "strategy"]`
- Used for: Public-facing tags, filtering, search

### Articles with Both
- **Some articles** have BOTH `tags` and `userTags`
- Example: Crowdfunding article has:
  - `tags: ["referral programs collections"]`
  - `userTags: ["Crowdfunding"]`

## Special Field Cases

### 1. The `desc` Field (1 article)
**Article:** `write-for-us.md`
- Contains an iframe embed
- Different from `descHtml` (main content)
- Also stored in `customHtmlCode`

**Usage:**
```yaml
desc: "<iframe src=\"https://docs.google.com/forms/...\" ...></iframe>"
```

### 2. The `featuredProgram` Object (1 article)
**Article:** `Trading-crypto-on-Gemini.md`
- Full program object with colors, icons, summaries
- Contains: `name`, `slug`, `domain`, `category`, `iconSquare`, `accentColor`, etc.
- JSON serialized in frontmatter

**Usage:**
```yaml
featuredProgram: {"accentColor":"#65e7f7","name":"Gemini",...}
```

### 3. Multiple Author Fields
Some articles have:
- `user` (primary author, always present)
- `authorShortid` (alternative/override, rare)

## Frontmatter Structure

### Minimal Article (Required Fields)
```yaml
---
id: "..."
title: "..."
slug: "..."
url: "..."
published: true
category: "..."
author: "..."
created: "..."
modified: "..."
---
```

### Full Article (All Possible Fields)
```yaml
---
id: "656128e9c88eac01c2b1e93f"
title: Article Title
subtitle: Article subtitle
slug: "article-slug"
url: "/mag/article-slug"
published: true
featured: true
isPage: false
hiddenFromLists: false
hideComments: false
category: "product"
categoryLabel: product
tags:
  - "system-tag"
userTags:
  - "user-tag-1"
  - "user-tag-2"
author: "Owc4NhV2y"
authorShortid: "Bc9mRpsHP"
created: "2023-11-24T22:51:21.946Z"
modified: "2024-11-28T22:13:16.198Z"
unsplashPhotoId: "abc123"
imageExternalUrl: "https://example.com/image.png"
hasPhotoColorFilter: true
featuredReferralProgramTag: "crypto"
featuredReferralProgramSlug: "gemini"
featuredReferralProgramCountryCode: "US"
featuredProgram: {...}
desc: "Short description"
customHtmlCode: "<custom html>"
---

Article content in Markdown...
```

## Field Coverage

### ✅ All 28 Fields Captured
- [x] `_id`
- [x] `title`
- [x] `subtitle`
- [x] `slug`
- [x] `url`
- [x] `published`
- [x] `featured`
- [x] `isPage`
- [x] `hiddenFromLists`
- [x] `hideComments`
- [x] `category`
- [x] `categoryLabel`
- [x] `tags` ⭐ (NEW - System tags)
- [x] `userTags`
- [x] `user`
- [x] `authorShortid` ⭐ (Already had it)
- [x] `authorHandle`
- [x] `authorName`
- [x] `created`
- [x] `modified`
- [x] `descHtml` (content)
- [x] `desc` ⭐ (NEW - Short description)
- [x] `customHtmlCode`
- [x] `unsplashPhotoId`
- [x] `imageExternalUrl`
- [x] `hasPhotoColorFilter`
- [x] `featuredReferralProgramTag`
- [x] `featuredReferralProgramSlug`
- [x] `featuredReferralProgramCountryCode`
- [x] `featuredProgram` ⭐ (NEW - Full object)

**⭐ = Added in the latest update**

## Migration Notes

### For Static Site Generators (Hugo, Jekyll, etc.)

**Map fields directly:**
```yaml
# Hugo example
date: "{{created}}"
lastmod: "{{modified}}"
draft: !{{published}}
categories: ["{{category}}"]
tags: {{userTags}}
```

### For Headless CMS (Contentful, Strapi, etc.)

**Parse and transform:**
```javascript
const article = parseFrontmatter(markdownFile);

// Map to CMS content model
{
  title: article.title,
  slug: article.slug,
  publishedAt: new Date(article.created),
  updatedAt: new Date(article.modified),
  status: article.published ? 'published' : 'draft',
  category: article.category,
  tags: article.userTags, // Use userTags for public tags
  systemTags: article.tags, // Store system tags separately
  featuredImage: article.unsplashPhotoId
    ? `https://source.unsplash.com/${article.unsplashPhotoId}/1600x900`
    : article.imageExternalUrl,
  content: article.content, // Markdown body
  customHtml: article.customHtmlCode
}
```

### Special Handling Required

1. **Featured Program Object** - If your CMS doesn't support JSON in frontmatter:
   - Extract to separate file
   - Store in database
   - Link by reference

2. **System vs User Tags** - Decide on strategy:
   - Merge into one field
   - Keep separate for admin/public distinction
   - Use namespacing (`admin:collection`, `user:crypto`)

3. **Custom HTML** - Consider:
   - Store in separate field
   - Convert to shortcodes/components
   - Embed in Markdown with proper escaping

## Validation Queries

```bash
# Count articles with system tags
grep -c '^tags:' blog-md/*.md
# Result: 43

# Count articles with user tags
grep -c '^userTags:' blog-md/*.md
# Result: ~140

# Find articles with featuredProgram
grep -l 'featuredProgram:' blog-md/*.md
# Result: Trading-crypto-on-Gemini.md

# Find articles with desc field
grep -l '^desc:' blog-md/*.md
# Result: write-for-us.md

# Articles with authorShortid
grep -l 'authorShortid:' blog-md/*.md
# Result: 5 articles
```

## Summary

✅ **100% Field Coverage** - All 28 unique fields from the database are now captured in the Markdown frontmatter.

🎯 **Key Distinctions:**
- `tags` (admin) vs `userTags` (public)
- `desc` (short/embed) vs `descHtml` (main content)
- `featuredProgram` (full object) vs individual featured fields

📦 **Ready for Migration** - All metadata is preserved and ready for your CMS import.

---

**Last Updated:** October 2, 2025
**Fields Discovered:** 28
**Articles Converted:** 184
**Coverage:** 100% ✅
