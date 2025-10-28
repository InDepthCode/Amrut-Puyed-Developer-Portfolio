import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { MailIcon } from './icons/MailIcon';

const Footer: React.FC = () => {
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
        <footer className="py-8 text-center border-t border-slate-800/50 mt-16">
            <div className="mb-6 flex justify-center items-center space-x-6">
                <motion.a 
                    href={SOCIAL_LINKS.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="GitHub Profile" 
                    className="text-slate-400 hover:text-cyan-400"
                    whileHover={{ scale: 1.3, y: -2, transition: { type: 'spring', stiffness: 300 } }}
                >
                    <GithubIcon className="w-6 h-6" />
                </motion.a>
                <motion.a 
                    href={SOCIAL_LINKS.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="LinkedIn Profile" 
                    className="text-slate-400 hover:text-cyan-400"
                    whileHover={{ scale: 1.3, y: -2, transition: { type: 'spring', stiffness: 300 } }}
                >
                    <LinkedinIcon className="w-6 h-6" />
                </motion.a>
                <div className="relative">
                    <motion.button
                        onClick={handleCopyEmail}
                        aria-label="Copy Email"
                        className="text-slate-400 hover:text-cyan-400 bg-transparent border-0 p-0 cursor-pointer"
                        whileHover={{ scale: 1.3, y: -2, transition: { type: 'spring', stiffness: 300 } }}
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
            </div>
           
        </footer>
    );
};

export default Footer;