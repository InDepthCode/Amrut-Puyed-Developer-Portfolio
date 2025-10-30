

import React from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';

const CTA: React.FC = () => {
    return (
        <section id="contact" className="py-20">
            <motion.div 
                className="relative bg-slate-50 dark:bg-slate-800 border border-[#e5e7eb] dark:border-[#42464f] rounded-2xl p-8 md:p-12 text-center overflow-hidden shadow-lg transition-colors duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, type: 'spring' }}
            >
                 <div className="absolute -inset-px rounded-2xl opacity-30 dark:opacity-50"
                     style={{ 
                        background: 'radial-gradient(600px at center, rgba(0, 180, 240, 0.2), transparent 80%)'
                     }}
                />
                <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#20323c] dark:text-[#f5f5f5] flex items-center justify-center gap-3 font-display">
                        Let's build cool stuff together!
                        <span>
                            🚀
                        </span>
                    </h2>
                    <p className="mt-4 max-w-xl mx-auto text-[#4b5563] dark:text-[#a0a0a0]">
                        I'm currently open to new opportunities and collaborations. Feel free to reach out if you have a project in mind or just want to connect.
                    </p>
                    <motion.a
                        href={SOCIAL_LINKS.email}
                        className="mt-8 inline-block text-white font-semibold px-8 py-3 rounded-lg bg-[#00b4f0] shadow-lg shadow-[#00b4f0]/30"
                        whileHover={{ 
                            scale: 1.05,
                            boxShadow: '0px 5px 20px rgba(0, 180, 240, 0.25)',
                            transition: { type: 'spring', stiffness: 300 }
                        }}
                    >
                        Get in Touch
                    </motion.a>
                </div>
            </motion.div>
        </section>
    );
};

export default React.memo(CTA);