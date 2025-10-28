import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Footer from './components/Footer';
import { CTA } from './components/CTA';
import { GridPattern } from './components/ui/GridPattern';

const App: React.FC = () => {
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

                <div 
                    className="absolute -top-40 -left-60 lg:-top-60 lg:-left-80 w-[28rem] h-[28rem] lg:w-[40rem] lg:h-[40rem] bg-violet-600/40 rounded-full mix-blend-plus-lighter filter blur-3xl opacity-50 animate-blob"
                    style={{ animationDelay: '0s' }}
                ></div>
                <div 
                    className="absolute top-1/2 -right-40 lg:top-1/3 lg:-right-60 w-[28rem] h-[28rem] lg:w-[40rem] lg:h-[40rem] bg-cyan-500/40 rounded-full mix-blend-plus-lighter filter blur-3xl opacity-50 animate-blob"
                    style={{ animationDelay: '2s' }}
                ></div>
                 <div 
                    className="absolute bottom-0 left-1/4 w-[28rem] h-[28rem] lg:w-[40rem] lg:h-[40rem] bg-pink-500/40 rounded-full mix-blend-plus-lighter filter blur-3xl opacity-40 animate-blob"
                    style={{ animationDelay: '4s' }}
                ></div>

                <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Hero />
                    <Projects />
                    <Resume />
                    <CTA />
                    <Footer />
                </main>
            </div>
        </div>
    );
};

export default App;