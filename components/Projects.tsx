import React from 'react';
import { motion, Variants } from 'framer-motion';
import { PROJECTS, RESUME_DATA, SPECIALIZED_SKILLS } from '../constants';
import type { Project } from '../types';
import { GithubIcon } from './icons/GithubIcon';
import { SkillIcon } from './ui/SkillIcon';
import { SkillsCarousel } from './ui/SkillsCarousel';

const cardVariants: Variants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
        opacity: 1,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
            ease: 'easeOut',
        },
    }),
};

const ProjectCard: React.FC<{ project: Project; index: number; }> = React.memo(({ project, index }) => {
    const skillsWithoutIcons = ['Remove.bg API', 'Database (60+ commits)'];

    return (
        <motion.div
            custom={index}
            variants={cardVariants}
            className="relative bg-slate-50 dark:bg-slate-800 border border-[#e5e7eb] dark:border-[#42464f] rounded-2xl flex flex-col group transition-colors duration-300 overflow-hidden shadow-md dark:shadow-xl dark:shadow-black/20"
            whileHover={{ 
                y: -5,
                boxShadow: '0 8px 15px -3px rgb(0 0 0 / 0.07), 0 4px 6px -4px rgb(0 0 0 / 0.07)',
                transition: { type: 'spring', stiffness: 300 } 
            }}
        >
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#00b4f0]/50 rounded-2xl transition-all duration-300 pointer-events-none" />
            
            <div className="bg-slate-100 dark:bg-slate-900 p-6 border-b border-[#e5e7eb] dark:border-[#42464f]">
                <div className="text-5xl" aria-hidden="true">{project.emoji}</div>
            </div>

            <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-[#20323c] dark:text-[#f5f5f5] group-hover:text-[#00b4f0] transition-colors font-display">{project.title}</h3>
                
                <p className="mt-3 text-[#4b5563] dark:text-[#a0a0a0] text-sm leading-relaxed flex-grow">{project.description}</p>
                
                <div className="mt-4 text-sm text-[#20323c] dark:text-[#f5f5f5] bg-slate-100 dark:bg-slate-900 p-3 rounded-lg border border-[#00b4f0]/20 flex items-start gap-3">
                   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[#00b4f0] flex-shrink-0 mt-0.5"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                   <p><span className="font-semibold text-[#00b4f0]">Value:</span> {project.valueProp}</p>
                </div>

                <div className="mt-5 flex flex-wrap gap-x-2 gap-y-3">
                    {project.tech.map((tech, i) => (
                        <motion.div 
                            key={i} 
                            className="inline-flex items-center gap-2 bg-slate-100 dark:bg-slate-900 text-[#4b5563] dark:text-[#a0a0a0] text-xs font-medium px-3 py-1.5 rounded-full border border-transparent"
                            whileHover={{ scale: 1.1, y: -2, color: '#00b4f0', borderColor: 'rgba(0, 180, 240, 0.4)' }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            {!skillsWithoutIcons.includes(tech) && <SkillIcon skill={tech} width={14} height={14} />}
                            {tech}
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="p-6 mt-auto border-t border-[#e5e7eb] dark:border-[#42464f] flex items-center gap-4">
                <motion.a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#20323c] dark:text-[#f5f5f5] px-5 py-2.5 rounded-lg bg-[#e5e7eb] dark:bg-[#42464f] hover:bg-[#d1d5db] dark:hover:bg-[#4f545c] transition-all duration-300 group-hover:bg-[#00b4f0] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#00b4f0]/30"
                    whileHover={{ scale: 1.05, transition: {type: 'spring', stiffness: 400, damping: 10} }}
                >
                    <GithubIcon className="w-4 h-4" />
                    View on GitHub
                    <span className="group-hover:translate-x-1 transition-transform duration-200 ease-in-out">&rarr;</span>
                </motion.a>
            </div>
        </motion.div>
    );
});

const Projects: React.FC = () => {
    const allSkills = [
        ...RESUME_DATA.skills.technologies,
        ...RESUME_DATA.skills.languages, 
        ...RESUME_DATA.skills.devops, 
        ...RESUME_DATA.skills.databases,
        ...SPECIALIZED_SKILLS
    ];
    // Remove duplicates
    const uniqueSkills = [...new Set(allSkills)];

    const midPoint = Math.ceil(uniqueSkills.length / 2);
    const skills1 = uniqueSkills.slice(0, midPoint);
    const skills2 = uniqueSkills.slice(midPoint);

    return (
        <section 
            id="projects" 
            className="py-16"
        >
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5 }}
            >
                <h3 className="text-3xl font-bold text-center mb-10 text-[#20323c] dark:text-[#f5f5f5] font-display">Technologies</h3>
                <div className="space-y-4">
                    <SkillsCarousel skills={skills1} direction="left" />
                    <SkillsCarousel skills={skills2} direction="right" />
                </div>
            </motion.div>

            <motion.div 
                className="pt-24"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ staggerChildren: 0.2 }}
            >
                <motion.h2 
                    className="text-3xl font-bold text-center mb-12 text-[#20323c] dark:text-[#f5f5f5] font-display"
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
            </motion.div>
        </section>
    );
};

export default React.memo(Projects);