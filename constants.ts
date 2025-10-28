
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
        githubUrl: 'https://github.com/InDepthCode/browser-use-automation',
    },
    {
        emoji: '🎨',
        title: 'Unlimited Background Removal Tool',
        description: 'Remove photo backgrounds with high quality, handling complex edges like hair perfectly—superior to basic online tools.',
        valueProp: 'Ideal for product/profile images with unlimited free usage and no per-image costs.',
        tech: ['TypeScript', 'Next.js 14+', 'Node.js', 'Express.js', 'Remove.bg API', 'Local AI'],
        githubUrl: 'https://github.com/InDepthCode/bg-remover',
    },
    {
        emoji: '🌐',
        title: 'Complete Social Media Platform',
        description: 'A full-featured, Twitter-like platform supporting user accounts, posts, likes, comments, and a follower system.',
        valueProp: 'Demonstrates end-to-end full-stack development and social media architecture skills.',
        tech: ['JavaScript', 'Java', 'Spring Boot', 'React', 'REST APIs', 'Database (60+ commits)'],
        githubUrl: 'https://github.com/InDepthCode/twitter-clone',
    },
    {
        emoji: '🎬',
        title: 'Browser-Based Video Editor With AI',
        description: 'Edit videos in the browser with AI-powered suggestions. Processes clips locally using FFmpeg (WASM) and Gemini AI—no downloads required.',
        valueProp: 'A lightweight alternative to expensive desktop editors, perfect for quick edits.',
        tech: ['TypeScript', 'React', 'FFmpeg (WASM)', 'Gemini AI', 'Client-side'],
        githubUrl: 'https://github.com/InDepthCode/ai-vid-editor',
    },
    {
        emoji: '📺',
        title: 'Smart YouTube Video Manager',
        description: "An advanced 'Watch Later' system that saves videos and entire playlists, complete with a keyword search to find content easily.",
        valueProp: 'Helps organize video-based learning and research, minimizing endless scrolling.',
        tech: ['TypeScript', 'Chrome Extension (Manifest V3)', 'React', 'Vite'],
        githubUrl: 'https://github.com/InDepthCode/yt-queue',
    },
    {
        emoji: '📝',
        title: 'Personal Journaling & Analytics Platform',
        description: 'Digital journaling with calendar integration, payment processing, and analytics—helps users build consistent reflection habits.',
        valueProp: 'Full SaaS solution with subscriptions and analytics for the personal development market.',
        tech: ['JavaScript', 'React 19', 'Supabase', 'Vite', 'Tailwind CSS', 'React Router', 'Razorpay', 'Vercel Analytics', 'React Calendar'],
        githubUrl: 'https://github.com/InDepthCode/reflecto-dailyjournaling',
    }
];

export const RESUME_DATA: ResumeData = {
    summary: "Results-driven Software Engineer with 2+ years of experience delivering cloud-native applications, scalable microservices, and workflow automation using Java, Spring Boot, React.js, and modern DevOps. Specialized in architecting and deploying robust backend systems with Docker, AWS, and CI/CD pipelines. Adept at building high-impact products—including AI tools, SaaS, and web platforms—adopting Agile practices and collaborating across teams. Technical content creator, open source contributor, and continuous learner in the evolving software landscape.",
    experience: [
        {
            role: 'Software Engineer (Full Stack)',
            company: 'Capgemini | PLICAA Platform Development',
            duration: 'Aug 2023 - Present',
            points: [
                'Architected and deployed microservices using Spring Boot and Camunda BPM for workflow automation.',
                'Developed responsive React.js components with seamless backend integration.',
                'Implemented Docker containerization for consistent deployment environments.',
                'Reduced process execution time by 25% through workflow optimization.',
                'Improved API response time by 20% via performance tuning.',
                'Maintained zero critical production bugs through rigorous testing.',
                'Tech Stack: Java, Spring Boot, Camunda BPM, React.js, Docker'
            ]
        },
        {
            role: 'Frontend Developer',
            company: 'Capgemini | GE Support Central UI Modernization',
            duration: 'Aug 2023 - Present',
            points: [
                'Led migration of legacy AngularJS components to modern React.js architecture.',
                'Integrated RESTful APIs with robust error handling and state management.',
                'Enhanced page performance through code optimization and best practices.',
                'Collaborated in Agile teams with active code review participation.',
                'Tech Stack: React.js, AngularJS, Axios, REST APIs'
            ]
        },
        {
            role: 'Software Engineer Intern',
            company: 'Capgemini | Course Management System',
            duration: 'Feb 2023 - Jun 2023',
            points: [
                'Built full-stack course management application with authentication and authorization.',
                'Integrated Razorpay payment gateway for secure transactions.',
                'Implemented JWT-based authentication for user session management.',
                'Designed MongoDB schema and optimized database queries.',
                'Containerized application using Docker for deployment.',
                'Tech Stack: Spring Boot, React.js, MongoDB, JWT, Razorpay, Docker'
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

export const SPECIALIZED_SKILLS = [
    'Spring Boot',
    'Express.js',
    'Flask',
    'AngularJS',
    'Vite',
    'MySQL',
    'OpenAI GPT-4o',
    'Google Gemini AI',
    'WebSocket',
    'Chrome Extensions',
    'JWT',
    'Jenkins',
    'Vercel',
    'JUnit',
    'Mockito',
    'Razorpay',
    'Axios',
    'React Router',
];