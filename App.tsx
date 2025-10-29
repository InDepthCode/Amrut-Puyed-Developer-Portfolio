import React, { useState, lazy, Suspense } from 'react';
import { GridPattern } from './components/ui/GridPattern';
import { SectionNav } from './components/ui/SectionNav';
import { SectionObserver } from './components/utils/SectionObserver';
import Hero from './components/Hero';
import { DeferredRender } from './components/utils/DeferredRender';

const Projects = lazy(() => import('./components/Projects'));
const Resume = lazy(() => import('./components/Resume'));
const Footer = lazy(() => import('./components/Footer'));
const CTA = lazy(() => import('./components/CTA'));

const SECTIONS = ['hero', 'projects', 'resume', 'contact'];

const App: React.FC = () => {
    const [activeSection, setActiveSection] = useState('hero');

    const loadingFallback = (
        <div className="fixed inset-0 flex items-center justify-center bg-slate-950">
            <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
    );

    return (
        <div className="bg-slate-950 text-slate-300 font-sans leading-relaxed overflow-x-hidden">
            <div className="relative isolate">
                <GridPattern
                    squares={[
                        [4, 4],
                        [7, 1],
                        [10, 5],
                        [13, 3],
                    ]}
                    className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                />
                <DeferredRender>
                    <div 
                        className="animated-blob-mobile absolute -top-40 -left-60 lg:-top-60 lg:-left-80 w-[28rem] h-[28rem] lg:w-[40rem] lg:h-[40rem] bg-violet-600/40 rounded-full filter blur-2xl opacity-50 animate-blob"
                        style={{ animationDelay: '0s' }}
                    ></div>
                    <div 
                        className="animated-blob-mobile absolute top-1/2 -right-40 lg:top-1/3 lg:-right-60 w-[28rem] h-[28rem] lg:w-[40rem] lg:h-[40rem] bg-cyan-500/40 rounded-full filter blur-2xl opacity-50 animate-blob"
                        style={{ animationDelay: '2s' }}
                    ></div>
                     <div 
                        className="animated-blob-mobile absolute bottom-0 left-1/4 w-[28rem] h-[28rem] lg:w-[40rem] lg:h-[40rem] bg-pink-500/40 rounded-full filter blur-2xl opacity-40 animate-blob"
                        style={{ animationDelay: '4s' }}
                    ></div>
                </DeferredRender>

                <SectionNav sections={SECTIONS} activeSection={activeSection} />

                <div className="relative z-10">
                    <main className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:pr-16 lg:pr-20">
                        <SectionObserver sectionId="hero" onVisibilityChange={setActiveSection}><Hero /></SectionObserver>
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