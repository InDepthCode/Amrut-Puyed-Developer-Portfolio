
import React from 'react';

// A comprehensive map of skills to their official logo URLs
const iconMap: { [key: string]: string } = {
    react: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    react19: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    reactcalendar: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    nextjs: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    nextjs14: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    nodejs: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    fastapi: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
    playwright: 'https://playwright.dev/img/playwright-logo.svg',
    firebase: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    firebasefirestore: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    webassembly: 'https://webassembly.org/css/webassembly.svg',
    javascript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    typescript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    sql: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    kubernetes: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
    githubactions: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg',
    aws: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    gcp: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
    postgresql: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    mongodb: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    redis: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    openaigpt4o: 'https://cdn.worldvectorlogo.com/logos/openai-2.svg',
    websocket: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg',
    chromeextensionmanifestv3: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg',
    expressjs: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    removebgapi: 'https://www.remove.bg/images/remove-bg-logo.svg',
    supabase: 'https://cdn.worldvectorlogo.com/logos/supabase-logo-icon.svg',
    vite: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
    tailwindcss: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
    reactrouter: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactrouter/reactrouter-original.svg',
    razorpay: 'https://razorpay.com/assets/razorpay-glyph.svg',
    vercelanalytics: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
    geminiai: 'https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg',
    springboot: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
    ffmpegwasm: 'https://www.ffmpeg.org/ffmpeg-logo.svg',
    camundabpm: 'https://camunda.com/favicon.svg',
    angularjs: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
    axios: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg',
    jwt: 'https://cdn.worldvectorlogo.com/logos/jwt-3.svg',
    cicdpipelines: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg',
    restapis: 'https://user-images.githubusercontent.com/3483131/229237223-72a39276-81f5-4309-a033-a3b3793f73a3.svg',
};

// A component to render an icon based on skill name, now using external SVGs
export const SkillIcon: React.FC<{ skill: string, className?: string }> = ({ skill, className }) => {
    // Normalize skill name to match keys in iconMap
    const normalizedSkill = skill.toLowerCase().replace(/[\s\.\+\(\)]/g, '').replace(/\-+/g, '');

    const iconUrl = iconMap[normalizedSkill];

    if (iconUrl) {
        // Some logos are dark and need to be inverted for dark mode for better visibility
        const needsInvert = ['nextjs', 'expressjs', 'githubactions', 'vercelanalytics', 'restapis', 'websocket'].includes(normalizedSkill);
        const imgClassName = `${className} ${needsInvert ? 'dark:invert' : ''}`;
        return <img src={iconUrl} alt={`${skill} logo`} className={imgClassName} style={{ objectFit: 'contain' }} />;
    }

    // Fallback to a generic icon if a specific logo is not found
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
    );
};
