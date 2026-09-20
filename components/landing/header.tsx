import Link from 'next/link'
import { Cluster } from '@/components/layout/cluster'
import { Container } from '@/components/layout/container'
import { MobileNav } from '@/components/landing/mobile-nav'
import { ButtonLink } from '@/components/ui/button'
import { Logo } from '@/components/ui/logo'
import { siteConfig } from '@/config/site'

const navItems = [
    { label: 'Diagnóstico', href: '#diagnostico' },
    { label: 'Solução', href: '#solucao' },
    { label: 'Processo', href: '#processo' },
]

const ctaLabel = 'Falar com a ArthurLabs'
const ctaHref = '#conversao'

const Header = () => {
    return (
        <header className="tone-light sk-header relative">
            <Container>
                <div className="flex items-center justify-between gap-6 py-4">
                    <Link href="/" aria-label={`${siteConfig.name} — início`}>
                        <Logo priority />
                    </Link>

                    <nav aria-label="Principal" className="hidden lg:block">
                        <Cluster gap="lg">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="text-body-m text-muted transition duration-(--duration-fast) ease-(--ease-standard) hover:text-ink-975"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </Cluster>
                    </nav>

                    <div className="hidden lg:block">
                        <ButtonLink href={ctaHref}>{ctaLabel}</ButtonLink>
                    </div>

                    <MobileNav items={navItems} ctaLabel={ctaLabel} ctaHref={ctaHref} />
                </div>
            </Container>
        </header>
    )
}

export { Header }
