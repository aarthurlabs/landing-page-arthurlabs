import { cn } from '@/lib/cn'

interface LogoMarkProps {
    className?: string
}

const LogoMark = ({ className }: LogoMarkProps) => {
    return (
        <svg
            viewBox="0 0 2048 2048"
            aria-hidden="true"
            className={cn('size-12', className)}
        >
            <g fill="#00E676">
                <rect x="507" y="389" width="769" height="254" rx="12" />
                <rect x="1288" y="643" width="253" height="254" rx="12" />
                <rect x="772" y="897" width="516" height="254" rx="12" />
                <rect x="1288" y="1151" width="253" height="254" rx="12" />
                <rect x="1036" y="1405" width="252" height="254" rx="12" />
            </g>
        </svg>
    )
}

export { LogoMark }
