import React from 'react';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '../constants';
import { SkillsCarousel } from './ui/SkillsCarousel';

const ResumeSection: React.FC<{ title: string; children: React.ReactNode; icon?: React.ReactNode }> = ({ title, children, icon }) => (
     <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
    >
        <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-3">
            {icon}
            {title}
        </h3>
        <div className="space-y-6">
            {children}
        </div>
    </motion.div>
);

const TimelineItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="relative pl-8 before:absolute before:left-3 before:top-2 before:h-full before:w-px before:bg-slate-700 after:absolute after:left-[7px] after:top-2 after:h-2.5 after:w-2.5 after:rounded-full after:bg-cyan-400 after:border-2 after:border-slate-900 shadow-lg shadow-cyan-500/30">
        {children}
    </div>
);


const Resume: React.FC = () => {
    const allSkills = [
        ...RESUME_DATA.skills.languages, 
        ...RESUME_DATA.skills.technologies, 
        ...RESUME_DATA.skills.devops, 
        ...RESUME_DATA.skills.databases
    ];

    return (
        <section id="resume" className="py-16">
            <motion.h2 
                className="text-3xl font-bold text-center mb-12 text-slate-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Professional Snapshot
            </motion.h2>
            
            <motion.div 
                className="bg-slate-900/70 backdrop-blur-sm border border-slate-800 rounded-xl p-6 md:p-10"
                initial={{ opacity: 0, y: 50, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                <div className="text-center mb-12">
                    <h3 className="text-2xl font-bold text-slate-100 mb-4">Summary</h3>
                    <p className="text-slate-400 max-w-3xl mx-auto">{RESUME_DATA.summary}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    <div className="lg:col-span-3">
                        <ResumeSection 
                            title="Work Experience" 
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                        >
                            {RESUME_DATA.experience.map((job, index) => (
                                <TimelineItem key={index}>
                                    <h4 className="text-lg font-semibold text-cyan-400">{job.role}</h4>
                                    <p className="text-slate-400 text-sm font-medium">{job.company} | {job.duration}</p>
                                    <ul className="mt-2 list-disc list-inside text-slate-400 space-y-1 text-sm">
                                        {job.points.map((point, i) => <li key={i}>{point}</li>)}
                                    </ul>
                                </TimelineItem>
                            ))}
                        </ResumeSection>
                    </div>
                    
                    <div className="lg:col-span-2 space-y-10">
                        <ResumeSection 
                            title="Skills"
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>}
                        >
                           <SkillsCarousel skills={allSkills} />
                        </ResumeSection>

                        <ResumeSection 
                            title="Education" 
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" /></svg>}
                        >
                            <div>
                                <h4 className="text-md font-semibold text-slate-200">{RESUME_DATA.education.degree}</h4>
                                <p className="text-slate-400 text-sm">{RESUME_DATA.education.institution}</p>
                                <p className="text-slate-500 text-xs mt-1">{RESUME_DATA.education.duration} | {RESUME_DATA.education.gpa}</p>
                            </div>
                        </ResumeSection>

                        <ResumeSection 
                            title="Certifications" 
                             icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>}
                        >
                             <div className="space-y-4">
                                {RESUME_DATA.certifications.map((cert, index) => (
                                     <div key={index}>
                                         <p className="font-semibold text-slate-300 text-sm">{cert.name}</p>
                                         <p className="text-slate-500 text-xs">{cert.issuer}</p>
                                     </div>
                                ))}
                            </div>
                        </ResumeSection>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Resume;