import Image from 'next/image'
import symbol from '@/public/brand/arthurlabs-symbol.svg'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/cn'

type LogoVariant = 'mark' | 'full'

interface LogoProps {
    variant?: LogoVariant
    priority?: boolean
    className?: string
}

const markSize: Record<LogoVariant, string> = {
    mark: 'size-12',
    full: 'size-10',
}

const Logo = ({ variant = 'full', priority = false, className }: LogoProps) => {
    return (
        <span className={cn('inline-flex items-center gap-2', className)}>
            <Image
                src={symbol}
                alt=""
                priority={priority}
                className={markSize[variant]}
            />
            {variant === 'full' && (
                <span className="font-heading text-heading-s">
                    {siteConfig.name}
                </span>
            )}
        </span>
    )
}

export { Logo }
