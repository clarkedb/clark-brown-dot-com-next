import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://clark-brown.com'

  // FIXME: dates here are always today
  const routes = ['', '/blog', '/talks', '/privacy', '/imprint']
  const routeEntries = routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routeEntries]
}
