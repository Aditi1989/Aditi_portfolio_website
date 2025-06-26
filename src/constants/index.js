import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  aws,
  canva,
  python,
  bootstrap,
  java,
  tensorflow,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  tailwind,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
  customer,
  eegsignal,
  outfit,
  kiitlogo,
  stjosephconvent,
  narbheram,
} from '../assets'


// Import Tekisky separately

import tcslogo from "../assets/tcslogo.png"; // Add this import


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "Data Analytics",
    icon: mobile,
  },
  {
    title: "AI/ML",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Canva", icon: canva },
  { name: "Python", icon: python },
  { name: "Bootstrap", icon: bootstrap },
  { name: "Java", icon: java },
  { name: "TensorFlow", icon: tensorflow },
  { name: "figma", icon: figma },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "AWS", icon: aws },
  { name: "MongoDB", icon: mongodb },
  { name: "MySql", icon: mysql },
  { name: "git", icon: git },
];

const experiences = [
  {
    title: "Project Intern - Tata Consultancy Services (TCS)",
    company_name: "TCS",
    icon: tcslogo, // Use the imported variable
    iconBg: "#383E56",
    date: "May 2025 - June 2025",
    points: [
  "Designed and developed 'GET ME A LOOK' — a context-aware outfit recommendation system using advanced rule-based logic, color theory, and user profiling.",
  "Built a full-stack web platform with React and Flask, enabling personalized clothing suggestions based on wardrobe data, user preferences, and event context.",
  "Implemented features like natural language prompt handling, perceptual color matching, and occasion-specific outfit generation.",
  "Focused on privacy-first architecture with offline compatibility, minimal data storage, and modular code ready for AI/ML integration.",
],
  },
 
];

const education = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institute: "Kalinga Institute of Industrial Technology, Bhubaneswar",
    duration: "2022 - 2026",
    image: kiitlogo,
  },
  {
    degree: "CISCE 12th Board ",
    institute: "Narbheram Hansraj English School, Jamshedpur",
    duration: "2020 - 2022",
    image: narbheram,
  },
  {
    degree: "CISCE 10th Board",
    institute: "St. Joseph’s Convent High School, Mosaboni",
    duration: "2008 - 2020",
    image: stjosephconvent,
  },
];

const projects = [
  {
    name: "Get Me A Look",
    description:
      "A context-aware outfit recommendation platform built with React and Flask. Uses color theory, wardrobe profiling, and advanced rule-based logic to deliver personalized clothing suggestions without AI dependencies. Focuses on privacy, sustainability, and smart wardrobe utilization.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "flask", color: "green-text-gradient" },
      { name: "python", color: "pink-text-gradient" },
      { name: "json", color: "white-text-gradient" },
    ],
    image: outfit, // Changed from project2 to outfit
    source_code_link: "https://github.com/Aditi1989/get_me_look",
  },
  {
    name: "Customer Feedback Analysis System",
    description:
      "A real-time sentiment analysis platform leveraging NLP and deep learning to classify customer reviews as positive, neutral, or negative. Handles sarcasm, supports long and short text, and visualizes sentiment insights with interactive charts.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "nlp", color: "green-text-gradient" },
      { name: "deep learning", color: "pink-text-gradient" },
      { name: "streamlit", color: "white-text-gradient" },
    ],
    image: customer, // Changed from project3 to customer
    source_code_link: "https://github.com/Aditi1989/customer_feedback_system",
  },
  {
    name: "EEG Signal Analysis Project",
    description:
      "Developed a Python-based EEG signal analysis system to detect seizures from EEG data. Includes preprocessing, feature extraction, and demonstration of seizure detection algorithms via Jupyter Notebook.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "EEG", color: "green-text-gradient" },
      { name: "signal processing", color: "pink-text-gradient" },
      { name: "jupyter", color: "white-text-gradient" },
    ],
    image: eegsignal, // Changed from gearXpert to eegsignal
    source_code_link: "https://github.com/Aditi1989/EEG-SIGNAL-ANALYSIS-PROJECT",
  },
];


export { services, technologies, experiences, education, projects };
