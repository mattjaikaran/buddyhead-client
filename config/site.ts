export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'BuddyHead',
  description: 'haha oh hell yeah',
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Zine',
      href: '/blog',
    },
    {
      title: 'Reviews',
      href: '/reviews',
    },
    {
      title: 'About',
      href: '/about',
    },
    {
      title: 'Contact',
      href: '/contact',
    },
    {
      title: 'Links',
      href: '/links',
    },
  ],
  links: {
    twitter: 'https://twitter.com/buddyhead',
    instagram: 'https://instagram.com/buddyhead_',
  },
};
