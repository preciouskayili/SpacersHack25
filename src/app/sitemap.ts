import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://www.codespaces.org';

  // Get all blog posts
  const BASE_URL = process.env.BASE_URL;
  const response = await fetch(`${BASE_URL}/api/blog`, {
    cache: 'no-store',
    next: { revalidate: 0 }
  });
  const blogs = await response.json();

  // Generate blog post URLs
  const blogUrls = blogs.docs.map((blog: any) => ({
    url: `${baseUrl}/blog/${blog._id}`,
    lastModified: new Date(blog.updatedAt || blog.createdAt),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Static routes
  const routes = [
    '',
    '/blog',
    '/events',
    '/brand-guidelines',
    '/press',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 1.0,
  }));

  return [...routes, ...blogUrls];
} 