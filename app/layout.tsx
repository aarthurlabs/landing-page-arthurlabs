import type { Metadata } from "next"
import { Inter, Sora } from "next/font/google"
import { siteConfig } from "@/config/site"
import { getOrganizationJsonLd, getWebSiteJsonLd } from "@/lib/structured-data"
import "./globals.css"

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
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
    <html lang="pt-BR" className={`${sora.variable} ${inter.variable}`}>
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
