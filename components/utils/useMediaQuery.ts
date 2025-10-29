import { useState, useEffect } from 'react';

export const useMediaQuery = (query: string): boolean => {
    const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

    useEffect(() => {
        const media = window.matchMedia(query);
        const listener = () => {
            setMatches(media.matches);
        };
        
        // Support for modern browsers
        if (media.addEventListener) {
            media.addEventListener('change', listener);
            return () => media.removeEventListener('change', listener);
        }
        
        // Fallback for older browsers
        media.addListener(listener);
        return () => media.removeListener(listener);
    }, [query]);

    return matches;
};
