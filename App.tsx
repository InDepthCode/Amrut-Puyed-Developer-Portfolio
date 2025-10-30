
import React, { useState, lazy, Suspense } from 'react';
import { SectionNav } from './components/ui/SectionNav';
import { SectionObserver } from './components/utils/SectionObserver';
import Hero from './components/Hero';
import { ThemeToggle } from './components/ui/ThemeToggle';
import { GridPattern } from './components/ui/GridPattern';

const Projects = lazy(() => import('./components/Projects'));
const Resume = lazy(() => import('./components/Resume'));
const Footer = lazy(() => import('./components/Footer'));
const CTA = lazy(() => import('./components/CTA'));

const SECTIONS = ['hero', 'projects', 'resume', 'contact'];

const App: React.FC = () => {
    const [activeSection, setActiveSection] = useState('hero');

    const loadingFallback = (
        <div className="fixed inset-0 flex items-center justify-center bg-[#f6f9fa] dark:bg-[#20232a]">
            <div className="w-16 h-16 border-4 border-[#00b4f0] border-t-transparent rounded-full animate-spin"></div>
        </div>
    );

    return (
        <div className="text-[#4b5563] dark:text-[#a0a0a0] font-sans leading-relaxed overflow-x-hidden transition-colors duration-300">
            {/* Background Color Layer */}
            <div className="fixed inset-0 -z-30 bg-[#f6f9fa] dark:bg-[#20232a]" />

            {/* Global Grid Pattern Background */}
            <div className="fixed inset-0 -z-20 blur-[1px]" aria-hidden="true">
                <GridPattern
                    width={72}
                    height={72}
                    x={-1}
                    y={-1}
                    className="stroke-gray-500/15 dark:stroke-gray-500/10 w-full h-full"
                />
            </div>

            <div className="relative isolate">
                <ThemeToggle />
                <SectionNav sections={SECTIONS} activeSection={activeSection} />

                <div className="relative z-10">
                    {/* Hero is now outside the max-width container to allow full-width background effects */}
                    <SectionObserver sectionId="hero" onVisibilityChange={setActiveSection}><Hero /></SectionObserver>
                    
                    <main className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:pr-16 lg:pr-20">
                        <Suspense fallback={loadingFallback}>
                            <SectionObserver sectionId="projects" onVisibilityChange={setActiveSection}><Projects /></SectionObserver>
                            <SectionObserver sectionId="resume" onVisibilityChange={setActiveSection}><Resume /></SectionObserver>
                            <SectionObserver sectionId="contact" onVisibilityChange={setActiveSection}><CTA /></SectionObserver>
                            <Footer />
                        </Suspense>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default App;