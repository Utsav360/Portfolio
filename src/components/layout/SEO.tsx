import { Helmet } from 'react-helmet-async'
import { seoDefaults } from '../../data/site'

interface SEOProps {
  title: string
  description?: string
  path?: string
  image?: string
}

/** Per-route metadata. Drop this at the top of any page component with a specific title/description. */
export function SEO({ title, description = seoDefaults.description, path = '/', image }: SEOProps) {
  const fullTitle = `${title}${seoDefaults.titleSuffix}`
  const url = `${seoDefaults.siteUrl.replace(/\/$/, '')}${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={seoDefaults.keywords.join(', ')} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      {image && <meta property="og:image" content={image} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  )
}
