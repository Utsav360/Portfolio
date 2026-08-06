export interface CaseStudy {
  problem: string
  context: string
  constraints: string[]
  architecture: string
  screenshots: { caption: string }[]
  results: string[]
  lessons: string
}

export interface Project {
  slug: string
  title: string
  description: string
  outcome: string
  platform: string
  tech: string[]
  githubUrl?: string
  liveUrl?: string
  stars?: number
  featured: boolean
  caseStudy: CaseStudy
}

// Placeholder-friendly array — add a project by pushing a new object with the same shape.
// `image` is intentionally omitted: ProjectCard renders a generated initials/gradient placeholder
// when no screenshot is supplied, so swapping in real screenshots later is a one-line change.
export const projects: Project[] = [
  {
    slug: 'rolling-dice-app',
    title: 'Rolling Dice App',
    description:
      'A responsive dice-rolling web app built to practice React fundamentals — components, props, and component state — in a Front-End Web Programming course.',
    outcome: 'Reinforced production-grade React patterns later used on every client build.',
    platform: 'React (client-side app)',
    tech: ['ReactJS', 'JSX', 'CSS3', 'Component State'],
    githubUrl: 'https://github.com/Utsav360/Rolling-Dice-Apk',
    featured: true,
    caseStudy: {
      problem:
        'Learn and demonstrate core React concepts — components, props, and state — by building something more interactive than a to-do list.',
      context:
        'Built during a Front-End Web Programming course as a hands-on way to internalize the component model before applying it to paid client work.',
      constraints: [
        'No external state library — state had to be managed with plain React (useState) to prove the fundamentals',
        'Had to stay accessible via keyboard (roll button focusable and operable without a mouse)',
        'Small scope: ship a complete, polished feature rather than a half-built larger app',
      ],
      architecture:
        'A single stateful <DiceRoller> parent owns the current face value and roll count, passing both down as props to presentational <Die> and <RollButton> children. Rolling triggers a state update and a CSS keyframe animation keyed off the new value.',
      screenshots: [{ caption: 'Dice roller in its default state' }, { caption: 'Mid-roll animation state' }],
      results: [
        'Delivered a fully working, deployed app rather than a tutorial exercise',
        'Became the reference implementation for component/props/state patterns reused on later freelance React work',
      ],
      lessons:
        'Building something tactile (a physical dice roll) made lifting state up and prop-drilling click in a way that abstract examples hadn\'t.',
    },
  },
  {
    slug: 'the-land-planners',
    title: 'The Land Planners',
    description:
      "An architecture and 3D rendering studio's client site, built from scratch on Shopify to showcase a portfolio of technical design work.",
    outcome: 'Gave a services firm (not a retailer) a credible, conversion-ready web presence on Shopify.',
    platform: 'Shopify',
    tech: ['Shopify', 'Liquid Theming', 'Responsive Design'],
    liveUrl: 'https://thelandplanners.com/',
    featured: true,
    caseStudy: {
      problem:
        'An architecture and 3D rendering firm had no web presence and needed a site that read as a services portfolio, not an e-commerce store — despite being built on an e-commerce platform.',
      context:
        'Client engagement sourced through the Digital Main Street program, working directly with the business owner from discovery through launch.',
      constraints: [
        'Shopify is retail-first by default — had to repurpose collections/products theming into a services portfolio layout',
        'Non-technical client needed to be able to update project photos after handoff',
        'Tight small-business budget ruled out custom app development',
      ],
      architecture:
        'Customized a Shopify theme so "products" model individual projects (renderings/plans) with metafields for scope, location, and completion date, and "collections" model service categories (architecture, 3D rendering, planning). Navigation and homepage sections were rebuilt in the theme editor to foreground portfolio work over checkout.',
      screenshots: [{ caption: 'Homepage hero and services overview' }, { caption: 'Project portfolio grid' }],
      results: [
        'Site shipped and has remained the client\'s primary web presence',
        'Client owner cited responsiveness and follow-through in a public review of the engagement',
      ],
      lessons:
        'Platform choice matters less than information architecture — a services business can work fine on commerce tooling if the content model is bent to fit the story, not the other way around.',
    },
  },
  {
    slug: 'random-photo-adventure',
    title: 'Random Photo Adventure',
    description:
      'A professional photography portfolio site with an image-first layout, built on Square CMS for a working photographer.',
    outcome: 'Replaced a social-media-only presence with a fast, professional portfolio the client could send to clients directly.',
    platform: 'Square',
    tech: ['Square CMS', 'Responsive Layout', 'Image Optimization'],
    liveUrl: 'https://www.randomphotoadventure.ca/',
    featured: true,
    caseStudy: {
      problem:
        "A photographer needed a site that let large images load quickly and load first — the portfolio is the pitch.",
      context: 'Direct client engagement; the photographer previously relied entirely on Instagram to showcase work.',
      constraints: [
        'Large, high-resolution images had to stay fast on mobile connections',
        'Client wanted zero ongoing maintenance burden — ruled out a custom CMS',
        'Needed booking/contact info visible without competing with the imagery',
      ],
      architecture:
        'Square CMS site structured around image-forward gallery templates, with responsive breakpoints tuned so the gallery reflows from a multi-column grid on desktop to a single stacked column on mobile, and a persistent lightweight contact bar.',
      screenshots: [{ caption: 'Gallery grid on desktop' }, { caption: 'Mobile single-column view' }],
      results: [
        "Client received direct feedback that the site 'understood their vision' and presented the work professionally",
        'Gave the client an owned, shareable portfolio independent of any single social platform',
      ],
      lessons:
        'For a portfolio-first site, the biggest UX lever is getting out of the way of the content — restraint on chrome and copy mattered more than any feature.',
    },
  },
  {
    slug: 'blue-coast-bitters',
    title: 'Blue Coast Bitters',
    description:
      'A ground-up e-commerce storefront built on Shopify with custom branding, product pages, and checkout flow.',
    outcome: 'Took the brand from concept to a fully transacting online store.',
    platform: 'Shopify',
    tech: ['Shopify', 'E-Commerce', 'Branding', 'SEO'],
    liveUrl: 'https://bluecoastbitters.com/',
    featured: true,
    caseStudy: {
      problem:
        'A new beverage brand needed a complete e-commerce presence built from nothing — no existing site, catalog, or brand assets online.',
      context: 'End-to-end build: product catalog setup, branding application, and store configuration for a first-time online seller.',
      constraints: [
        'Brand-new store with no existing SEO footprint to build on',
        'Needed a checkout flow simple enough for a first-time e-commerce client to manage themselves',
        'Product photography and copy had to be organized into a coherent catalog structure from scratch',
      ],
      architecture:
        'Shopify storefront with a custom theme pass for brand colors/typography, product catalog organized into collections by product line, metadata and alt text set per product for search visibility, and a streamlined single-page checkout using Shopify\'s native flow.',
      screenshots: [{ caption: 'Storefront homepage' }, { caption: 'Product detail and checkout flow' }],
      results: [
        'Store launched fully transacting, from product upload through checkout',
        'Established the client\'s first searchable online presence with structured metadata and SEO basics in place',
      ],
      lessons:
        'Doing the unglamorous catalog and metadata work up front is what actually determines whether a new store is findable later — branding gets noticed, but structure is what search engines see.',
    },
  },
  {
    slug: 'photography-from-the-soul',
    title: 'Photography from the Soul',
    description: 'A Squarespace photography portfolio built around custom branding.',
    outcome: 'Gave the photographer a branded, professional site distinct from template defaults.',
    platform: 'Squarespace',
    tech: ['Squarespace', 'Custom Branding'],
    liveUrl: 'https://www.photographyfromthesoul.ca/',
    featured: false,
    caseStudy: {
      problem: 'Needed a Squarespace build that didn\'t look like an out-of-the-box template.',
      context: 'Direct client engagement for a professional photography portfolio.',
      constraints: ['Squarespace theming limits vs. wanting a distinct visual identity'],
      architecture: 'Squarespace site with custom CSS overrides for typography and spacing layered on a portfolio template.',
      screenshots: [{ caption: 'Homepage' }],
      results: ['Delivered a portfolio site with a distinct visual identity within Squarespace\'s constraints'],
      lessons: 'Custom CSS injection goes a long way toward de-templating a page builder site.',
    },
  },
  {
    slug: 'kraft-island-cakes',
    title: 'Kraft Island Cakes',
    description: 'A Square CMS site for a cake business, focused on approachable browsing and ordering.',
    outcome: 'Gave a home-based bakery a clean, easy-to-browse online catalog.',
    platform: 'Square',
    tech: ['Square CMS', 'UX Design'],
    liveUrl: 'https://kraft-island-cakes.square.site/',
    featured: false,
    caseStudy: {
      problem: 'A cake business needed an approachable, easy-to-browse site for a non-technical owner to run.',
      context: 'Direct client engagement, emphasis on user experience over feature count.',
      constraints: ['Owner needed to update the menu/catalog without developer help'],
      architecture: 'Square CMS storefront with a simplified catalog structure and clear category navigation.',
      screenshots: [{ caption: 'Catalog homepage' }],
      results: ['Delivered a self-serviceable catalog site the owner maintains independently'],
      lessons: 'For small owner-operators, ease of self-service after handoff matters as much as launch-day polish.',
    },
  },
  {
    slug: 'casi-2022-landing-page',
    title: 'CASI 2022 Landing Page',
    description: 'A client-specified marketing landing page built in Klaviyo for a health products campaign.',
    outcome: 'Delivered a campaign-ready landing page to brief and on deadline.',
    platform: 'Klaviyo',
    tech: ['Klaviyo', 'Email Marketing', 'Landing Page Design'],
    liveUrl: 'https://www.designsforhealth.com/casi',
    featured: false,
    caseStudy: {
      problem: 'Needed a tightly-specified campaign landing page matching an existing brand system exactly.',
      context: 'Client-directed build with fixed copy, layout, and brand requirements.',
      constraints: ['Design and copy were client-specified, not open to creative reinterpretation', 'Fixed campaign launch date'],
      architecture: 'Landing page built in Klaviyo to match supplied brand guidelines, wired into the client\'s existing email campaign flow.',
      screenshots: [{ caption: 'Landing page hero section' }],
      results: ['Shipped on schedule and matched brand spec for campaign launch'],
      lessons: 'Some engagements reward precise execution over creative input — knowing which mode a project calls for is its own skill.',
    },
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const otherProjects = projects.filter((p) => !p.featured)

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug)
}
