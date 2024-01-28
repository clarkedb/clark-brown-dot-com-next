import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: 'https://clark-brown.com/sitemap.xml',
    host: 'https://clark-brown.com',
  }
}
