import { siteConfig } from '@/config/site'

interface OrganizationJsonLd {
    '@context': 'https://schema.org'
    '@type': 'Organization'
    name: string
    url: string
}

export const getOrganizationJsonLd = (): OrganizationJsonLd => {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: siteConfig.name,
        url: siteConfig.url,
    }
}

interface WebSiteJsonLd {
    '@context': 'https://schema.org'
    '@type': 'WebSite'
    name: string
    url: string
    inLanguage: string
}

export const getWebSiteJsonLd = (): WebSiteJsonLd => {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: siteConfig.name,
        url: siteConfig.url,
        inLanguage: siteConfig.language,
    }
}
