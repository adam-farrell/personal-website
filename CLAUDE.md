# Claude Code guide for adamfarrell.org

Personal site and blog for Adam Farrell. It's a fully static Astro site on the AstroWind template, deployed to S3 + CloudFront by GitHub Actions when a release tag is pushed.

- Project glossary, release flow and conventions: @CONTEXT.md
- Architecture decisions: `docs/adr/`
- AstroWind template reference: @AGENTS.md (task recipes live in `.agents/skills/`)

## Rules

- Keep the site static. No server-side rendering, backend or database.
- No third-party scripts unless explicitly added, and nothing the page content depends on (frameworks, fonts, images) loads from another domain. The one explicit exception is Cloudflare Web Analytics, chosen for its privacy focus.
- Never publish Adam's email, phone number or ZIP code. Contact goes through LinkedIn.
- Images: only photos Adam owns or has permission to use. Logos appear only incidentally, and nothing internal or confidential from his employer.
- Run `npm test` and `npm run check` before committing.
- Ask before pushing, opening PRs, creating tags or running `npm run release`, because a tag deploys to production.
