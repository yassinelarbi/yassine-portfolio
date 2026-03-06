import type { MetadataRoute } from "next";

const baseUrl = "https://yassinelarbi.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/experience`, lastModified: new Date() },
    { url: `${baseUrl}/realisations`, lastModified: new Date() },
    { url: `${baseUrl}/formations`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
  ];
}