export interface TimelineEntry {
  title: string
  org: string
  dates: string
  description: string
  tech?: string[]
}

// Placeholder-friendly — ordered newest first, rendered as a vertical timeline.
export const timeline: TimelineEntry[] = [
  {
    title: 'Technical Support Specialist',
    org: 'Silverblaze Solutions',
    dates: 'March 2023 – Present',
    description:
      'Resolving 400+ tickets/year at the highest issue-resolution rate on the team. Authoring Confluence documentation that cuts resolution time for internal teams and customers, and working directly with R&D, Product Owners, and PMs on escalated issues.',
    tech: ['Jira', 'Confluence', 'Postman', 'Java', 'VPNs', 'Microsoft Teams'],
  },
  {
    title: 'E-Commerce Coordinator',
    org: 'Mosaic Sales Solutions',
    dates: 'July 2022 – March 2023',
    description:
      'Built e-commerce storefronts for small Canadian businesses on Shopify end-to-end — products, pages, SEO, branding, and marketing integrations — plus inventory, shipping, and ad-campaign support across Facebook, Instagram, and Google.',
    tech: ['Shopify', 'SEO', 'Email Marketing', 'Meta Ads', 'Google Ads'],
  },
  {
    title: 'Web Developer',
    org: 'Adaptia Design',
    dates: 'March 2022 – May 2022',
    description:
      'Oversaw WordPress/Shopify site upgrades that drove up to 65% increases in online sales, plus landing page builds using Klaviyo, Instapage, and Figma-designed assets.',
    tech: ['WordPress', 'Shopify', 'Klaviyo', 'Figma'],
  },
  {
    title: 'UX/UI Designer Intern',
    org: 'Communitech',
    dates: 'March 2021 – June 2021',
    description:
      'Supported digital transformation for 15+ small businesses, building e-commerce platforms and UI prototypes; optimized website layouts that improved SEO performance by up to 95%.',
    tech: ['UI Prototyping', 'SEO', 'E-Commerce'],
  },
]
