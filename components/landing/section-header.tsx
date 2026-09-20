import { Stack } from '@/components/layout/stack'
import { Eyebrow } from '@/components/typography/eyebrow'
import { Heading } from '@/components/typography/heading'
import { Text } from '@/components/typography/text'
import { cn } from '@/lib/cn'

interface SectionHeaderProps {
    eyebrow?: string
    title: string
    description?: string
    align?: 'left' | 'center'
    headingSize?: 'l' | 'm'
}

const SectionHeader = ({
    eyebrow,
    title,
    description,
    align = 'left',
    headingSize = 'l',
}: SectionHeaderProps) => {
    const isCentered = align === 'center'

    return (
        <Stack gap="xs" align={isCentered ? 'center' : 'start'} className={cn(isCentered && 'text-center')}>
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            <Heading level={2} size={headingSize} className="max-w-content-lg">
                {title}
            </Heading>
            {description && (
                <Text size="l" muted className="mt-2 max-w-content-md">
                    {description}
                </Text>
            )}
        </Stack>
    )
}

export { SectionHeader }
