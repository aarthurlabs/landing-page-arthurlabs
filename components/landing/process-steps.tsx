import { Heading } from '@/components/typography/heading'
import { Text } from '@/components/typography/text'

interface ProcessStepsProps {
    steps: { number: string; title: string; description: string }[]
}

const ProcessSteps = ({ steps }: ProcessStepsProps) => {
    return (
        <ol className="sk-seam w-full border-t border-line">
            {steps.map((step) => (
                <li
                    key={step.number}
                    className="sk-rule border-b border-line py-6 lg:grid lg:grid-cols-12 lg:items-baseline lg:gap-6 lg:py-8"
                >
                    <div className="flex items-baseline gap-4 lg:col-span-5">
                        <span className="text-body-s font-medium text-muted tabular-nums">
                            {step.number}
                        </span>
                        <Heading level={3} size="s">
                            {step.title}
                        </Heading>
                    </div>
                    <Text muted className="mt-2 max-w-content-md lg:col-span-7 lg:mt-0">
                        {step.description}
                    </Text>
                </li>
            ))}
        </ol>
    )
}

export { ProcessSteps }
