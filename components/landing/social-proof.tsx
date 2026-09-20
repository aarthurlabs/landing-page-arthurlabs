import { Cluster } from '@/components/layout/cluster'
import { Stack } from '@/components/layout/stack'
import { Eyebrow } from '@/components/typography/eyebrow'
import { Text } from '@/components/typography/text'
import type { SocialProofContent } from '@/content/home'

interface SocialProofProps {
    content: SocialProofContent
    align?: 'start' | 'center'
}

const SocialProof = ({ content, align = 'start' }: SocialProofProps) => {
    if (content.items.length === 0) {
        return null
    }

    return (
        <Stack gap="sm" align={align}>
            <Eyebrow>{content.label}</Eyebrow>
            <Cluster gap="lg" justify={align === 'center' ? 'center' : 'start'}>
                {content.items.map((item) => (
                    <div key={item.value} className="flex flex-col gap-1">
                        <span className="font-heading text-heading-s">{item.value}</span>
                        <Text size="s" muted>
                            {item.description}
                        </Text>
                    </div>
                ))}
            </Cluster>
        </Stack>
    )
}

export { SocialProof }
