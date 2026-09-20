import { ConversionSection } from '@/components/landing/conversion-section'
import { DiagnosticSection } from '@/components/landing/diagnostic-section'
import { Footer } from '@/components/landing/footer'
import { Header } from '@/components/landing/header'
import { HeroSection } from '@/components/landing/hero-section'
import { ProcessSection } from '@/components/landing/process-section'
import { SolutionSection } from '@/components/landing/solution-section'

const HomePage = () => {
    return (
        <>
            <Header />
            <main>
                <HeroSection />
                <DiagnosticSection />
                <SolutionSection />
                <ProcessSection />
                <ConversionSection />
            </main>
            <Footer />
        </>
    )
}

export default HomePage
