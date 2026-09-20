import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type ButtonVariant = 'primary' | 'dark' | 'outline' | 'ghost'

interface ButtonStyleOptions {
    variant: ButtonVariant
    fullWidth: boolean
    className?: string
}

// O anel de foco vem de docs/design.md; o outline usa currentColor porque um
// foco verde sobre o botão verde ficaria invisível.
const baseStyles =
    'inline-flex min-h-12 items-center justify-center gap-2 rounded-pill px-6 text-body-m font-medium transition duration-(--duration-base) ease-(--ease-standard) focus-visible:ring-4 focus-visible:ring-brand-500/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current'

// primary é a única variante com material completo; hover/active vivem na classe
// sk-button para que o estado pressionado não seja sobrescrito por utilitários.
const variantStyles: Record<ButtonVariant, string> = {
    primary: 'sk-button text-ink-975',
    dark: 'bg-ink-975 text-ink-100 hover:-translate-y-px hover:bg-ink-800 active:scale-[0.98]',
    outline: 'border border-line hover:bg-line/40 active:scale-[0.98]',
    ghost: 'hover:bg-line/40 active:scale-[0.98]',
}

const buttonStyles = ({ variant, fullWidth, className }: ButtonStyleOptions) =>
    cn(baseStyles, variantStyles[variant], fullWidth && 'w-full sm:w-auto', className)

interface ButtonProps {
    children: ReactNode
    variant?: ButtonVariant
    type?: 'button' | 'submit'
    disabled?: boolean
    fullWidth?: boolean
    className?: string
}

const Button = ({
    children,
    variant = 'primary',
    type = 'button',
    disabled = false,
    fullWidth = false,
    className,
}: ButtonProps) => {
    return (
        <button
            type={type}
            disabled={disabled}
            className={cn(
                buttonStyles({ variant, fullWidth, className }),
                'disabled:pointer-events-none disabled:opacity-40',
            )}
        >
            {children}
        </button>
    )
}

interface ButtonLinkProps {
    children: ReactNode
    href: string
    variant?: ButtonVariant
    fullWidth?: boolean
    external?: boolean
    onClick?: () => void
    className?: string
}

const ButtonLink = ({
    children,
    href,
    variant = 'primary',
    fullWidth = false,
    external = false,
    onClick,
    className,
}: ButtonLinkProps) => {
    return (
        <a
            href={href}
            onClick={onClick}
            target={external ? '_blank' : undefined}
            rel={external ? 'noreferrer' : undefined}
            className={buttonStyles({ variant, fullWidth, className })}
        >
            {children}
        </a>
    )
}

export { Button, ButtonLink }
