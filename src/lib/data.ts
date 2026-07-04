export const profile = {
  name: 'Cody Liew Chern Jin',
  title: 'AI & Software Engineer',
  email: 'codyyliew@gmail.com',
  phone: '+6019-6008826',
  linkedin: 'https://linkedin.com/in/codyy6',
  github: 'https://github.com/codyy6',
  summary:
    'AI Product Engineer and Software Engineer with experience shipping production LLM systems, billing infrastructure, and scalable cloud platforms. Focused on agent optimization, prompt engineering, and cost-efficient infrastructure, with a track record of leading distributed teams and resolving high-impact security and reliability issues.',
}

export const skills = [
  {
    category: 'AI / LLM',
    items: [
      'Agentic Systems',
      'Prompt Engineering',
      'Context Engineering',
      'Reinforcement Learning',
      'LLM Observability',
      'Model Evaluation',
    ],
  },
  {
    category: 'Cloud & Infrastructure',
    items: ['AWS (EKS, EC2, S3, Route 53)', 'Kubernetes', 'OpenSearch'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Knockout.js'],
  },
  {
    category: 'Practices',
    items: ['FedRAMP Compliance', 'WCAG Accessibility', 'Security Auditing', 'Cost Optimization','Resource Optimization'],
  },
]

export const experiences = [
  {
    company: 'YTL AI Labs',
    companyUrl: 'https://chat.ilmu.ai',
    title: 'AI Product Engineer / AI Lead',
    location: 'Kuala Lumpur, Malaysia',
    period: 'Jan 2026 – Present',
    current: true,
    bullets: [
      'Delivered subscription and billing systems covering gifting, recurring payments, proration, and revenue-protection safeguards across multiple plan tiers.',
      'Built an LLM observability stack (Langfuse) capturing structured span metadata — tool iterations, failures, token usage, execution duration, and paths — across agent runs.',
      'Optimized AI agents by simplifying logic and re-engineering prompts, cutting token usage 70–80% while maintaining response quality; extended savings by implementing reusable agent skills.',
      'Reduced Kubernetes resource usage 20–40% and AWS costs ~5% through EKS namespace management and removal of idle load balancers and instances.',
      'Resolved critical AI reasoning-content exposure issues and closed 8+ security audit gaps across authentication and onboarding systems.',
      'Diagnosed and resolved a retry storm between the application and AI Gateway, cutting request load 15–25%.',
      'Identified and fixed an analytics miscalculation bug that was distorting system-wide error rates by 1–5%.',
      'Built a configuration control system for dynamic model selection, subscription plan configuration, feature flag groups, and runtime overrides.',
      'Coordinated distributed engineering teams across Vietnam and Malaysia, eliminating duplicate work and improving cross-team delivery.',
    ],
  },
  {
    company: 'Ideagen (Huddle)',
    companyUrl: 'https://www.ideagen.com',
    title: 'Software Engineer',
    location: 'Shah Alam, Malaysia',
    period: 'Oct 2024 – Sep 2025',
    current: false,
    bullets: [
      'Migrated 25%+ of legacy Knockout.js code to functional React components while maintaining 100% test coverage on new components.',
      'Led a zero-downtime reindexing initiative for 1M+ documents in OpenSearch, sustaining 99.9% system availability throughout migration.',
      'Improved product search functionality, cutting search time 10–20% and enabling deeper drill-down via expanded OpenSearch index fields.',
      'Resolved 20% of open accessibility violations, improving WCAG compliance.',
      'Ensured full FedRAMP compliance across the product and worked across AWS services including Route 53, EC2, OpenSearch, and S3.',
      'Troubleshot cross-platform environment issues on Windows and Ubuntu to keep services running.',
      'Selected as technical panelist for the CEO\'s organizational AI strategy tour, contributing to the implementation roadmap.',
    ],
  },
  {
    company: 'Outlier',
    companyUrl: 'https://outlier.ai',
    title: 'Prompt Engineer',
    location: 'Remote, United States',
    period: 'Apr 2023 – Dec 2024',
    current: false,
    bullets: [
      'Optimized prompts for large language models with a focus on Chinese language nuance and cultural context, using reinforcement learning techniques.',
      'Evaluated 100+ Chinese-language AI responses weekly, maintaining an 80% accuracy rating from the development team.',
      'Authored detailed feedback reports that informed model performance and user-experience improvements.',
    ],
  },
]

export const products = [
  {
    name: 'IlmuChat',
    url: 'https://chat.ilmu.ai',
    company: 'YTL AI Labs',
    role: 'AI Product Engineer / AI Lead',
    period: 'Jan 2026 – Present',
    description:
      'AI chat platform for Malaysian users — mainly working on billing, infrastructure, LLM agent optimization, and observability.',
    tags: ['LLM Agents', 'Prompt Engineering', 'Kubernetes', 'AWS', 'Billing Systems'],
  },
  {
    name: 'Huddle',
    url: 'https://www.ideagen.com/products/huddle',
    company: 'Ideagen',
    role: 'Software Engineer',
    period: 'Oct 2024 – Sep 2025',
    description:
      'Enterprise document collaboration platform — mainly working on OpenSearch reindexing, React migration, and FedRAMP compliance.',
    tags: ['React', 'OpenSearch', 'FedRAMP', 'AWS', 'Knockout.js'],
  },
]

export const projects = [
  {
    slug: 'small-language-model',
    title: 'Small Language Model',
    description:
      'Built a small-scale language model from the ground up, implementing core transformer architecture components including tokenization, attention mechanisms, and training loops.',
    tags: ['Python', 'PyTorch', 'NLP', 'Deep Learning'],
    github: 'https://github.com/codyy6/Small-Language-Model',
    featured: true,
  },
  {
    slug: 'ai-smart-contract-auditing',
    title: 'AI Smart Contract Auditing Platform',
    description:
      'Vulnerability detection model for auditing smart contracts using NLP techniques to identify security flaws and potential exploits in Solidity code.',
    tags: ['Python', 'NLP', 'AI/ML', 'Security'],
    github: 'https://github.com/codyy6/AI-Smart-Contract-Vulnerability-Detection-Model',
    featured: true,
  },
]

export const personal = [
  {
    title: 'Traveller by default',
    text: 'Spent two weeks in China recently — Zhangjiajie to Yubeng, a remote Tibetan village only reachable on foot. Back in Malaysia, still dragging friends up jungle hills before sunrise.',
    image: '/IMG_20260517_111618394.jpg',
    video: null,
  },
  {
    title: 'Not afraid of a calculated risk',
    text: 'Via ferrata on cliff faces. Bungee jumps. The keyword is calculated — scope the risk, make the call, commit. Same approach at work.',
    image: '/mmexport1778659899542.jpg',
    video: '/via-ferrata.mp4',
  },
  {
    title: "Doesn't take himself too seriously",
    text: 'Will sit cross-legged on a tiny grass patch in a public park and hold a meditation pose until someone takes the photo.',
    image: '/photo_6312084749853769941_w.jpg',
    video: null,
  },
]

export const education = [
  {
    institution: 'Asia Pacific University of Technology and Innovation (APU)',
    degree: "Bachelor's Degree in Computer Science",
    specialization: 'Specialized in Artificial Intelligence',
    cgpa: '3.58',
    period: '2022 – 2024',
  },
  {
    institution: 'Asia Pacific University of Technology and Innovation (APU)',
    degree: 'Diploma in Data Informatics',
    specialization: '',
    cgpa: '3.78',
    period: '2020 – 2022',
  },
]
