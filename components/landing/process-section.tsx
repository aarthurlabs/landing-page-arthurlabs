import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Stack } from '@/components/layout/stack'
import { ProcessSteps } from '@/components/landing/process-steps'
import { ProofBlock } from '@/components/landing/proof-block'
import { SectionHeader } from '@/components/landing/section-header'
import { Text } from '@/components/typography/text'
import { Surface } from '@/components/ui/surface'
import { homeContent } from '@/content/home'

const ProcessSection = () => {
    const { eyebrow, heading, description, steps, proof } = homeContent.process

    return (
        <Section tone="white" id="processo">
            <Container>
                <Stack gap="section">
                    <SectionHeader
                        eyebrow={eyebrow}
                        title={heading}
                        description={description}
                        className="reveal"
                    />

                    <ProcessSteps steps={steps} />

                    <ProofBlock
                        eyebrow={proof.eyebrow}
                        title={proof.title}
                        description={proof.description}
                        className="reveal"
                        visual={
                            <Surface tone="paper" className="sk-well p-6 lg:p-8">
                                <Stack gap="md">
                                    <Text size="s" muted>
                                        {proof.questionsLabel}
                                    </Text>
                                    <ul className="flex flex-col">
                                        {proof.questions.map((question) => (
                                            <li
                                                key={question}
                                                className="border-t border-line py-3 text-body-m first:border-t-0 first:pt-0 last:pb-0"
                                            >
                                                {question}
                                            </li>
                                        ))}
                                    </ul>
                                </Stack>
                            </Surface>
                        }
                    />
                </Stack>
            </Container>
        </Section>
    )
}

export { ProcessSection }
