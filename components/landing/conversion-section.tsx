import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Stack } from '@/components/layout/stack'
import { SectionHeader } from '@/components/landing/section-header'
import { ButtonLink } from '@/components/ui/button'
import { siteConfig } from '@/config/site'
import { homeContent } from '@/content/home'

const ConversionSection = () => {
    const { eyebrow, heading, description, ctaLabel } = homeContent.conversion

    return (
        <Section tone="dark" spacing="lg" id="conversao">
            <Container>
                <Stack gap="lg" align="center" className="reveal">
                    <SectionHeader
                        eyebrow={eyebrow}
                        title={heading}
                        description={description}
                        align="center"
                    />

                    <ButtonLink href={siteConfig.contact.whatsappUrl} external fullWidth>
                        {ctaLabel}
                    </ButtonLink>
                </Stack>
            </Container>
        </Section>
    )
}

export { ConversionSection }
