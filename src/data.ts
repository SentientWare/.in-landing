// Nav type
export type navLinkType = {
  label: string;
  url: string;
};

// Nav
const navLinks = [
  {
    label: 'Services',
    url: '#services',
  },
  {
    label: 'Projects',
    url: '#works',
  },
  {
    label: 'About',
    url: '#about-me-section',
  },
  {
    label: 'Career',
    url: 'https://career.sentientware.in',
  },
  {
    label: 'Contact',
    url: '#contact-section',
  },
];

const navbarLinks = [
  {
    label: 'Home',
    url: '#app',
  },
  ...navLinks,
];

const socialLinks = [
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/sentientware_tech/',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/company/sentientware-tech-solutions',
  },
  {
    label: 'Email',
    url: 'mailto:info@sentientware.in',
  },
];

const resourceLinks = [
  {
    label: 'Privacy Policy',
    url: '#privacy-policy',
  },
  {
    label: 'Internships',
    url: 'https://career.sentientware.in',
  },
];

const heroText =
  'A leading tech company specializing in custom software, web & mobile apps, AI solutions, cloud infrastructure, and cybersecurity — bringing ideas to life.';

const locationPlace = `19°18'36.0"N 84°47'24.0"E`;
const locationCountry = 'India, Berhampur';

// cal.com — update with SentientWare's own cal.com link if available
const dataCalNamespace = '30min';
const dataCalLink = 'sentientware/30min';
const dataCalConfig =
  '{"layout":"month_view", "theme": "dark", "brand": "#8C8C73"}';

export {
  socialLinks,
  resourceLinks,
  heroText,
  locationPlace,
  locationCountry,
  navLinks,
  navbarLinks,
  dataCalNamespace,
  dataCalLink,
  dataCalConfig,
};