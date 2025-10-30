

import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { RESUME_DATA } from '../constants';

const BriefcaseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#00b4f0]"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
);

const GraduationCapIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#00b4f0]"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"></path></svg>
);

const CertificateIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#00b4f0]"><path d="M12 21l-8-4.5v-9l8 4.5 8-4.5v9L12 21z"></path><path d="M12 12l8-4.5"></path><path d="M12 12L4 7.5"></path><path d="M12 12v9"></path><path d="M20 7.5l-8 4.5"></path></svg>
);

const ActivityIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#00b4f0]"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
);

const CodeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#00b4f0]"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
);

const GitBranchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#00b4f0]">
        <line x1="6" y1="3" x2="6" y2="15"></line>
        <circle cx="18" cy="6" r="3"></circle>
        <circle cx="6" cy="18" r="3"></circle>
        <path d="M18 9a9 9 0 0 1-9 9"></path>
    </svg>
);

const AnimatedCounter = ({ to }: { to: number }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);

    useEffect(() => {
        const animation = animate(count, to, { duration: 2, ease: "easeOut" });
        return animation.stop;
    }, [to, count]);

    return <motion.span>{rounded}</motion.span>;
};

const GlassCard: React.FC<{ children: React.ReactNode, delay?: number }> = React.memo(({ children, delay = 0 }) => (
    <motion.div
        className="bg-slate-50 dark:bg-slate-800 border border-[#e5e7eb] dark:border-[#42464f] rounded-2xl p-6 shadow-md transition-colors duration-300"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: delay, type: 'spring', stiffness: 100 }}
    >
        {children}
    </motion.div>
));

const SectionHeading: React.FC<{ children: React.ReactNode; icon: React.ReactNode }> = React.memo(({ children, icon }) => (
    <h3 className="flex items-center gap-3 text-2xl font-bold text-[#20323c] dark:text-[#f5f5f5] mb-6 font-display">
        {icon}
        <span>{children}</span>
    </h3>
));

const TimelineItem: React.FC<{ children: React.ReactNode, isLast?: boolean }> = React.memo(({ children, isLast }) => (
    <div className={`relative pl-10 ${isLast ? '' : 'pb-12'}`}>
        <div className="absolute left-0 top-1 h-full w-px bg-[#e5e7eb] dark:bg-[#42464f]" />
        <div className="absolute left-[-5px] top-1 h-3 w-3 rounded-full bg-[#00b4f0] ring-4 ring-slate-50 dark:ring-slate-800" />
        {children}
    </div>
));

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
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#20323c] dark:text-[#f5f5f5] font-display">
                        Professional Snapshot
                    </h2>
                    <motion.a 
                        href="/amrut-puyed-resume.pdf" // Placeholder link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#00b4f0] px-4 py-2 rounded-lg border border-[#00b4f0]/40 bg-[#00b4f0]/10 hover:bg-[#00b4f0]/20 hover:border-[#00b4f0]/70 transition-all"
                        whileHover={{ scale: 1.05, y: -2, transition: { type: 'spring', stiffness: 300 } }}
                    >
                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                        Download Resume
                    </motion.a>
                </div>
            </motion.div>
            
            <div className="mt-24 grid grid-cols-1 lg:grid-cols-3 gap-12 xl:gap-16">
                {/* Left Column: Work Experience */}
                <div className="lg:col-span-2">
                    <SectionHeading icon={<BriefcaseIcon />}>Work Experience</SectionHeading>
                    <div className="space-y-4">
                        {RESUME_DATA.experience.map((job, index) => (
                            <TimelineItem key={index} isLast={index === RESUME_DATA.experience.length - 1}>
                                <div className="bg-slate-100 dark:bg-slate-900 border border-[#e5e7eb] dark:border-[#42464f] rounded-lg p-6 transition-all hover:border-[#d1d5db] dark:hover:border-[#4f545c]">
                                    <h4 className="text-xl font-semibold text-[#00b4f0] font-display">{job.role}</h4>
                                    <p className="mt-1 text-[#20323c] dark:text-[#f5f5f5] font-medium">{job.company} <span className="text-[#4b5563] dark:text-[#a0a0a0] font-normal text-sm ml-2">| {job.duration}</span></p>
                                    <ul className="mt-4 list-disc list-inside text-[#4b5563] dark:text-[#a0a0a0] space-y-2 text-sm">
                                        {job.points.map((point, i) => <li key={i}>{point}</li>)}
                                    </ul>
                                </div>
                            </TimelineItem>
                        ))}
                    </div>
                </div>
                
                {/* Right Column: Education, Certs */}
                <div className="lg:col-span-1 space-y-12">
                    <GlassCard delay={0.4}>
                        <SectionHeading icon={<GraduationCapIcon />}>Education</SectionHeading>
                        <div>
                            <h4 className="text-lg font-semibold text-[#20323c] dark:text-[#f5f5f5] font-display">{RESUME_DATA.education.degree}</h4>
                            <p className="mt-1 text-[#4b5563] dark:text-[#a0a0a0]">{RESUME_DATA.education.institution}</p>
                            <p className="text-[#4b5563] dark:text-[#a0a0a0] text-sm mt-1">{RESUME_DATA.education.duration} | {RESUME_DATA.education.gpa}</p>
                        </div>
                    </GlassCard>

                    <GlassCard delay={0.5}>
                        <SectionHeading icon={<CertificateIcon />}>Certifications</SectionHeading>
                         <div className="space-y-4">
                            {RESUME_DATA.certifications.map((cert, index) => (
                                 <div key={index}>
                                     <p className="font-semibold text-[#20323c] dark:text-[#f5f5f5]">{cert.name}</p>
                                     <p className="text-[#4b5563] dark:text-[#a0a0a0] text-sm">{cert.issuer}</p>
                                 </div>
                            ))}
                        </div>
                    </GlassCard>

                    <GlassCard delay={0.6}>
                        <SectionHeading icon={<ActivityIcon />}>Coding Activity</SectionHeading>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded-full">
                                    <CodeIcon />
                                </div>
                                <div>
                                    <p className="font-bold text-[#20323c] dark:text-[#f5f5f5] text-3xl font-display">
                                        <AnimatedCounter to={250} />+
                                    </p>
                                    <p className="text-[#4b5563] dark:text-[#a0a0a0] text-sm">DSA Problems Solved</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded-full">
                                    <GitBranchIcon />
                                </div>
                                <div>
                                    <p className="font-bold text-[#20323c] dark:text-[#f5f5f5] text-3xl font-display">
                                        <AnimatedCounter to={500} />+
                                    </p>
                                    <p className="text-[#4b5563] dark:text-[#a0a0a0] text-sm">Git Commits (Last Year)</p>
                                </div>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </section>
    );
};

export default React.memo(Resume);