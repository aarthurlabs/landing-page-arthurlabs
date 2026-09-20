import { Container } from '@/components/layout/container'
import { siteConfig } from '@/config/site'

const AvailabilityBar = () => {
    return (
        <div className="tone-dark sk-availability-bar">
            <Container>
                <div className="flex items-center justify-center gap-3 py-2 text-body-s">
                    <span className="relative flex size-1.5 shrink-0">
                        <span className="motion-safe:animate-ping absolute inline-flex size-full rounded-pill bg-brand-500 opacity-75" />
                        <span className="relative inline-flex size-1.5 rounded-pill bg-brand-500" />
                    </span>
                    <span className="hidden text-ink-100 sm:inline">
                        Agenda aberta para novos projetos.
                    </span>
                    <a
                        href={siteConfig.contact.whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-brand-400 underline-offset-4 transition duration-(--duration-fast) ease-(--ease-standard) hover:text-brand-300 hover:underline"
                    >
                        Pedir orçamento
                    </a>
                </div>
            </Container>
        </div>
    )
}

export { AvailabilityBar }
