import React from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';

const CTA: React.FC = () => {
    return (
        <section id="contact" className="py-20">
            <motion.div 
                className="relative bg-slate-900/70 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 md:p-12 text-center overflow-hidden cta-mobile"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, type: 'spring' }}
            >
                 <div className="absolute -inset-px rounded-2xl opacity-30"
                     style={{ 
                        background: 'radial-gradient(600px at center, rgba(34, 211, 238, 0.2), transparent 80%)'
                     }}
                />
                <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-100 flex items-center justify-center gap-3 font-display">
                        Let's build cool stuff together!
                        <motion.span
                            animate={{ rotate: [-15, 15, -15] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            🚀
                        </motion.span>
                    </h2>
                    <p className="mt-4 max-w-xl mx-auto text-slate-400">
                        I'm currently open to new opportunities and collaborations. Feel free to reach out if you have a project in mind or just want to connect.
                    </p>
                    <motion.a
                        href={SOCIAL_LINKS.email}
                        className="mt-8 inline-block text-white font-semibold px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 shadow-lg shadow-cyan-500/20"
                        whileHover={{ 
                            scale: 1.05,
                            boxShadow: '0px 10px 30px rgba(34, 211, 238, 0.4)',
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