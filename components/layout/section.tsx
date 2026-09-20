import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type SectionTone = 'paper' | 'white' | 'dark'
type SectionSpacing = 'default' | 'lg'

interface SectionProps {
    children: ReactNode
    tone?: SectionTone
    spacing?: SectionSpacing
    id?: string
    className?: string
}

const toneStyles: Record<SectionTone, string> = {
    paper: 'tone-light sk-plane-paper',
    white: 'tone-light sk-plane-white',
    dark: 'tone-dark sk-plane-dark',
}

const spacingStyles: Record<SectionSpacing, string> = {
    default: 'py-section',
    lg: 'py-section-lg',
}

const Section = ({
    children,
    tone = 'white',
    spacing = 'default',
    id,
    className,
}: SectionProps) => {
    return (
        <section id={id} className={cn(toneStyles[tone], spacingStyles[spacing], className)}>
            {children}
        </section>
    )
}

export { Section }
