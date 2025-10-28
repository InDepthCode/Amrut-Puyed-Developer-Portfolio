
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { PROJECTS, RESUME_DATA, SPECIALIZED_SKILLS } from '../constants';
import type { Project } from '../types';
import { GithubIcon } from './icons/GithubIcon';
import { SkillsCarousel } from './ui/SkillsCarousel';
import { SkillIcon } from './ui/SkillIcon';

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            delay: i * 0.1,
            type: 'spring',
            stiffness: 100,
            damping: 12,
        },
    }),
};

const ProjectCard: React.FC<{ project: Project; index: number; }> = ({ project, index }) => {
    return (
        <motion.div
            custom={index}
            variants={cardVariants}
            className="relative bg-slate-900 border border-slate-800 rounded-2xl flex flex-col group transition-all duration-300 overflow-hidden shadow-lg shadow-black/30"
            whileHover={{ 
                y: -8, 
                boxShadow: '0 10px 30px -10px rgba(0,0,0,0.4), 0 0 20px 5px rgba(34, 211, 238, 0.15)',
                transition: { type: 'spring', stiffness: 300 } 
            }}
        >
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-400/50 rounded-2xl transition-all duration-300 pointer-events-none" />
            
            <div className="bg-gradient-to-b from-slate-800 to-slate-900 p-6 border-b border-slate-800">
                <div className="text-5xl" aria-hidden="true">{project.emoji}</div>
            </div>

            <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">{project.title}</h3>
                
                <p className="mt-3 text-slate-400 text-sm leading-relaxed flex-grow">{project.description}</p>
                
                <div className="mt-4 text-sm text-cyan-300/90 bg-slate-800/60 p-3 rounded-lg border border-cyan-400/20 flex items-start gap-3">
                   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-cyan-400 flex-shrink-0 mt-0.5"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                   <p><span className="font-semibold text-cyan-400">Value:</span> {project.valueProp}</p>
                </div>

                <div className="mt-5 flex flex-wrap gap-x-2 gap-y-3">
                    {project.tech.map((tech, i) => (
                        <motion.div 
                            key={i} 
                            className="inline-flex items-center gap-2 bg-slate-800 text-slate-300 text-xs font-medium px-3 py-1.5 rounded-full border border-slate-700"
                            whileHover={{ scale: 1.1, y: -2, color: '#67e8f9', borderColor: 'rgba(103, 232, 249, 0.4)' }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <SkillIcon skill={tech} className="w-3.5 h-3.5" />
                            {tech}
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="p-6 mt-auto border-t border-slate-800 flex items-center gap-4">
                <motion.a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-200 px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 transition-all duration-300 group-hover:bg-cyan-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-cyan-500/30"
                    whileHover={{ scale: 1.05, transition: {type: 'spring', stiffness: 400, damping: 10} }}
                >
                    <GithubIcon className="w-4 h-4" />
                    View on GitHub
                    <span className="group-hover:translate-x-1 transition-transform duration-200 ease-in-out">&rarr;</span>
                </motion.a>
            </div>
        </motion.div>
    );
};

const Projects: React.FC = () => {
    const allSkills = [
        ...RESUME_DATA.skills.technologies,
        ...RESUME_DATA.skills.languages, 
        ...RESUME_DATA.skills.devops, 
        ...RESUME_DATA.skills.databases
    ];

    return (
        <>
            <motion.section 
                id="skills" 
                className="py-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5 }}
            >
                <h3 className="text-3xl font-bold text-center mb-10 text-slate-100">Core Technologies</h3>
                <div className="space-y-4">
                    <SkillsCarousel skills={allSkills} direction="right" showProgressBar={false} />
                    <SkillsCarousel skills={SPECIALIZED_SKILLS} direction="left" showProgressBar={false} />
                </div>
                {/* Single, shared progress bar */}
                <div className="relative mt-6 h-1 w-full max-w-4xl mx-auto bg-slate-800/50 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-cyan-500 to-violet-500"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{
                            ease: "linear",
                            duration: 40,
                            repeat: Infinity,
                        }}
                    />
                </div>
            </motion.section>

            <motion.section 
                id="projects" 
                className="py-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ staggerChildren: 0.2 }}
            >
                <motion.h2 
                    className="text-3xl font-bold text-center mb-12 text-slate-100"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Featured Projects
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {PROJECTS.map((project, index) => (
                        <ProjectCard 
                            key={project.title} 
                            project={project} 
                            index={index} 
                        />
                    ))}
                </div>
            </motion.section>
        </>
    );
};

export default Projects;
