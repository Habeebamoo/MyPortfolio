import { MetadataRoute } from 'next'
import { projects } from '@/data/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const projectUrls = projects.map((project) => ({
    url: `https://habeebamoo.vercel.app/project/${project.slug}`,
    lastModified: new Date(project.updatedAt || project.createdAt),
  }))

  return [
    {
      url: 'https://habeebamoo.vercel.app', // homepage
      lastModified: new Date(),
    },
    ...projectUrls,
  ]
}
