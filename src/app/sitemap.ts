import { siteConfig } from '@/config/site';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteConfig.baseUrl}`,
      lastModified: new Date(),
    },
    {
      url: `${siteConfig.baseUrl}/legal/imprint`,
      lastModified: new Date(),
    },
    {
      url: `${siteConfig.baseUrl}/legal/privacy-policy`,
      lastModified: new Date(),
    },
    {
      url: `${siteConfig.baseUrl}/legal/tac`,
      lastModified: new Date(),
    },
  ];
}
