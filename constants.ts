
import type { Project, ResumeData } from './types';

export const SOCIAL_LINKS = {
    github: 'https://github.com/InDepthCode',
    linkedin: 'https://linkedin.com/in/amrutpuyed',
    email: 'mailto:amrut.work@gmail.com'
};

export const PROJECTS: Project[] = [
    {
        emoji: '🤖',
        title: 'AI Shopping & Research Assistant',
        description: "Chat with AI to automate web browsing tasks, like 'Find MacBook under ₹1L on Amazon'—it searches, compares, and returns results with ratings.",
        valueProp: 'Automates repetitive research, data collection, and price comparisons online.',
        tech: ['Python', 'JavaScript', 'FastAPI', 'React', 'OpenAI GPT-4o', 'Playwright', 'WebSocket'],
        githubUrl: 'https://github.com/InDepthCode/browser-use-automation'
    },
    {
        emoji: '🎨',
        title: 'Unlimited Background Removal Tool',
        description: 'Remove photo backgrounds with high quality, handling complex edges like hair perfectly—superior to basic online tools.',
        valueProp: 'Ideal for product/profile images with unlimited free usage and no per-image costs.',
        tech: ['TypeScript', 'Next.js 14+', 'Node.js', 'Express.js', 'Remove.bg API', 'Local AI'],
        githubUrl: 'https://github.com/InDepthCode/bg-remover'
    },
    {
        emoji: '🌐',
        title: 'Complete Social Media Platform',
        description: 'A full-featured, Twitter-like platform supporting user accounts, posts, likes, comments, and a follower system.',
        valueProp: 'Demonstrates end-to-end full-stack development and social media architecture skills.',
        tech: ['JavaScript', 'Java', 'Spring Boot', 'React', 'REST APIs', 'Database (60+ commits)'],
        githubUrl: 'https://github.com/InDepthCode/twitter-clone'
    },
    {
        emoji: '🎬',
        title: 'Browser-Based Video Editor With AI',
        description: 'Edit videos in the browser with AI-powered suggestions. Processes clips locally using FFmpeg (WASM) and Gemini AI—no downloads required.',
        valueProp: 'A lightweight alternative to expensive desktop editors, perfect for quick edits.',
        tech: ['TypeScript', 'React', 'FFmpeg (WASM)', 'Gemini AI', 'Client-side'],
        githubUrl: 'https://github.com/InDepthCode/ai-vid-editor'
    },
    {
        emoji: '📺',
        title: 'Smart YouTube Video Manager',
        description: "An advanced 'Watch Later' system that saves videos and entire playlists, complete with a keyword search to find content easily.",
        valueProp: 'Helps organize video-based learning and research, minimizing endless scrolling.',
        tech: ['TypeScript', 'Chrome Extension (Manifest V3)', 'React', 'Vite'],
        githubUrl: 'https://github.com/InDepthCode/yt-queue'
    },
    {
        emoji: '📝',
        title: 'Personal Journaling & Analytics Platform',
        description: 'Digital journaling with calendar integration, payment processing, and analytics—helps users build consistent reflection habits.',
        valueProp: 'Full SaaS solution with subscriptions and analytics for the personal development market.',
        tech: ['JavaScript', 'React 19', 'Supabase', 'Vite', 'Tailwind CSS', 'React Router', 'Razorpay', 'Vercel Analytics', 'React Calendar'],
        githubUrl: 'https://github.com/InDepthCode/reflecto-dailyjournaling'
    }
];

export const RESUME_DATA: ResumeData = {
    summary: 'Results-driven Senior Software Engineer with a passion for building scalable, impact-driven applications using cloud-native architectures, AI, and automation. Proven ability to lead projects, mentor teams, and translate complex business requirements into high-quality technical solutions.',
    experience: [
        {
            role: 'Senior Software Engineer',
            company: 'Capgemini',
            duration: 'Jul 2021 - Present',
            points: [
                'Led development of a cloud-native microservices platform, improving system scalability by 40%.',
                'Engineered an AI-powered automation tool that reduced manual data processing time by 75%.',
                'Mentored junior developers, fostering a culture of code quality and continuous improvement.',
                'Collaborated with product managers to define and implement features for mission-critical applications.'
            ]
        },
        {
            role: 'Software Engineer',
            company: 'Capgemini',
            duration: 'Jul 2019 - Jun 2021',
            points: [
                'Developed and maintained full-stack features for client-facing web applications.',
                'Contributed to the migration of a monolithic application to a microservices architecture.',
                'Wrote comprehensive unit and integration tests, increasing code coverage to over 90%.'
            ]
        }
    ],
    education: {
        degree: 'Bachelor of Technology in Computer Science and Engineering',
        institution: 'Lovely Professional University',
        duration: '2015 - 2019',
        gpa: '8.01 GPA'
    },
    skills: {
        languages: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL'],
        technologies: ['React', 'Next.js', 'Node.js', 'FastAPI', 'Playwright', 'Firebase', 'WebAssembly'],
        devops: ['Docker', 'Kubernetes', 'GitHub Actions', 'AWS', 'GCP'],
        databases: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase Firestore']
    },
    certifications: [
        { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services' },
        { name: 'Java (Basic) Certificate', issuer: 'HackerRank' }
    ],
    activities: [
        'LinkedIn Content Creator: Sharing insights on tech, AI, and career growth.',
        'Technical Blogger: Authoring articles on advanced software development topics.',
        'Open Source Contributor: Actively contributing to various community projects.'
    ]
};