import type { Metadata } from "next"
import { Geist, Manrope } from "next/font/google"
import { siteConfig } from "@/config/site"
import { getOrganizationJsonLd, getWebSiteJsonLd } from "@/lib/structured-data"
import "./globals.css"

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
})

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
}

const RootLayout = ({ children }: LayoutProps<"/">) => {
  const jsonLd = [getOrganizationJsonLd(), getWebSiteJsonLd()]

  return (
    <html lang="pt-BR" className={`${manrope.variable} ${geist.variable}`}>
      <body>
        {jsonLd.map((schema) => (
          <script
            key={schema["@type"]}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        {children}
      </body>
    </html>
  )
}

export default RootLayout
