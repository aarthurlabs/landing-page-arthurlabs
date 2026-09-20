import { Grid } from '@/components/layout/grid'
import { Heading } from '@/components/typography/heading'
import { Text } from '@/components/typography/text'

interface PresenceJourneyProps {
    steps: { step: string; title: string; description: string }[]
}

const PresenceJourney = ({ steps }: PresenceJourneyProps) => {
    return (
        <Grid
            as="ol"
            columns="three-desktop"
            divided
            className="sk-panel overflow-hidden rounded-lg"
        >
            {steps.map((step) => (
                <li key={step.step} className="sk-cell flex flex-col gap-8 p-8 lg:p-10">
                    <span className="font-heading text-heading-m text-brand-500 tabular-nums">
                        {step.step}
                    </span>
                    <div className="flex flex-col gap-3">
                        <Heading level={3} size="s">
                            {step.title}
                        </Heading>
                        <Text muted>{step.description}</Text>
                    </div>
                </li>
            ))}
        </Grid>
    )
}

export { PresenceJourney }
