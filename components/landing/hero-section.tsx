import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Stack } from '@/components/layout/stack'
import { SocialProof } from '@/components/landing/social-proof'
import { Heading } from '@/components/typography/heading'
import { Text } from '@/components/typography/text'
import { ButtonLink } from '@/components/ui/button'
import { siteConfig } from '@/config/site'
import { homeContent } from '@/content/home'

const HeroSection = () => {
    const { headline, description, ctaLabel, supportingText, socialProof } = homeContent.hero

    return (
        <Section tone="white" spacing="lg" className="sk-hero-ambient">
            <Container>
                <Stack gap="lg" align="center" className="text-center">
                    {socialProof && <SocialProof content={socialProof} align="center" />}

                    <Stack gap="md" align="center">
                        <Heading level={1} size="display-l" className="max-w-content-lg">
                            {headline}
                        </Heading>
                        <Text size="l" muted className="hero-in max-w-content-md">
                            {description}
                        </Text>
                    </Stack>

                    <Stack gap="sm" align="center" className="hero-in-cta">
                        <ButtonLink href={siteConfig.contact.whatsappUrl} external fullWidth>
                            {ctaLabel}
                        </ButtonLink>
                        <Text size="s" muted>
                            {supportingText}
                        </Text>
                    </Stack>
                </Stack>
            </Container>
        </Section>
    )
}

export { HeroSection }
