
import React from 'react';
import { motion } from 'framer-motion';
import { SkillIcon } from './SkillIcon';

interface SkillsCarouselProps {
    skills: string[];
    direction?: 'left' | 'right';
    showProgressBar?: boolean;
    duration?: number;
}

export const SkillsCarousel: React.FC<SkillsCarouselProps> = React.memo(({ skills, direction = 'left', showProgressBar = true, duration = 40 }) => {
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
                    duration: duration,
                    repeat: Infinity,
                }}
            >
                {duplicatedSkills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="flex items-center justify-center bg-white dark:bg-[#2c3038] text-[#4b5563] dark:text-[#a0a0a0] text-sm font-semibold px-5 py-3 rounded-full mx-2 flex-shrink-0 border border-[#e5e7eb] dark:border-[#42464f] group-hover:[animation-play-state:paused] cursor-pointer transition-colors duration-300"
                        style={{
                            boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                        }}
                        whileHover={{
                            scale: 1.05,
                            y: -4,
                            borderColor: "rgba(0, 180, 240, 0.5)",
                            transition: { type: "spring", stiffness: 300, damping: 15 }
                        }}
                    >
                        <SkillIcon skill={skill} width={20} height={20} className="mr-2" />
                        <span>{skill}</span>
                    </motion.div>
                ))}
            </motion.div>
            
            {showProgressBar && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#e5e7eb] dark:bg-[#42464f]">
                     <motion.div
                        className="h-full bg-[#00b4f0]"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{
                            ease: 'linear',
                            duration: duration,
                            repeat: Infinity,
                        }}
                    />
                </div>
            )}
        </div>
    );
});