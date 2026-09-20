import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Stack } from '@/components/layout/stack'
import { SectionHeader } from '@/components/landing/section-header'
import { Button, ButtonLink } from '@/components/ui/button'
import { siteConfig } from '@/config/site'
import { homeContent } from '@/content/home'

const ConversionSection = () => {
    const { eyebrow, heading, description, ctaLabel } = homeContent.conversion
    const contactUrl = siteConfig.contact.url

    return (
        <Section tone="dark" spacing="lg" id="conversao">
            <Container>
                <Stack gap="lg" align="center">
                    <SectionHeader
                        eyebrow={eyebrow}
                        title={heading}
                        description={description}
                        align="center"
                    />

                    {/* TODO: ativar quando siteConfig.contact.url tiver um canal real. */}
                    {contactUrl ? (
                        <ButtonLink href={contactUrl} external fullWidth>
                            {ctaLabel}
                        </ButtonLink>
                    ) : (
                        <Button disabled fullWidth>
                            {ctaLabel}
                        </Button>
                    )}
                </Stack>
            </Container>
        </Section>
    )
}

export { ConversionSection }
