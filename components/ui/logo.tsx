import Image from 'next/image'
import symbol from '@/public/brand/arthurlabs-symbol.png'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/cn'

interface LogoProps {
    priority?: boolean
    className?: string
}

// Lockup oficial: símbolo + wordmark. O símbolo é decorativo porque o nome já
// aparece como texto ao lado.
const Logo = ({ priority = false, className }: LogoProps) => {
    return (
        <span className={cn('inline-flex items-center gap-2', className)}>
            <Image src={symbol} alt="" width={40} height={40} priority={priority} className="size-10" />
            <span className="font-heading text-heading-s">{siteConfig.name}</span>
        </span>
    )
}

export { Logo }
