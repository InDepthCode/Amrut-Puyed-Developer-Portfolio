
import React from 'react';
// FIX: Import Variants type from framer-motion.
import { motion, Variants } from 'framer-motion';

interface SectionNavProps {
    sections: string[];
    activeSection: string;
}

// FIX: Explicitly type navVariants with Variants to fix type inference issue.
const navVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 1.5,
            type: 'spring',
            stiffness: 100,
        }
    }
};

// FIX: Explicitly type itemVariants with Variants.
const itemVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
};

export const SectionNav: React.FC<SectionNavProps> = ({ sections, activeSection }) => {
    
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.nav 
            className="fixed top-1/2 right-4 md:right-6 lg:right-8 transform -translate-y-1/2 z-40 hidden md:block"
            variants={navVariants}
            initial="hidden"
            animate="visible"
        >
            <ul className="space-y-3">
                {sections.map(section => (
                    <motion.li key={section} variants={itemVariants}>
                        <button 
                            onClick={() => scrollToSection(section)}
                            className="relative w-3 h-3 rounded-full bg-slate-700 hover:bg-cyan-400 transition-colors group"
                            aria-label={`Scroll to ${section} section`}
                        >
                            {activeSection === section && (
                                <motion.span 
                                    className="absolute inset-0 rounded-full bg-cyan-400"
                                    layoutId="activeSectionDot"
                                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                />
                            )}
                            <span className="absolute left-full top-1/2 -translate-y-1/2 ml-4 px-2 py-1 text-xs font-semibold text-slate-900 bg-cyan-400 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap capitalize pointer-events-none">
                                {section}
                            </span>
                        </button>
                    </motion.li>
                ))}
            </ul>
        </motion.nav>
    );
};
