# personal-website

Website built to try things out and keep it cheap.

Built with [Astro](https://astro.build) and the [AstroWind](https://github.com/arthelokyo/astrowind) template, deployed as static files to S3 + CloudFront. See `CONTEXT.md` for how the site is organized and released.

```bash
npm install
npm run dev      # http://localhost:4321
npm test         # build + validate
npm run release  # tag a release, which GitHub Actions deploys
```
