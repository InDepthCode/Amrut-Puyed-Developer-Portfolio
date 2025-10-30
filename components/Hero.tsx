
import React, { useState, useRef } from 'react';
import { motion, Variants, TargetAndTransition, Transition, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { SOCIAL_LINKS, RESUME_DATA } from '../constants';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { MailIcon } from './icons/MailIcon';
import { useMediaQuery } from './utils/useMediaQuery';
import { useMousePosition } from './utils/useMousePosition';
import { GridPattern } from './ui/GridPattern';

const desktopContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.4,
        },
    },
};

const mobileContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const desktopItemVariants: Variants = {
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

const mobileItemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut'
        },
    },
};

const iconHover: TargetAndTransition = {
    scale: 1.3,
    transition: { type: 'spring', stiffness: 300 },
};

const badgeTransition: Transition = { type: 'spring', stiffness: 300 };

const BadgeIcons = {
    star: (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
    ),
    code: (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
    ),
    linkedin: (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
    ),
};

const badges = [
    { 
        text: 'Building in Public', 
        icon: 'star',
    },
    { 
        text: 'Shipping Code Daily',
        icon: 'code',
    },
    { 
        text: 'AI & Tech Blogger',
        icon: 'linkedin',
    }
];

const Hero: React.FC = () => {
    const [copied, setCopied] = useState(false);
    const isMobile = useMediaQuery('(max-width: 768px)');
    const { x, y } = useMousePosition();
    const heroRef = useRef<HTMLElement>(null);
    
    // Calculate mouse position relative to the hero section for accurate spotlight positioning
    let relX = x;
    let relY = y;
    if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        relX = x - rect.left;
        relY = y - rect.top;
    }

    const containerVariants = isMobile ? mobileContainerVariants : desktopContainerVariants;
    const itemVariants = isMobile ? mobileItemVariants : desktopItemVariants;

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
            ref={heroRef}
            className="relative overflow-hidden min-h-screen flex flex-col justify-center text-center py-20 px-4 sm:px-6 lg:px-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 -z-20" aria-hidden="true">
                <GridPattern
                    width={72}
                    height={72}
                    x={-1}
                    y={-1}
                    className="stroke-gray-500/10 dark:stroke-gray-500/5 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"
                />
            </div>

            {/* Decorative background blobs */}
            <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
                <motion.div 
                    className="absolute top-[-10rem] left-[-15rem] w-[40rem] h-[40rem] bg-[#00b4f0]/20 rounded-full filter blur-3xl opacity-50"
                    animate={{
                        x: [0, 100, 0, -50, 0],
                        y: [0, -50, 0, 50, 0],
                        scale: [1, 1.1, 1, 1.1, 1],
                    }}
                    transition={{
                        duration: 40,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}
                />
                <motion.div 
                    className="absolute bottom-[-10rem] right-[-15rem] w-[40rem] h-[40rem] bg-[#8b5cf6]/20 rounded-full filter blur-3xl opacity-50"
                    animate={{
                        x: [0, -100, 0, 50, 0],
                        y: [0, 50, 0, -50, 0],
                        scale: [1, 1.1, 1, 1.1, 1],
                    }}
                    transition={{
                        duration: 50,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}
                />
            </div>

            {/* Spotlight glow effect - made more prominent and positioned correctly */}
            {!isMobile && (
                 <motion.div
                    className="pointer-events-none absolute -inset-px opacity-75 dark:opacity-100 transition-opacity duration-300"
                    style={{
                        background: `radial-gradient(600px circle at ${relX}px ${relY}px, rgba(0, 180, 240, 0.2), transparent 80%)`,
                    }}
                 />
            )}

            <motion.div variants={itemVariants} className="mb-8 relative z-10">
                 <a 
                    href="#contact"
                    className="inline-flex items-center gap-2 bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 text-sm font-semibold px-4 py-2 rounded-full shadow-lg shadow-emerald-400/20 group transition-all hover:bg-emerald-400/20 hover:border-emerald-400/50"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                    </span>
                    Exploring New Roles & Projects
                </a>
            </motion.div>

            <motion.div variants={itemVariants} className="relative z-10">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold font-display">
                     <span className="block text-3xl md:text-4xl font-medium text-[#4b5563] dark:text-[#a0a0a0] mb-2">Hey, I'm</span>
                     {/* Enhanced gradient for better visibility */}
                     <span className="bg-gradient-to-r from-[#00b4f0] to-[#9333ea] bg-clip-text text-transparent">
                        Amrut Puyed
                    </span>
                </h1>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mt-6 text-lg md:text-xl font-semibold text-[#20323c] dark:text-[#f5f5f5] min-h-[56px] md:min-h-[28px] flex items-center justify-center relative z-10">
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
            
            <motion.p variants={itemVariants} className="mt-6 max-w-2xl mx-auto text-[#4b5563] dark:text-[#a0a0a0] relative z-10">
                {RESUME_DATA.summary}
            </motion.p>
            
            <motion.div variants={itemVariants} className="mt-8 flex justify-center flex-wrap gap-3 relative z-10">
                {badges.map((badge, i) => (
                    <motion.div 
                        key={i} 
                        className="flex items-center gap-2 bg-white dark:bg-[#2c3038] border border-[#e5e7eb] dark:border-[#42464f] text-xs font-medium px-3 py-1.5 rounded-full shadow-sm text-[#20323c] dark:text-[#f5f5f5]"
                        whileHover={{ 
                            scale: 1.05, 
                            y: -2, 
                            borderColor: 'rgba(0, 180, 240, 0.7)' 
                        }}
                        transition={badgeTransition}
                    >
                        {BadgeIcons[badge.icon as keyof typeof BadgeIcons]}
                        <span>{badge.text}</span>
                    </motion.div>
                ))}
            </motion.div>
            
            <motion.div variants={itemVariants} className="mt-10 flex justify-center items-center space-x-6 relative z-10">
                <motion.a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" whileHover={iconHover} className="text-[#4b5563] dark:text-[#a0a0a0] hover:text-[#00b4f0]">
                    <GithubIcon className="w-6 h-6" />
                </motion.a>
                <motion.a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" whileHover={iconHover} className="text-[#4b5563] dark:text-[#a0a0a0] hover:text-[#00b4f0]">
                    <LinkedinIcon className="w-6 h-6" />
                </motion.a>
                <div className="relative">
                    <motion.button
                        onClick={handleCopyEmail}
                        aria-label="Copy Email"
                        whileHover={iconHover}
                        className="text-[#4b5563] dark:text-[#a0a0a0] hover:text-[#00b4f0] bg-transparent border-0 p-0 cursor-pointer"
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
                                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs font-semibold text-white bg-[#20323c] dark:bg-slate-700 rounded-md whitespace-nowrap pointer-events-none"
                            >
                                Copied!
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
            
            {/* Curved Divider */}
            <div 
                aria-hidden="true"
                className="absolute bottom-0 left-0 w-full h-16 bg-[#f6f9fa] dark:bg-[#20232a] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_100%,#000_70%,transparent_100%)] transition-colors duration-300"
            />
        </motion.section>
    );
};

export default React.memo(Hero);
