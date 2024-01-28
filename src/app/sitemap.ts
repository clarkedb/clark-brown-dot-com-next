import { Metadata, MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // FIXME: dates here are always today
  const routes = ['', '/blog'].map((route) => ({
    url: `https://clark-brown.com${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  const assets = ['/resume.pdf'].map((path) => ({
    url: `https://clark-brown.com${path}`,
    lastModified: '2024-01-19',
  }))

  return [...routes, ...assets]
}
