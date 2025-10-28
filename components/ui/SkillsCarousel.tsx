import React from 'react';
import { motion } from 'framer-motion';

interface SkillsCarouselProps {
    skills: string[];
    baseVelocity?: number;
}

export const SkillsCarousel: React.FC<SkillsCarouselProps> = ({ skills, baseVelocity = 1 }) => {
    const duplicatedSkills = [...skills, ...skills];

    return (
        <div className="overflow-hidden whitespace-nowrap group">
            <motion.div
                className="flex"
                animate={{
                    x: ['-100%', '0%'],
                }}
                transition={{
                    ease: 'linear',
                    duration: 30,
                    repeat: Infinity,
                }}
            >
                {duplicatedSkills.map((skill, index) => (
                    <span 
                        key={index}
                        className="bg-slate-800/80 border border-slate-700 text-slate-300 text-sm font-medium px-4 py-2 rounded-full mr-4 flex-shrink-0"
                    >
                        {skill}
                    </span>
                ))}
            </motion.div>
        </div>
    );
};
