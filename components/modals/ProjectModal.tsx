
import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import type { Project } from '../../types';
import { CloseIcon } from '../icons/CloseIcon';

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

const backdropVariants: Variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
};

const modalVariants: Variants = {
    hidden: { y: "100vh", opacity: 0, scale: 0.8 },
    visible: { 
        y: "0", 
        opacity: 1, 
        scale: 1,
        transition: { duration: 0.4, type: "spring", damping: 25, stiffness: 200 }
    },
    exit: { 
        y: "100vh", 
        opacity: 0,
        scale: 0.8,
        transition: { duration: 0.3 }
    },
};

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const gallery = project.gallery || [];

    const paginate = (newDirection: number) => {
        let newIndex = currentIndex + newDirection;
        if (newIndex < 0) {
            newIndex = gallery.length - 1;
        } else if (newIndex >= gallery.length) {
            newIndex = 0;
        }
        setDirection(newDirection);
        setCurrentIndex(newIndex);
    };
    
    const imageVariants: Variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    return (
        <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
        >
            <motion.div
                className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900/80 border border-slate-700 rounded-2xl shadow-2xl flex flex-col"
                variants={modalVariants}
                exit="exit"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
                <div className="flex items-center justify-between p-4 border-b border-slate-800 flex-shrink-0">
                    <h3 className="text-xl font-bold text-slate-100">{project.title} - Gallery</h3>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
                        aria-label="Close modal"
                    >
                        <CloseIcon className="w-6 h-6" />
                    </button>
                </div>
                
                <div className="relative flex-grow h-full flex items-center justify-center overflow-hidden p-4">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.img
                            key={currentIndex}
                            src={gallery[currentIndex]}
                            alt={`${project.title} screenshot ${currentIndex + 1}`}
                            custom={direction}
                            variants={imageVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            className="max-w-full max-h-[70vh] object-contain rounded-lg"
                        />
                    </AnimatePresence>

                    {gallery.length > 1 && (
                         <>
                            <button
                                className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition-colors z-20"
                                onClick={() => paginate(-1)}
                                aria-label="Previous image"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                            </button>
                            <button
                                className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition-colors z-20"
                                onClick={() => paginate(1)}
                                aria-label="Next image"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                            </button>
                        </>
                    )}
                </div>
                
                <div className="p-4 text-center text-sm text-slate-400 border-t border-slate-800 flex-shrink-0">
                    Image {currentIndex + 1} of {gallery.length}
                </div>
            </motion.div>
        </motion.div>
    );
};