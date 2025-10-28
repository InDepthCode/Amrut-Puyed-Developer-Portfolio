import React from 'react';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '../constants';

const GlassCard: React.FC<{ children: React.ReactNode, delay?: number }> = ({ children, delay = 0 }) => (
    <motion.div
        className="bg-slate-900/70 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 shadow-lg shadow-black/20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: delay, type: 'spring', stiffness: 100 }}
    >
        {children}
    </motion.div>
);

const SectionHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h3 className="text-2xl font-bold text-slate-100 mb-6">{children}</h3>
);

const TimelineItem: React.FC<{ children: React.ReactNode, isLast?: boolean }> = ({ children, isLast }) => (
    <div className={`relative pl-10 ${isLast ? '' : 'pb-12'}`}>
        <div className="absolute left-0 top-1 h-full w-px bg-slate-700" />
        <div className="absolute left-[-5px] top-1 h-3 w-3 rounded-full bg-cyan-400 ring-4 ring-slate-900" />
        {children}
    </div>
);

const Resume: React.FC = () => {
    return (
        <section id="resume" className="py-28">
            <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
                    Professional Snapshot
                </h2>
                <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-400 leading-relaxed">
                    {RESUME_DATA.summary}
                </p>
            </motion.div>
            
            <div className="mt-24 grid grid-cols-1 lg:grid-cols-3 gap-12 xl:gap-16">
                {/* Left Column: Work Experience */}
                <motion.div 
                    className="lg:col-span-2"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.2, type: 'spring', stiffness: 80 }}
                >
                    <SectionHeading>Work Experience</SectionHeading>
                    <div className="space-y-4">
                        {RESUME_DATA.experience.map((job, index) => (
                            <TimelineItem key={index} isLast={index === RESUME_DATA.experience.length - 1}>
                                <div className="bg-slate-900/50 border border-slate-800/50 rounded-lg p-6 transition-all hover:border-slate-700">
                                    <h4 className="text-xl font-semibold text-cyan-400">{job.role}</h4>
                                    <p className="mt-1 text-slate-300 font-medium">{job.company} <span className="text-slate-500 font-normal text-sm ml-2">| {job.duration}</span></p>
                                    <ul className="mt-4 list-disc list-inside text-slate-400 space-y-2 text-sm">
                                        {job.points.map((point, i) => <li key={i}>{point}</li>)}
                                    </ul>
                                </div>
                            </TimelineItem>
                        ))}
                    </div>
                </motion.div>
                
                {/* Right Column: Education, Certs */}
                <div className="lg:col-span-1 space-y-12">
                    <GlassCard delay={0.4}>
                        <SectionHeading>Education</SectionHeading>
                        <div>
                            <h4 className="text-lg font-semibold text-slate-200">{RESUME_DATA.education.degree}</h4>
                            <p className="mt-1 text-slate-400">{RESUME_DATA.education.institution}</p>
                            <p className="text-slate-500 text-sm mt-1">{RESUME_DATA.education.duration} | {RESUME_DATA.education.gpa}</p>
                        </div>
                    </GlassCard>

                    <GlassCard delay={0.5}>
                        <SectionHeading>Certifications</SectionHeading>
                         <div className="space-y-4">
                            {RESUME_DATA.certifications.map((cert, index) => (
                                 <div key={index}>
                                     <p className="font-semibold text-slate-300">{cert.name}</p>
                                     <p className="text-slate-500 text-sm">{cert.issuer}</p>
                                 </div>
                            ))}
                        </div>
                    </GlassCard>
                </div>
            </div>
        </section>
    );
};

export default Resume;