import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://habeebamoo.vercel.app',
      lastModified: new Date(),
    },
  ]
}
