import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type GridColumns = 'two' | 'three' | 'three-desktop' | 'twelve'
type GridGap = 'md' | 'lg' | 'xl'
type GridElement = 'div' | 'ul' | 'ol'

interface GridProps {
    children: ReactNode
    columns: GridColumns
    gap?: GridGap
    divided?: boolean
    as?: GridElement
    className?: string
}

const columnStyles: Record<GridColumns, string> = {
    two: 'grid-cols-1 md:grid-cols-2',
    three: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    'three-desktop': 'grid-cols-1 lg:grid-cols-3',
    twelve: 'grid-cols-1 lg:grid-cols-12',
}

const gapStyles: Record<GridGap, string> = {
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8 lg:gap-10',
}

const Grid = ({
    children,
    columns,
    gap = 'lg',
    divided = false,
    as = 'div',
    className,
}: GridProps) => {
    const Element = as

    return (
        <Element
            className={cn(
                'grid w-full',
                columnStyles[columns],
                divided ? 'gap-px bg-line' : gapStyles[gap],
                className,
            )}
        >
            {children}
        </Element>
    )
}

export { Grid }
