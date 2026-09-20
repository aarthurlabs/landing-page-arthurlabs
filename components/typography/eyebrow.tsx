import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface EyebrowProps {
    children: ReactNode
    className?: string
}

const Eyebrow = ({ children, className }: EyebrowProps) => {
    return (
        <span
            className={cn('inline-flex items-center gap-2 text-eyebrow text-muted uppercase', className)}
        >
            <span aria-hidden="true" className="size-1.5 rounded-pill bg-brand-500" />
            {children}
        </span>
    )
}

export { Eyebrow }
