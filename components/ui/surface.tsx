import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type SurfaceTone = 'paper' | 'white' | 'ink' | 'brand'

interface SurfaceProps {
    children: ReactNode
    tone?: SurfaceTone
    className?: string
}

const toneStyles: Record<SurfaceTone, string> = {
    paper: 'tone-light bg-paper border-line',
    white: 'tone-light bg-surface-light border-line',
    ink: 'tone-dark bg-ink-975 border-ink-700',
    brand: 'tone-light bg-brand-500 border-brand-600',
}

const Surface = ({ children, tone = 'white', className }: SurfaceProps) => {
    return (
        <div className={cn('rounded-lg border', toneStyles[tone], className)}>{children}</div>
    )
}

export { Surface }
