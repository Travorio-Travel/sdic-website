interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Sudan Digital Infrastructure Company',
  alternateName: 'SDIC',
  description:
    'A Sudanese-led technology company building digital infrastructure, enterprise software, and national-scale platforms for Sudan\'s reconstruction and development.',
  url: 'https://sdic.sd',
  logo: 'https://sdic.sd/images/logo.svg',
  foundingDate: '2026',
  founders: [
    {
      '@type': 'Person',
      name: 'Rami Taha',
      jobTitle: 'Co-Founder & CEO',
    },
    {
      '@type': 'Person',
      name: 'Mazin Fagiri',
      jobTitle: 'Co-Founder & CTO',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Khartoum',
    addressCountry: 'SD',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'contact@sdic.sd',
    contactType: 'general',
  },
  sameAs: [],
};

export function createBreadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `https://sdic.sd${item.href}`,
    })),
  };
}
