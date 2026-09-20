import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface ContainerProps {
    children: ReactNode
    className?: string
}

const Container = ({ children, className }: ContainerProps) => {
    return (
        <div className={cn('mx-auto w-full max-w-page px-5 md:px-8 lg:px-10', className)}>
            {children}
        </div>
    )
}

export { Container }
