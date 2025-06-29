import { MetadataRoute } from 'next'

interface Post {
  id: number;
  title: string;
  body: string;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch all posts to include in sitemap
  let posts: Post[] = []
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (response.ok) {
      posts = await response.json()
    }
  } catch (error) {
    console.error('Failed to fetch posts for sitemap:', error)
  }

  // Static pages
  const staticPages = [
    {
      url: 'https://myblog.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: 'https://myblog.vercel.app/blog',
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: 'https://myblog.vercel.app/aboutUs',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // Dynamic post pages
  const postPages = posts.map((post: Post) => ({
    url: `https://myblog.vercel.app/blog/${post.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...postPages]
} 