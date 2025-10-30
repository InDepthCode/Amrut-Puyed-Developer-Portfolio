import React from 'react';
import { motion } from 'framer-motion';
import { SkillIcon } from './SkillIcon';

const SkillBadge: React.FC<{ skill: string }> = ({ skill }) => (
    <motion.div
        className="flex items-center justify-center bg-slate-50 dark:bg-slate-800 text-[#4b5563] dark:text-[#a0a0a0] text-sm font-semibold px-4 py-2 rounded-full border border-[#e5e7eb] dark:border-[#42464f] transition-colors duration-300 flex-shrink-0"
        style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}
        whileHover={{
            scale: 1.05,
            y: -3,
            borderColor: "rgba(0, 180, 240, 0.5)",
            transition: { type: "spring", stiffness: 300, damping: 15 }
        }}
    >
        <SkillIcon skill={skill} width={20} height={20} className="mr-2" />
        <span>{skill}</span>
    </motion.div>
);


interface SkillsCarouselProps {
    skills: string[];
    direction?: 'left' | 'right';
    speed?: 'normal' | 'fast' | 'slow';
}

export const SkillsCarousel: React.FC<SkillsCarouselProps> = ({ skills, direction = 'left', speed = 'normal' }) => {
    const durationMap = {
        normal: '40s',
        fast: '20s',
        slow: '80s'
    };

    return (
        <div 
            className="w-full overflow-hidden group"
            style={{
                maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
            }}
        >
            <div 
                className="flex gap-4 group-hover:[animation-play-state:paused]"
                style={{
                    animation: `scroll-${direction} ${durationMap[speed]} linear infinite`,
                }}
            >
                {[...skills, ...skills].map((skill, index) => (
                    <SkillBadge key={`${skill}-${index}`} skill={skill} />
                ))}
            </div>
        </div>
    );
};