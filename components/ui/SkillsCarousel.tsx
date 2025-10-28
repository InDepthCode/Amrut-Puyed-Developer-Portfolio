
import React from 'react';
import { motion } from 'framer-motion';
import { SkillIcon } from './SkillIcon';

interface SkillsCarouselProps {
    skills: string[];
    direction?: 'left' | 'right';
    showProgressBar?: boolean;
}

export const SkillsCarousel: React.FC<SkillsCarouselProps> = ({ skills, direction = 'left', showProgressBar = true }) => {
    const duplicatedSkills = [...skills, ...skills];

    const animation = direction === 'left' 
        ? { x: ['0%', '-100%'] } 
        : { x: ['-100%', '0%'] };

    return (
        <div 
            className="w-full overflow-hidden relative group"
            style={{
                maskImage: 'linear-gradient(to right, transparent 0, black 10%, black 90%, transparent 100%)',
            }}
        >
            <motion.div
                className="flex items-center py-4"
                animate={animation}
                transition={{
                    ease: 'linear',
                    duration: 40,
                    repeat: Infinity,
                }}
            >
                {duplicatedSkills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="flex items-center justify-center bg-slate-900/70 backdrop-blur-sm text-slate-300 text-sm font-semibold px-5 py-3 rounded-full mx-2 flex-shrink-0 border border-slate-700/80 group-hover:[animation-play-state:paused] cursor-pointer"
                        style={{
                            boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
                        }}
                        whileHover={{
                            scale: 1.05,
                            y: -4,
                            backgroundColor: "rgba(15, 23, 42, 0.95)",
                            borderColor: "rgba(103, 232, 249, 0.5)",
                            color: "#e5e7eb",
                            boxShadow: '0px 8px 20px rgba(34, 211, 238, 0.25)',
                            transition: { type: "spring", stiffness: 300, damping: 15 }
                        }}
                    >
                        <SkillIcon skill={skill} className="w-5 h-5 mr-2" />
                        <span>{skill}</span>
                    </motion.div>
                ))}
            </motion.div>
            
            {showProgressBar && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-800/50">
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
            )}
        </div>
    );
};
