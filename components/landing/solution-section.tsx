import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Stack } from '@/components/layout/stack'
import { PresenceJourney } from '@/components/landing/presence-journey'
import { SectionHeader } from '@/components/landing/section-header'
import { homeContent } from '@/content/home'

const SolutionSection = () => {
    const { eyebrow, heading, description, journey } = homeContent.solution

    return (
        <Section tone="dark" id="solucao">
            <Container>
                <Stack gap="section">
                    <SectionHeader
                        eyebrow={eyebrow}
                        title={heading}
                        description={description}
                        className="reveal"
                    />
                    <PresenceJourney steps={journey} />
                </Stack>
            </Container>
        </Section>
    )
}

export { SolutionSection }
