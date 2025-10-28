import React, { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface SectionObserverProps {
    sectionId: string;
    onVisibilityChange: (sectionId: string) => void;
    children: React.ReactNode;
}

export const SectionObserver: React.FC<SectionObserverProps> = ({ sectionId, onVisibilityChange, children }) => {
    const ref = useRef(null);
    // FIX: Corrected property 'rootMargin' to 'margin' as per the framer-motion useInView API.
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" }); 

    useEffect(() => {
        if (isInView) {
            onVisibilityChange(sectionId);
        }
    }, [isInView, sectionId, onVisibilityChange]);

    return <div ref={ref}>{children}</div>;
};
