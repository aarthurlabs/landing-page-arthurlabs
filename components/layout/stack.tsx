import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type StackGap = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'section'
type StackAlign = 'start' | 'center'

interface StackProps {
    children: ReactNode
    gap?: StackGap
    align?: StackAlign
    className?: string
}

const gapStyles: Record<StackGap, string> = {
    xs: 'gap-3',
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12',
    section: 'gap-10 lg:gap-16',
}

const alignStyles: Record<StackAlign, string> = {
    start: 'items-start',
    center: 'items-center',
}

const Stack = ({ children, gap = 'md', align = 'start', className }: StackProps) => {
    return (
        <div className={cn('flex w-full flex-col', gapStyles[gap], alignStyles[align], className)}>
            {children}
        </div>
    )
}

export { Stack }
