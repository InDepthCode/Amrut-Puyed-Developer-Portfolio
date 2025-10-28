import React from 'react';
// FIX: Import Variants, TargetAndTransition, and Transition types from framer-motion to fix type errors.
import { motion, Variants, TargetAndTransition, Transition } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { SOCIAL_LINKS } from '../constants';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { MailIcon } from './icons/MailIcon';

// FIX: Add Variants type to containerVariants.
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.5,
        },
    },
};

// FIX: Add Variants type to itemVariants. This fixes the error where 'spring' was inferred as 'string' instead of a specific animation type.
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

// FIX: Add TargetAndTransition type to iconHover. This fixes the error where 'spring' was inferred as 'string'.
const iconHover: TargetAndTransition = {
    scale: 1.3,
    transition: { type: 'spring', stiffness: 300 },
};

// FIX: Define badge transition to avoid inline object type inference issues.
const badgeTransition: Transition = { type: 'spring', stiffness: 300 };


const Hero: React.FC = () => {
    return (
        <motion.section 
            className="min-h-screen flex flex-col justify-center text-center py-20"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.div variants={itemVariants}>
                <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-cyan-400 to-pink-400 animate-gradient"
                    style={{ filter: 'drop-shadow(0 0 1.5rem rgba(115, 183, 255, 0.4))' }}>
                    Amrut Puyed
                </h1>
            </motion.div>
            <motion.div variants={itemVariants} className="mt-4 text-lg md:text-xl font-semibold text-slate-200 min-h-[56px] md:min-h-[28px] flex items-center justify-center">
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
                    <motion.span 
                        key={i} 
                        className="bg-slate-800/80 border border-cyan-400/30 text-slate-300 text-xs font-medium px-3 py-1.5 rounded-full shadow-lg shadow-cyan-500/10"
                        whileHover={{ scale: 1.05, y: -2, color: '#67e8f9', borderColor: 'rgba(103, 232, 249, 0.7)' }}
                        transition={badgeTransition}
                    >
                        {badge}
                    </motion.span>
                ))}
            </motion.div>
            <motion.div variants={itemVariants} className="mt-8 flex justify-center space-x-6">
                <motion.a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" whileHover={iconHover} className="text-slate-400 hover:text-cyan-400">
                    <GithubIcon className="w-6 h-6" />
                </motion.a>
                <motion.a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" whileHover={iconHover} className="text-slate-400 hover:text-cyan-400">
                    <LinkedinIcon className="w-6 h-6" />
                </motion.a>
                <motion.a href={SOCIAL_LINKS.email} aria-label="Email" whileHover={iconHover} className="text-slate-400 hover:text-cyan-400">
                    <MailIcon className="w-6 h-6" />
                </motion.a>
            </motion.div>
        </motion.section>
    );
};

export default Hero;
