import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type ClusterGap = 'sm' | 'md' | 'lg'
type ClusterJustify = 'start' | 'center' | 'between'

interface ClusterProps {
    children: ReactNode
    gap?: ClusterGap
    justify?: ClusterJustify
    className?: string
}

const gapStyles: Record<ClusterGap, string> = {
    sm: 'gap-3',
    md: 'gap-6',
    lg: 'gap-8',
}

const justifyStyles: Record<ClusterJustify, string> = {
    start: 'justify-start',
    center: 'justify-center',
    between: 'justify-between',
}

const Cluster = ({ children, gap = 'md', justify = 'start', className }: ClusterProps) => {
    return (
        <div
            className={cn(
                'flex flex-wrap items-center',
                gapStyles[gap],
                justifyStyles[justify],
                className,
            )}
        >
            {children}
        </div>
    )
}

export { Cluster }
