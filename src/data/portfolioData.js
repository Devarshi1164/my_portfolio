const portfolioData = {
  about: {
    title: "About Me",
    description: "I am a B.Tech Computer Science graduate specializing in Cyber Security. I am passionate about leveraging technology to solve real-world problems and am eager to start my career as an AI Engineer.",
    profileImage: "/assets/profile-placeholder.svg",
  },
  skills: [
    { name: "Python", level: "Advanced" },
    { name: "Machine Learning", level: "Intermediate" },
    { name: "Cyber Security", level: "Intermediate" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "React", level: "Intermediate" },
    { name: "SQL", level: "Intermediate" },
  ],
  projects: [
    {
      title: "AI Chatbot",
      description: "Developed an AI-powered chatbot using Python and TensorFlow that can answer user queries.",
      link: "https://github.com/yourusername/ai-chatbot",
    },
    {
      title: "Web Vulnerability Scanner",
      description: "Created a web vulnerability scanner that identifies common security issues in web applications.",
      link: "https://github.com/yourusername/web-vuln-scanner",
    },
    {
      title: "Personal Portfolio Website",
      description: "Designed and developed a personal portfolio website to showcase my skills and projects.",
      link: "https://github.com/yourusername/portfolio-website",
    },
  ],
  experience: [
    {
      title: "Intern - Cyber Security",
      company: "XYZ Tech Solutions",
      duration: "June 2022 - August 2022",
      description: "Assisted in conducting security assessments and vulnerability testing for client applications.",
    },
    {
      title: "Freelance Developer",
      company: "Self-Employed",
      duration: "January 2021 - May 2022",
      description: "Developed various web applications and provided technical support to clients.",
    },
  ],
  certifications: [
    {
      title: "Certified Ethical Hacker (CEH)",
      institution: "EC-Council",
      year: 2023,
    },
    {
      title: "Machine Learning Specialization",
      institution: "Coursera",
      year: 2022,
    },
  ],
  contact: {
    email: "your.email@example.com",
    phone: "+1234567890",
    linkedin: "https://www.linkedin.com/in/yourprofile",
  },
};

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export const heroStats = [
  { label: 'AI & Cyber Security', value: 'Focused' },
  { label: 'Core stack', value: 'Python • AI • APIs' },
  { label: 'Goal', value: 'AI Engineer' },
]

export const aboutCards = [
  { title: 'Computer Science', text: 'B.Tech graduate with strong CS fundamentals.' },
  { title: 'AI & Generative AI', text: 'Interested in practical AI systems and LLM workflows.' },
  { title: 'Cyber Security', text: 'Security-first mindset in software and AI product development.' },
  { title: 'Automation', text: 'Workflow automation, API integrations, and productivity systems.' },
]

export const learningTopics = [
  'RAG',
  'LangChain',
  'LangGraph',
  'LLM applications',
  'Agentic AI',
  'Vector databases',
  'MCP',
]

export const skillGroups = [
  {
    title: 'Programming',
    items: ['Python', 'JavaScript', 'SQL'],
  },
  {
    title: 'AI / ML',
    items: ['Generative AI', 'LLMs', 'LangChain', 'RAG', 'Prompt Engineering', 'Machine Learning fundamentals'],
  },
  {
    title: 'AI Tools',
    items: ['Ollama', 'Groq', 'Streamlit', 'LangGraph', 'MCP'],
  },
  {
    title: 'Web',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Cloud / DevOps',
    items: ['AWS', 'Git', 'GitHub', 'Docker', 'CI/CD'],
  },
  {
    title: 'Cyber Security',
    items: ['Vulnerability Assessment', 'Ethical Hacking', 'Kali Linux', 'API Security', 'Endpoint Security'],
  },
]

export const projects = [
  {
    title: 'AI Knowledge Assistant',
    description:
      'An AI-powered knowledge assistant that allows users to upload documents and ask questions about their content using LLMs.',
    technologies: ['Python', 'Streamlit', 'LLMs', 'Ollama/Groq', 'RAG'],
    features: [
      'Document upload',
      'Question answering',
      'LLM integration',
      'Local AI using Ollama',
      'Interactive Streamlit interface',
    ],
    github: 'https://github.com/YOUR_USERNAME',
    demo: null,
  },
  {
    title: 'AI Integrated Endpoint Security System',
    description:
      'An AI-assisted security solution designed to improve endpoint monitoring and identify potential security threats.',
    technologies: ['Python', 'AI', 'Cyber Security'],
    features: [
      'Threat monitoring',
      'AI-assisted analysis',
      'Security insights',
      'Endpoint visibility',
    ],
    github: 'https://github.com/YOUR_USERNAME',
    demo: null,
  },
  {
    title: 'Online Voting System',
    description:
      'A web-based voting platform designed for secure, simple, and accessible digital voting workflows.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
    features: [
      'Voting flow',
      'User interface',
      'Backend logic',
      'Web app structure',
    ],
    github: 'https://github.com/YOUR_USERNAME',
    demo: null,
  },
  {
    title: 'Student Blogging Platform',
    description:
      'A student-focused blogging application for content sharing, user interaction, and lightweight publishing.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    features: [
      'Blog posts',
      'User experience',
      'Data handling',
      'Responsive interface',
    ],
    github: 'https://github.com/YOUR_USERNAME',
    demo: null,
  },
  {
    title: 'Automation / AI Workflow Projects',
    description:
      'Hands-on experience building workflow automations and AI-driven operational processes.',
    technologies: ['Power Automate', 'Power Apps', 'n8n', 'APIs', 'AI workflows'],
    features: [
      'Power Automate',
      'Power Apps',
      'n8n',
      'API integrations',
      'Workflow automation',
    ],
    github: 'https://github.com/YOUR_USERNAME',
    demo: null,
  },
]

export const experience = [
  {
    company: 'FORTEIA',
    role: 'Enterprise AI & Microsoft Power Platform Internship',
    bullets: [
      'Power Automate',
      'Power Apps',
      'n8n',
      'Workflow automation',
      'API integrations',
      'Testing',
      'Error handling',
      'Deployment and performance',
    ],
  },
  {
    company: 'Cyber Security Internship',
    role: 'Security and vulnerability analysis',
    bullets: [
      'Kali Linux',
      'Vulnerability assessment',
      'Ethical hacking',
      'Security testing',
    ],
  },
]

export const education = {
  degree: 'Bachelor of Technology (B.Tech)',
  field: 'Computer Science Engineering',
  specialization: 'Specialization: Cyber Security',
}

export const certifications = [
  'IIT Patna Agentic AI Workshop',
  'Python / Data Science learning',
  'AWS Cloud / Security learning',
  'Generative AI learning',
]

export const contactInfo = {
  email: 'your.email@example.com',
  linkedin: 'https://www.linkedin.com/in/YOUR_USERNAME',
  github: 'https://github.com/YOUR_USERNAME',
}