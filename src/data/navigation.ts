import type { NavConfig } from '@/types';

export const navigation: NavConfig = {
  links: [
    { label: 'Home', href: '/' },
    {
      label: 'About',
      href: '/about',
      children: [
        { label: 'Our Story', href: '/about' },
        { label: 'Leadership', href: '/leadership' },
      ],
    },
    { label: 'Services', href: '/services' },
    { label: 'Opportunity', href: '/opportunity' },
    { label: 'Capabilities', href: '/capabilities' },
    { label: 'Partnerships', href: '/partnerships' },
    { label: 'Contact', href: '/contact' },
  ],
  cta: {
    label: 'Request Briefing',
    href: '/contact?type=briefing',
  },
};
