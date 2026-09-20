import type { ReactNode } from 'react'
import { Grid } from '@/components/layout/grid'
import { Stack } from '@/components/layout/stack'
import { Eyebrow } from '@/components/typography/eyebrow'
import { Heading } from '@/components/typography/heading'
import { Text } from '@/components/typography/text'
import { cn } from '@/lib/cn'

interface ProofBlockProps {
    /** Screenshot, projeto, resultado ou depoimento real quando existir. */
    visual: ReactNode
    eyebrow?: string
    title: string
    description: string
    className?: string
}

const ProofBlock = ({ visual, eyebrow, title, description, className }: ProofBlockProps) => {
    return (
        <Grid columns="twelve" gap="xl" className={cn('items-center', className)}>
            <div className="lg:col-span-5">{visual}</div>

            <Stack gap="md" className="lg:col-span-7">
                {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
                <Heading level={3} size="m" className="max-w-content-md">
                    {title}
                </Heading>
                <Text size="l" muted className="max-w-content-md">
                    {description}
                </Text>
            </Stack>
        </Grid>
    )
}

export { ProofBlock }
