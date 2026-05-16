# Project: Personal Website Blog
Creating a personal website that I can play with technology outside of the corporate environment. The implementation
will be completely static and not require compute to run. 

## Glossary

**Blog** — the primary purpose of the site; a writing surface for documenting personal technical experiments. There is no separate "portfolio" or "playground" — the writing itself is the record of experimentation.

**Post** — the primary content unit; a dated, tagged piece of writing documenting an experiment or idea. Posts appear in the feed and are the main reason the site exists.

**Page** — a standalone, undated piece of content (e.g., About Me). Pages are not part of the feed and are used sparingly.

**Tag** — a flat label applied to Posts for thematic grouping. No category hierarchy; tags are the only organizational structure.

**Release** — a tagged git commit using calendar versioning (e.g., `2026.05.16`) that triggers the GitHub Actions pipeline to build and deploy to S3/CloudFront. Publishing a Post is a deliberate act: it requires cutting a Release. Commits to `main` without a tag do not deploy. If multiple releases occur on the same day, append a counter (e.g., `2026.05.16.1`).

**Draft** — a Post in progress, stored in `source/_drafts/`. Excluded from builds and never deployed. Promoted to a publishable Post via `hexo publish`, then goes live only when a Release is cut.


## Tech Stack
- **CI/CD Pipeline**: Github Actions and Runners
- **Hosting CDN**: AWS Cloudfront
- **Hosting Storage**: AWS S3
- **Static Website Framework**: Hexo
- **Theme**: Icarus
- **Hosted Domain**: adamfarrell.org
- **S3 Bucket**: `www-main-600893692809-us-east-1-an`
- **CloudFront Distribution**: `www-main` (ID: `E10RLKEBI6Ih3R`), already connected to Route53 hosted zone for adamfarrell.org, HTTPS certificate provisioned

## Coding Conventions
- Use 2-space indentation.
- Use descriptive variable names; follow camelCase.
- Export functions individually rather than using default exports.

## Development Commands
- `npm run dev`: Build and start local hexo server.
- `npm test`: Run the test suite (run before every commit).
- `npm build`: Builds the website without running
- `npm release`: Builds, tests, and creates a release in Github that will be released via Github runners

## Architecture
- Static Website will be built locally and pushed to Github with a release tag. 
- When introducing any technology only use open-source software or solutions with a free tier. 
