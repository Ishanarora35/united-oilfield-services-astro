export const site = {
  name: 'United Oilfield Services LLC',
  shortName: 'United Oilfield Services',
  brand: 'UOS',
  tagline: 'Build on Safety, Governed by Trust',
  url: 'https://unitedoilfields.com',
  description:
    'United Oilfield Services is a premier multi-service provider with the experience and commitment to safety to reliably provide all of your oilfield needs across upstream and midstream operations.',
  contact: {
    addressLines: ['2472 Millview', 'Zeeland, Michigan — 49464'],
    addressInline: '2472 Millview, Zeeland, Michigan — 49464',
    phone: '616-210-9891',
    phoneHref: 'tel:+16162109891',
    email: 'office@unitedoilfields.com',
    emailHref: 'mailto:office@unitedoilfields.com',
  },
} as const;

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Safety & Environment', href: '/safety' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
] as const;
