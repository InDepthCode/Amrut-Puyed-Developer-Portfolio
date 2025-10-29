import React, { useState, useEffect } from 'react';

interface DeferredRenderProps {
    children: React.ReactNode;
    delay?: number;
}

export const DeferredRender: React.FC<DeferredRenderProps> = ({ children, delay = 500 }) => {
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShouldRender(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    return shouldRender ? <>{children}</> : null;
};