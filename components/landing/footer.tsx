import { Container } from '@/components/layout/container'
import { Text } from '@/components/typography/text'
import { Logo } from '@/components/ui/logo'
import { siteConfig } from '@/config/site'

// Exibe apenas informação real. Contato e redes seguem pendentes em config/site.ts.
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

                    <Text size="s" muted>
                        © {year} {siteConfig.name}
                    </Text>
                </div>
            </Container>
        </footer>
    )
}

export { Footer }
