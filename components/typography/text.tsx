import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type TextSize = 'l' | 'm' | 's'

interface TextProps {
    children: ReactNode
    size?: TextSize
    muted?: boolean
    className?: string
}

const sizeStyles: Record<TextSize, string> = {
    l: 'text-body-l',
    m: 'text-body-m',
    s: 'text-body-s',
}

const Text = ({ children, size = 'm', muted = false, className }: TextProps) => {
    return (
        <p className={cn(sizeStyles[size], muted && 'text-muted', className)}>{children}</p>
    )
}

export { Text }
