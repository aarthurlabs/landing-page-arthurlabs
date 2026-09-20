import { Container } from '@/components/layout/container'
import { Grid } from '@/components/layout/grid'
import { Section } from '@/components/layout/section'
import { Stack } from '@/components/layout/stack'
import { SectionHeader } from '@/components/landing/section-header'
import { Heading } from '@/components/typography/heading'
import { Text } from '@/components/typography/text'
import { homeContent } from '@/content/home'

const DiagnosticSection = () => {
    const { eyebrow, heading, description, items } = homeContent.diagnostic

    return (
        <Section tone="paper" id="diagnostico">
            <Container>
                <Stack gap="section">
                    <SectionHeader
                        eyebrow={eyebrow}
                        title={heading}
                        description={description}
                        className="reveal"
                    />

                    <Grid
                        as="ul"
                        columns="three"
                        divided
                        className="sk-panel reveal-group overflow-hidden rounded-lg"
                    >
                        {items.map((item, index) => (
                            <li
                                key={item.title}
                                className="sk-cell flex flex-col gap-6 p-6 lg:p-8"
                            >
                                <span className="text-body-s font-medium text-muted tabular-nums">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <div className="flex flex-col gap-2">
                                    <Heading level={3} size="s">
                                        {item.title}
                                    </Heading>
                                    <Text muted>{item.description}</Text>
                                </div>
                            </li>
                        ))}
                    </Grid>
                </Stack>
            </Container>
        </Section>
    )
}

export { DiagnosticSection }
