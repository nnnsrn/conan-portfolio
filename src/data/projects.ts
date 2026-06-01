export type ProjectReport = {
overview: string;
uiDirection: string;
designNotes: string[];
features: string[];
outcome: string;
};

export type Project = {
id: string;
title: string;
image: string;
reportImage?: string;
projectLink?: string;
githubLink?: string;
summary: string;
tech: string[];
status: string;
category: string;
report: ProjectReport;
};

export const projects: Project[] = [
{
id: "001",
title: "Autonomous Mobile Hand Sanitizer Robot",
image: "/projects/autonomous-sanitizer-robot.webp",
reportImage: "/projects/report-001.webp",
summary:
"Developed an autonomous sanitization robot with line-following navigation and real-time object detection, achieving 93.3% path tracking accuracy.",
tech: ["Python", "YOLOv11", "OpenCV", "Embedded Systems"],
status: "Completed",
category: "AI / ML",
report: {
overview:
"Autonomous mobile robot capable of navigation and object detection for sanitization tasks.",
uiDirection:
"Focused on integrating computer vision and embedded systems into a practical robotics application.",
designNotes: [
"Implemented line-following navigation using KY-033 IR sensors.",
"Integrated YOLOv11 object detection pipeline.",
"Reduced false positives using confidence filtering and multi-frame validation.",
],
features: [
"Autonomous navigation",
"Computer vision",
"Real-time object detection",
"Embedded control",
],
outcome:
"Achieved 93.3% path tracking accuracy and improved object detection reliability.",
},
},

{
id: "002",
title: "Gold Analysis Platform",
image: "/projects/gold-analysis-platform.webp",
reportImage: "/projects/report-002.webp",
projectLink: "https://goldaiprediction.vercel.app/",
summary:
"Built a multilingual full-stack dashboard platform with authentication, role-based access control, and real-time data visualization.",
tech: ["React", "TypeScript", "Tailwind", "Supabase"],
status: "Completed",
category: "Web Development",
report: {
overview:
"Dashboard platform for gold market analysis with secure user access and multilingual support.",
uiDirection:
"Designed for accessibility, responsiveness, and efficient data exploration.",
designNotes: [
"Built 9 functional dashboard modules.",
"Implemented authentication and role-based permissions.",
"Added English and Indonesian localization support.",
],
features: [
"Authentication",
"Role-based access control",
"Dashboard analytics",
"Localization",
],
outcome:
"Delivered a responsive platform capable of supporting multiple user roles and real-time data rendering.",
},
},

{
id: "003",
title: "Sentra Political Fact-Checking Chatbot",
image: "/projects/sentra-fact-checking-chatbot.webp",
reportImage: "/projects/report-003.webp",
githubLink: "https://github.com/Ihsan-p1/Sentra",
summary:
"Developed a RAG-powered chatbot that delivers evidence-based political insights from news articles.",
tech: ["Python", "Gemini API", "MiniLM", "Machine Learning"],
status: "Completed",
category: "AI / ML",
report: {
overview:
"AI chatbot designed to provide fact-based political insights using retrieval-augmented generation.",
uiDirection:
"Focused on transparency, explainability, and trustworthy information retrieval.",
designNotes: [
"Implemented RAG using MiniLM embeddings.",
"Integrated misinformation detection models.",
"Combined Logistic Regression and Random Forest evaluation.",
],
features: [
"Fact checking",
"News retrieval",
"RAG pipeline",
"Misinformation detection",
],
outcome:
"Reduced unreliable responses by approximately 35% through multi-model validation.",
},
},

{
id: "004",
title: "ChemicAI — AI Agent for Novel Chemical Discovery",
image: "/projects/chemicai-discovery-platform.webp",
reportImage: "/projects/report-004.webp",
projectLink: "https://chemic-ai.vercel.app/",
githubLink: "https://github.com/abel1494/ChemicAI_API_Capstone",
summary:
"Designed an AI-powered platform for screening and optimizing candidate molecules, reducing traditional discovery timelines.",
tech: ["Python", "Deep Learning", "PubChem", "SwissADME"],
status: "Featured",
category: "AI / ML",
report: {
overview:
"AI-driven system for novel chemical discovery and molecular optimization.",
uiDirection:
"Focused on accelerating research workflows through computational screening.",
designNotes: [
"Integrated molecular property prediction models.",
"Connected PubChem and SwissADME validation pipelines.",
"Built an end-to-end discovery workflow for researchers.",
],
features: [
"Molecule screening",
"Property prediction",
"Chemical validation",
"Research automation",
],
outcome:
"Reduced early-stage discovery timelines from years to weeks through computational screening.",
},
},

{
id: "005",
title: "Study Buddy — AI-Powered Focus Monitoring",
image: "/projects/study-buddy-focus-monitoring.webp",
reportImage: "/projects/report-005.webp",
githubLink: "https://github.com/tintinbunyispeda/BrainFocusAI",
summary:
"Built a real-time attention monitoring system using facial landmark and gaze analysis to improve study effectiveness.",
tech: ["Python", "Computer Vision", "OpenCV", "Machine Learning"],
status: "Completed",
category: "AI / ML",
report: {
overview:
"Attention monitoring system designed to analyze student focus in real time.",
uiDirection:
"Focused on clear visualization of engagement metrics and study recommendations.",
designNotes: [
"Implemented gaze tracking and blink detection.",
"Used facial landmark analysis for attention scoring.",
"Optimized processing for real-time responsiveness.",
],
features: [
"Focus tracking",
"Blink detection",
"Gaze analysis",
"Personalized recommendations",
],
outcome:
"Achieved approximately 80–90% focus classification accuracy during testing.",
},
},

{
id: "006",
title: "Pomodoro Productivity Hub",
image: "/projects/pomodoro-productivity-hub.webp",
reportImage: "/projects/report-006.webp",
githubLink: "https://github.com/tintinbunyispeda/android-productivity-app",
summary:
"Developed an Android productivity application featuring Pomodoro timers, task management, and productivity tracking.",
tech: ["Java", "Android Studio", "Material Design"],
status: "Completed",
category: "Mobile",
report: {
overview:
"Android productivity application designed around Pomodoro-based study sessions.",
uiDirection:
"Focused on clean navigation, usability, and productivity-focused workflows.",
designNotes: [
"Built over 10 activity screens.",
"Implemented Material Design components.",
"Created task management and timer systems.",
],
features: [
"Pomodoro timer",
"Task management",
"Productivity tracking",
"Material Design UI",
],
outcome:
"Delivered a complete Android productivity solution with multiple integrated workflows.",
},
},

{
id: "007",
title: "Factory Escape",
image: "/projects/factory-escape.webp",
reportImage: "/projects/report-007.webp",
projectLink: "https://www.roblox.com/games/110671237014383/Factory-Escape",
summary:
"Developed a 3D Roblox game featuring custom gameplay mechanics, interactive environments, and optimized assets.",
tech: ["Lua", "Roblox Studio", "Blender"],
status: "Completed",
category: "Game Development",
report: {
overview:
"Industrial-themed 3D Roblox game focused on exploration and progression.",
uiDirection:
"Designed gameplay systems and level structures for an engaging player experience.",
designNotes: [
"Implemented gameplay mechanics using Lua.",
"Integrated custom and Blender-generated assets.",
"Optimized scenes for stable performance.",
],
features: [
"3D environments",
"Custom gameplay mechanics",
"Interactive objects",
"Level progression",
],
outcome:
"Maintained stable gameplay performance while supporting multiple levels and custom mechanics.",
},
},
];

export const projectCategories = [
"All",
"AI / ML",
"Web Development",
"Mobile",
"Game Development",
] as const;

export const getProjectById = (projectId: string) =>
projects.find((project) => project.id === projectId);
