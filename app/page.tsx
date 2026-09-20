import { AvailabilityBar } from '@/components/landing/availability-bar'
import { ConversionSection } from '@/components/landing/conversion-section'
import { DiagnosticSection } from '@/components/landing/diagnostic-section'
import { Footer } from '@/components/landing/footer'
import { Header } from '@/components/landing/header'
import { HeroSection } from '@/components/landing/hero-section'
import { ProcessSection } from '@/components/landing/process-section'
import { SectionProgress } from '@/components/landing/section-progress'
import { SolutionSection } from '@/components/landing/solution-section'

const HomePage = () => {
    return (
        <>
            <AvailabilityBar />
            <Header />
            <SectionProgress />
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
