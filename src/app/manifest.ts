import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'MyBlog - Modern Blog Application',
    short_name: 'MyBlog',
    description: 'A modern, responsive blog application with beautiful UI and excellent user experience.',
    start_url: '/',
    display: 'standalone',
    background_color: '#1e1b4b',
    theme_color: '#667eea',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['entertainment', 'news', 'social'],
    lang: 'en',
    orientation: 'portrait',
    scope: '/',
  }
} 