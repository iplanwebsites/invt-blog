# Invitation.app Blog Guidelines

## Mission Statement
The Invitation.app blog serves as the primary content hub for savvy shoppers seeking to maximize their savings through referral codes, exclusive deals, and smart shopping strategies. Our content empowers users to make informed purchasing decisions while building a community of deal-sharing enthusiasts.

## Tone & Voice

### Primary Tone Attributes
- **Friendly & Approachable**: Write as if you're sharing tips with a good friend
- **Enthusiastic but Authentic**: Show genuine excitement about savings without overselling
- **Informative & Practical**: Focus on actionable advice over theory
- **Inclusive & Community-Focused**: Emphasize collective benefits of sharing deals

### Writing Guidelines
- Use "you" and "we" to create connection
- Keep sentences concise and paragraphs short (2-3 sentences ideal)
- Lead with value - what's in it for the reader?
- Avoid jargon; explain technical terms when necessary
- Include real examples and specific numbers when possible

### Example Phrases
✅ DO: "Save $50 on your next purchase with this exclusive code"
❌ DON'T: "Utilize this promotional offering for monetary benefits"

✅ DO: "We've discovered an amazing deal that's only available this week"
❌ DON'T: "There exists a temporary price reduction opportunity"

## Content Types

### 1. Deal Alerts (`/articles/deals/`)
Quick, time-sensitive posts about current promotions
- Length: 300-500 words
- Focus: Immediate value, clear CTAs
- Update frequency: As deals become available

### 2. Shopping Guides (`/articles/guides/`)
In-depth tutorials on maximizing savings
- Length: 1000-2000 words
- Focus: Step-by-step instructions, screenshots when helpful
- Examples: "Complete Guide to Stacking Coupons", "How to Find Hidden Amazon Deals"

### 3. Brand Spotlights (`/articles/brands/`)
Deep dives into specific retailers and their referral programs
- Length: 800-1200 words
- Focus: Brand history, best deals, insider tips
- Include: Referral code details, seasonal patterns

### 4. User Success Stories (`/articles/stories/`)
Community member savings achievements
- Length: 500-800 words
- Focus: Real numbers, specific strategies used
- Include: User quotes, permission required

### 5. App Updates (`/articles/updates/`)
New features and improvements to Invitation.app
- Length: 200-400 words
- Focus: User benefits, how-to-use
- Include: Screenshots, video links when applicable

### 6. Seasonal Roundups (`/articles/seasonal/`)
Holiday and event-specific shopping strategies
- Length: 1500-2000 words
- Focus: Comprehensive deal lists, timing strategies
- Examples: "Black Friday Masterplan", "Back-to-School Savings Guide"

## Frontmatter Specification

```yaml
---
title: string (required) # SEO-optimized, 50-60 characters
slug: string (required) # URL-friendly version of title
date: YYYY-MM-DD (required) # Publication date
updated: YYYY-MM-DD (optional) # Last modification date
author: string (required) # Author name
author_slug: string (required) # URL-friendly author identifier
category: string (required) # One of: deals, guides, brands, stories, updates, seasonal
tags: array (required) # 3-5 relevant tags
  - tag1
  - tag2
  - tag3
featured_image: string (required) # Path to hero image
featured_image_alt: string (required) # Alt text for accessibility
excerpt: string (required) # 150-160 characters for meta description
deal_value: number (optional) # Estimated savings in USD
deal_expiry: YYYY-MM-DD (optional) # When deal expires
brand: string (optional) # Primary brand featured
referral_code: string (optional) # Associated referral code
priority: number (optional) # 1-10, for homepage featuring
status: string (required) # draft, published, archived
seo_keywords: array (optional) # Additional SEO terms
  - keyword1
  - keyword2
related_posts: array (optional) # Slugs of related articles
  - slug1
  - slug2
reading_time: number (auto-generated) # Estimated minutes to read
---
```

## Repository Organization

