'use client'

import { useState } from 'react'
import { Container } from '@/components/layout/container'
import { ButtonLink } from '@/components/ui/button'

interface MobileNavProps {
    items: { label: string; href: string }[]
    ctaLabel: string
    ctaHref: string
}

const MobileNav = ({ items, ctaLabel, ctaHref }: MobileNavProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const close = () => setIsOpen(false)

    return (
        <div className="lg:hidden">
            <button
                type="button"
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
                aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
                onClick={() => setIsOpen((open) => !open)}
                className="-mr-2 flex size-11 items-center justify-center rounded-sm transition duration-(--duration-fast) ease-(--ease-standard) hover:bg-line/40"
            >
                <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    className="size-5"
                >
                    {isOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
                </svg>
            </button>

            {isOpen && (
                <div
                    id="mobile-navigation"
                    className="absolute inset-x-0 top-full z-50 border-y border-line bg-surface-light shadow-soft"
                >
                    <Container>
                        <nav aria-label="Principal" className="flex flex-col py-4">
                            {items.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={close}
                                    className="flex min-h-11 items-center text-body-m"
                                >
                                    {item.label}
                                </a>
                            ))}
                            <ButtonLink
                                href={ctaHref}
                                onClick={close}
                                external
                                className="mt-4 w-full"
                            >
                                {ctaLabel}
                            </ButtonLink>
                        </nav>
                    </Container>
                </div>
            )}
        </div>
    )
}

export { MobileNav }
