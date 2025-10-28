import React, { useState } from 'react';
import { motion, Variants, TargetAndTransition, Transition, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { SOCIAL_LINKS } from '../constants';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { MailIcon } from './icons/MailIcon';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.4,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 10,
        },
    },
};

const iconHover: TargetAndTransition = {
    scale: 1.3,
    transition: { type: 'spring', stiffness: 300 },
};

const badgeTransition: Transition = { type: 'spring', stiffness: 300 };

// Simple inline SVG icons for badges
const BadgeIcons = {
    'Open-source contributor': (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
    ),
    '500+ GitHub commits/year': (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
    ),
    'LinkedIn content creator': (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
    ),
};


const Hero: React.FC = () => {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        const emailAddress = SOCIAL_LINKS.email.replace('mailto:', '');
        navigator.clipboard.writeText(emailAddress)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            })
            .catch(err => {
                console.error('Failed to copy email: ', err);
            });
    };

    return (
        <motion.section 
            id="hero"
            className="min-h-screen flex flex-col justify-center text-center py-20"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.div variants={itemVariants} className="mb-8">
                 <a 
                    href="#contact" // Assuming there's a contact section with this id
                    className="inline-flex items-center gap-2 bg-green-900/60 border border-green-400/30 text-green-300 text-sm font-semibold px-4 py-2 rounded-full shadow-lg shadow-green-500/20 group transition-all hover:bg-green-900/80 hover:border-green-400/50"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Exploring New Roles & Projects
                </a>
            </motion.div>

            <motion.div variants={itemVariants}>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold font-display">
                     <span className="block text-3xl md:text-4xl font-medium text-slate-300 mb-2">Hey, I'm</span>
                     <span 
                        className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-cyan-400 to-pink-400 animate-gradient"
                        style={{ filter: 'drop-shadow(0 0 1.5rem rgba(115, 183, 255, 0.4))' }}
                     >
                        Amrut Puyed
                    </span>
                </h1>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mt-6 text-lg md:text-xl font-semibold text-slate-200 min-h-[56px] md:min-h-[28px] flex items-center justify-center">
                <TypeAnimation
                    sequence={[
                        'Senior Software Engineer | Full Stack & AI Automation',
                    ]}
                    wrapper="span"
                    speed={50}
                    cursor={true}
                    repeat={0}
                />
            </motion.div>
            
            <motion.p variants={itemVariants} className="mt-6 max-w-2xl mx-auto text-slate-400">
                Building impact-driven software with cloud-native architectures, automation, and AI. Obsessed with scalable tech for real business growth.
            </motion.p>
            
            <motion.div variants={itemVariants} className="mt-8 flex justify-center flex-wrap gap-3">
                {['Open-source contributor', '500+ GitHub commits/year', 'LinkedIn content creator'].map((badge, i) => (
                    <motion.div 
                        key={i} 
                        className="flex items-center gap-2 bg-slate-800/80 border border-cyan-400/30 text-slate-300 text-xs font-medium px-3 py-1.5 rounded-full shadow-lg shadow-cyan-500/10"
                        whileHover={{ scale: 1.05, y: -2, color: '#67e8f9', borderColor: 'rgba(103, 232, 249, 0.7)' }}
                        transition={badgeTransition}
                    >
                        {BadgeIcons[badge as keyof typeof BadgeIcons]}
                        <span>{badge}</span>
                    </motion.div>
                ))}
            </motion.div>
            
            <motion.div variants={itemVariants} className="mt-10 flex justify-center items-center space-x-6">
                <motion.a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" whileHover={iconHover} className="text-slate-400 hover:text-cyan-400">
                    <GithubIcon className="w-6 h-6" />
                </motion.a>
                <motion.a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" whileHover={iconHover} className="text-slate-400 hover:text-cyan-400">
                    <LinkedinIcon className="w-6 h-6" />
                </motion.a>
                <div className="relative">
                    <motion.button
                        onClick={handleCopyEmail}
                        aria-label="Copy Email"
                        whileHover={iconHover}
                        className="text-slate-400 hover:text-cyan-400 bg-transparent border-0 p-0 cursor-pointer"
                        title="Copy email to clipboard"
                    >
                        <MailIcon className="w-6 h-6" />
                    </motion.button>
                    <AnimatePresence>
                        {copied && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs font-semibold text-slate-900 bg-cyan-400 rounded-md whitespace-nowrap pointer-events-none"
                            >
                                Copied!
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </motion.section>
    );
};

export default Hero;