```
invt-blog/
├── claude.md                 # This file - editorial guidelines
├── README.md                 # Technical setup and contribution guide
├── articles/                 # All blog articles
│   ├── deals/               # Time-sensitive deal posts
│   │   └── YYYY-MM/        # Organized by year and month
│   ├── guides/              # How-to and tutorial content
│   ├── brands/              # Brand-specific content
│   ├── stories/             # User success stories
│   ├── updates/             # App feature announcements
│   └── seasonal/            # Holiday/event content
├── assets/                  # Media files
│   ├── images/
│   │   ├── heroes/         # Featured images (1200x630px)
│   │   ├── inline/         # In-article images
│   │   └── thumbnails/     # List view images (400x300px)
│   └── data/               # JSON/CSV data files
├── templates/               # Content templates
│   ├── deal-alert.md
│   ├── shopping-guide.md
│   ├── brand-spotlight.md
│   └── seasonal-roundup.md
├── scripts/                 # Utility scripts
│   ├── validate-frontmatter.js
│   ├── generate-sitemap.js
│   └── check-expired-deals.js
└── .github/
    └── workflows/          # CI/CD pipelines
        └── content-validation.yml
```

## Content Standards

### SEO Requirements
- Title tags: 50-60 characters including brand name
- Meta descriptions: 150-160 characters with CTA
- URL slugs: Lowercase, hyphenated, no special characters
- Include 1-2 internal links per 500 words
- Optimize images: Max 200KB, descriptive filenames

### Image Guidelines
- Hero images: 1200x630px (2:1 ratio) for social sharing
- Inline images: Max width 800px
- Screenshots: Include annotations when helpful
- Alt text: Descriptive, mentioning key elements
- File naming: `YYYY-MM-DD-descriptive-name.jpg`

### Link Standards
- Referral links: Must use Invitation.app redirect
- External links: Open in new tab, rel="noopener"
- Affiliate disclosure: Required on all posts with referral codes
- Link text: Descriptive, avoid "click here"

## Editorial Workflow

### 1. Ideation
- Monitor trending deals and seasonal events
- Review user feedback and search queries
- Analyze competitor content gaps

### 2. Creation
- Use appropriate template from `/templates/`
- Follow frontmatter specification exactly
- Include all required fields

### 3. Review Checklist
- [ ] Frontmatter validates
- [ ] Links tested and working
- [ ] Images optimized and alt text added
- [ ] Grammar and spell check passed
- [ ] Tone guidelines followed
- [ ] SEO requirements met
- [ ] Deal expiry dates accurate

### 4. Publication
- Set status to "published"
- Verify rendering on staging
- Share on social channels
- Monitor engagement metrics

### 5. Maintenance
- Update expired deals (monthly)
- Refresh evergreen content (quarterly)
- Archive outdated posts (as needed)
- Fix broken links (weekly scan)

## Compliance & Legal

### Required Disclosures
- Affiliate relationships must be disclosed at article beginning
- Sponsored content clearly marked
- User testimonials include permission notice
- Price/availability disclaimers where appropriate

### Prohibited Content
- False or misleading claims
- Competitor disparagement
- Copyrighted material without permission
- Personal financial advice
- Guaranteed outcome promises

## Performance Metrics

### Key Success Indicators
- **Engagement**: Time on page > 2 minutes
- **Conversion**: Click-through rate on referral codes > 15%
- **Sharing**: Social shares per post > 10
- **SEO**: Organic traffic growth > 20% MoM
- **User Value**: Average savings per user > $50/month

### Review Frequency
- Weekly: Deal performance and expiry
- Monthly: Content calendar and metrics review
- Quarterly: Strategy adjustment and guideline updates

## Contact & Support

**Editorial Questions**: content@invitation.app
**Technical Issues**: dev@invitation.app
**Partnership Inquiries**: partners@invitation.app

---

*Last Updated: 2025-10-03*
*Version: 1.0*