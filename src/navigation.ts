import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

const socialLinks = [
  { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/adam-farrell' },
  { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://linkedin.com/in/adam-farrell-92684829' },
  { ariaLabel: 'Medium', icon: 'tabler:brand-medium', href: 'https://medium.com/@adam.farrell' },
  { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
];

export const headerData = {
  links: [
    { text: 'Home', href: getPermalink('/') },
    { text: 'Blog', href: getBlogPermalink() },
    { text: 'Resume', href: getPermalink('/resume') },
  ],
  actions: [],
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks,
  footNote: `© ${new Date().getFullYear()} Adam Farrell · Built with <a class="underline" href="https://astro.build">Astro</a> and <a class="underline" href="https://github.com/arthelokyo/astrowind">AstroWind</a><br />Views are my own and do not represent my employer. Trademarks and logos belong to their respective owners.`,
};
