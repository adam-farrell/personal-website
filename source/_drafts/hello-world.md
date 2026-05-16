---
title: Hello World
tags:
  - meta
---

This is a draft post. It lives in `source/_drafts/` and is never included in a production build.

## The authoring workflow

1. **Write** — create a new draft: `npx hexo new draft "My Post Title"`
2. **Preview** — run `npm run dev` to see the site with drafts visible
3. **Publish** — promote to a post: `npx hexo publish "My Post Title"`
4. **Release** — cut a deploy: `npm run release`

Once you run `npm run release`, a calendar-versioned git tag (e.g. `2026.05.16`) is created and pushed. GitHub Actions picks it up and deploys the built site to S3/CloudFront.

Drafts stay out of production until you explicitly publish and release them.
