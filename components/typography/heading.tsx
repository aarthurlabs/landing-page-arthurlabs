import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type HeadingLevel = 1 | 2 | 3 | 4
type HeadingSize = 'display-xl' | 'display-l' | 'l' | 'm' | 's'

interface HeadingProps {
    children: ReactNode
    level: HeadingLevel
    size: HeadingSize
    className?: string
}

const sizeStyles: Record<HeadingSize, string> = {
    'display-xl': 'text-display-xl',
    'display-l': 'text-display-l',
    l: 'text-heading-l',
    m: 'text-heading-m',
    s: 'text-heading-s',
}

const Heading = ({ children, level, size, className }: HeadingProps) => {
    const Element = `h${level}` as const

    return (
        <Element className={cn('font-heading text-balance', sizeStyles[size], className)}>
            {children}
        </Element>
    )
}

export { Heading }
