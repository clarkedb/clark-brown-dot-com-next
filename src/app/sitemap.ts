import { MetadataRoute } from 'next'

type Asset = {
  path: string
  dateModified: string
}

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://clark-brown.com'

  // FIXME: dates here are always today
  const routes = ['', '/blog']
  const routeEntries = ['', '/blog'].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  const assets: Asset[] = [{ path: '/resume.pdf', dateModified: '2024-01-19' }]
  const assetEntries = assets.map((asset) => ({
    url: `${siteUrl}${asset.path}`,
    lastModified: asset.dateModified,
  }))

  return [...routeEntries, ...assetEntries]
}
