import React from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { MailIcon } from './icons/MailIcon';

const Footer: React.FC = () => {
    return (
        <footer className="py-8 text-center border-t border-slate-800/50 mt-16">
            <div className="mb-6 flex justify-center space-x-6">
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
                <motion.a 
                    href={SOCIAL_LINKS.email} 
                    aria-label="Email" 
                    className="text-slate-400 hover:text-cyan-400"
                    whileHover={{ scale: 1.3, y: -2, transition: { type: 'spring', stiffness: 300 } }}
                >
                    <MailIcon className="w-6 h-6" />
                </motion.a>
            </div>
           
        </footer>
    );
};

export default Footer;