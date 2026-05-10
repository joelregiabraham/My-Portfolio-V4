export const personal = {
  name: "Joel Regi Abraham",
  title: "Software Developer & IT Professional",
  tagline:
    "Building enterprise tools across Android, SPFx, Azure microservices, and ML applications.",
  about:
    "I build practical software solutions that connect enterprise systems, warehouse operations, cloud platforms, and user-facing applications. My work spans Android deployment for warehouse workflows, SharePoint Framework development, Dayforce XML automation, Azure microservices, full-stack development, and machine learning application deployment.",
  location: "Waterloo, ON, Canada",
  email: "itzmejoels@gmail.com",
  linkedin: "https://www.linkedin.com/in/joel-regi-abraham-739b68279/",
  github: "https://github.com/joelregiabraham",
  highlights: [
    { label: "Current Role", value: "SW Dev & IT Support", sub: "Erb Group of Companies" },
    { label: "Education", value: "BCS (Honours)", sub: "Conestoga College" },
    { label: "Team Lead", value: "5-Person Team", sub: "Nexus Track Capstone" },
    { label: "Deployed to", value: "200+ Devices", sub: "Win 11 + Android" },
  ],
};

export const experience = [
  {
    role: "Software Developer & IT Support (Part-Time)",
    company: "Erb Group of Companies",
    location: "New Hamburg, ON",
    period: "Jan. 2026 – Present",
    bullets: [
      "Leading a phased canary deployment of the Android Pallet Cubing app across 30+ CT50 handheld devices spanning 3 warehouse terminals, automating the cubing process and iterating on features based on user feedback.",
      "Developing custom SPFx Web Parts and components for the company intranet using TypeScript, improving internal tooling and employee-facing portal functionality.",
      "Managing IT operations including Windows Server Active Directory maintenance and Freshdesk ticket resolution.",
    ],
    current: true,
  },
  {
    role: "IT Support Technician Co-op",
    company: "Erb Group of Companies",
    location: "New Hamburg, ON",
    period: "May 2025 – Dec. 2025",
    bullets: [
      "Developed a custom Android mobile application for automating Pallet Cubing and reporting, managing the full lifecycle to enhance warehouse efficiency.",
      "Initiated SPFx development and created XML HR forms on Dayforce to streamline workflows and modernize internal tools.",
      "Completed Windows 11 migration across 200+ systems and resolved daily support tickets via Freshdesk.",
    ],
    current: false,
  },
  {
    role: "Full Stack Web Developer (Freelance)",
    company: "Snyder Tree Removal",
    location: "New Hamburg, ON",
    period: "Jan. 2025 – Apr. 2025",
    link: "https://www.snydertree.ca/",
    bullets: [
      "Modernized a decade-old static website into a responsive, interactive platform using modern web standards.",
    ],
    current: false,
  },
];

export const projects = [
  {
    title: "Nexus Track",
    subtitle: "Capstone Project — Erb Group of Companies",
    period: "Jan. 2026 – Present",
    status: "In Progress",
    bullets: [
      "Leading a team of 5 students building a Client Portal with real-time fleet tracking via Google Maps API, collaborating with Erb Group stakeholders.",
      "Architecting a cloud-native microservices backend on Azure (Python + SQL Server 2022) with a Next.js frontend. Backend milestone complete.",
      "Following full SDLC + Agile methodology with canary and blue-green deployment strategies for zero-downtime releases.",
    ],
    tags: ["Next.js", "Azure", "Python", "SQL Server", "Google Maps API", "Microservices"],
    color: "indigo",
  },
  {
    title: "Cardiovascular Risk Predictor",
    subtitle: "ML Application",
    period: "Mar. 2026 – Apr. 2026",
    status: "Live",
    link: "https://huggingface.co/spaces/vortex225/cvd-risk-predictor",
    linkLabel: "Live Demo on Hugging Face",
    bullets: [
      "Led a team of 4 as Team Leader and Lead Developer to design and deploy an end-to-end CVD risk prediction app in a 4-week sprint.",
      "Preprocessed the Sulianova Cardiovascular Disease Dataset with Pandas and trained a Random Forest classifier, achieving ROC-AUC: 0.7879 and 72.2% accuracy.",
      "Deployed an interactive Streamlit app to Hugging Face Spaces; validated with doctors and medical students from RAK Medical & Health Sciences University.",
    ],
    tags: ["Python", "scikit-learn", "Streamlit", "Pandas", "Machine Learning", "Hugging Face"],
    color: "violet",
  },
  {
    title: "Snyder Tree Removal Website",
    subtitle: "Freelance Full-Stack Project",
    period: "Jan. 2025 – Apr. 2025",
    status: "Live",
    link: "https://www.snydertree.ca/",
    linkLabel: "Visit snydertree.ca",
    bullets: [
      "Modernized a decade-old static website into a responsive, interactive platform using modern web standards.",
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    color: "cyan",
  },
];

export const skills = [
  {
    category: "Languages",
    color: "indigo",
    items: ["Java", "C++", "Python", "JavaScript", "TypeScript"],
  },
  {
    category: "Frameworks & Web",
    color: "violet",
    items: ["React", "Next.js", "Node.js", "HTML5", "CSS3", "REST APIs"],
  },
  {
    category: "Cloud & Enterprise",
    color: "cyan",
    items: ["Azure", "Docker", "SPFx", "SharePoint", "Dayforce XML", "Active Directory"],
  },
  {
    category: "Data & Tools",
    color: "emerald",
    items: ["SQL Server", "MongoDB", "Pandas", "scikit-learn", "Streamlit", "Power BI", "Git", "CI/CD"],
  },
];

export const education = [
  {
    degree: "Bachelor of Computer Science (Honours)",
    institution: "Conestoga College",
    location: "Waterloo, ON",
    period: "Jan. 2023 – Present",
    current: true,
  },
];
