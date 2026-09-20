import type { MetadataRoute } from "next"
import { siteConfig } from "@/config/site"

const sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ]
}

export default sitemap
