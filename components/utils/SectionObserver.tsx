import React, { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface SectionObserverProps {
    sectionId: string;
    onVisibilityChange: (sectionId: string) => void;
    children: React.ReactNode;
}

export const SectionObserver: React.FC<SectionObserverProps> = ({ sectionId, onVisibilityChange, children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5 }); // Trigger when 50% of the section is visible

    useEffect(() => {
        if (isInView) {
            onVisibilityChange(sectionId);
        }
    }, [isInView, sectionId, onVisibilityChange]);

    return <div ref={ref}>{children}</div>;
};
