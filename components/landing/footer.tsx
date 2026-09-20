import { Container } from '@/components/layout/container'
import { Text } from '@/components/typography/text'
import { Logo } from '@/components/ui/logo'
import { siteConfig } from '@/config/site'

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer className="tone-dark sk-plane-dark sk-seam border-t border-line py-12">
            <Container>
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-col gap-2">
                        <Logo />
                        <Text size="s" muted>
                            {siteConfig.slogan}
                        </Text>
                    </div>

                    <div className="flex flex-col items-start gap-2 sm:items-end">
                        <a
                            href={`mailto:${siteConfig.contact.email}`}
                            className="text-body-s text-muted transition duration-(--duration-fast) ease-(--ease-standard) hover:text-ink-100"
                        >
                            {siteConfig.contact.email}
                        </a>
                        <Text size="s" muted>
                            © {year} {siteConfig.name}
                        </Text>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export { Footer }
