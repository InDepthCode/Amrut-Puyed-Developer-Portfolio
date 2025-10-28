
import React from 'react';
// FIX: Import Variants and TargetAndTransition types from framer-motion to fix type errors.
import { motion, Variants, TargetAndTransition } from 'framer-motion';
import { PROJECTS, RESUME_DATA } from '../constants';
import type { Project } from '../types';
import { GithubIcon } from './icons/GithubIcon';
import { SkillsCarousel } from './ui/SkillsCarousel';
import { SkillIcon } from './ui/SkillIcon';

// FIX: Add Variants type to cardVariants. This fixes the error where 'spring' was inferred as 'string' instead of a specific animation type.
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

// FIX: Define hover animation objects with explicit types to prevent type inference issues.
const projectCardHover: TargetAndTransition = {
    scale: 1.03, y: -5, transition: { type: 'spring', stiffness: 300 }
};

const githubLinkHover: TargetAndTransition = {
    scale: 1.05, transition: {type: 'spring', stiffness: 400, damping: 10}
};

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
    return (
        <motion.div 
            custom={index}
            variants={cardVariants}
            className="relative bg-slate-900/70 backdrop-blur-sm border border-slate-800 rounded-xl p-6 flex flex-col group transition-all duration-300 overflow-hidden"
            whileHover={projectCardHover}
        >
            <div className="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                 style={{ 
                    background: 'radial-gradient(400px at top left, rgba(34, 211, 238, 0.2), transparent 80%)'
                 }}
            />
            <div className="relative z-10 flex-grow flex flex-col">
                <div className="text-4xl mb-4" aria-hidden="true">{project.emoji}</div>
                
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">{project.title}</h3>
                
                <p className="mt-3 text-slate-400 text-sm leading-relaxed flex-grow">{project.description}</p>
                
                <div className="mt-3 text-sm text-slate-300/90 bg-slate-800/50 p-3 rounded-md border border-slate-700/50">
                   <span className="font-semibold text-cyan-400">Value:</span> {project.valueProp}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                        <span 
                            key={i} 
                            className="inline-flex items-center gap-2 bg-cyan-900/60 text-cyan-300 text-xs font-medium px-3 py-1 rounded-full border border-cyan-400/30"
                        >
                            <SkillIcon skill={tech} className="w-3.5 h-3.5" />
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
            <div className="relative z-10 mt-6 pt-4 border-t border-slate-800">
                <motion.a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-200 px-4 py-2 rounded-md bg-slate-800/80 hover:text-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-violet-500"
                    whileHover={githubLinkHover}
                >
                    <GithubIcon className="w-4 h-4" />
                    View on GitHub
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
        <motion.section 
            id="projects" 
            className="py-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ staggerChildren: 0.2 }}
        >
            <motion.div 
                className="my-16"
                initial={{ opacity: 0, y: 20 }}
                // FIX: Corrected typo 'whileInVew' to 'whileInView'.
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <h3 className="text-2xl font-bold text-center mb-4 text-slate-200">Core Technologies</h3>
                <SkillsCarousel skills={allSkills} />
            </motion.div>

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
                    <ProjectCard key={project.title} project={project} index={index} />
                ))}
            </div>
        </motion.section>
    );
};

export default Projects;
