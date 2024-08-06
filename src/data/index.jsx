import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";

export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Vikas Gupta",
  info: "Learning MERN stack",
};

export const ABOUT = {
  text1: "I am learning and looking for MERN interships and Jobs",
  text2:
    "Final-year student specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js) with practical experience in developing responsive UIs using Material-UI and Tailwind CSS. Proven skills in Redux for state management and integration of Razorpay for secure transactions. Hands-on projects include a comprehensive Ecommerce platform and a visitor register maintenance system. Demonstrated problem-solving abilities through solving 200+ LeetCode and 250+ GeeksforGeeks problems. Actively participated in LeetCode and GFG hackathons, contributing to innovative solutions and gaining valuable software development experience",
};

export const PROJECTS = [
  {
    title: "E-commerce Web Application",
    subtitle: "Tech Stack: MERN (MongoDB, Express.js, React.js, Node.js)",
    description: `UI Development: Material-UI (MUI), Tailwind CSS
State Management: Redux
Secure Payments: Razorpay integration
Features: Login and registration, advanced multi-criteria filtering, fully functional shopping cart, responsive UI, admin dashboard for inventory and financial metrics`,
    website: "https://e-commerce-frontend-5upu.onrender.com/",
    github: "https://github.com/VikasGgit/MERN-E-com",
    image: "", // Add a valid image URL if available
  },
  {
    title: "Visitors Register Maintenance Website",
    subtitle: "Tech Stack: MERN (MongoDB, Express.js, React.js, Node.js)",
    description: `Functionality: Records office visitors' information, separate maintainer dashboard for entry/exit times and purpose of visit
Key Features: Secure data handling, intuitive UI, real-time updates
Admin Link Employee Link`,
    website: "https://register-frontend-zow7.onrender.com/",
    github: "https://github.com/VikasGgit/Register_frontend",
    image: "", // Add a valid image URL if available
  },
  {
    title: "Learning Projects",
    subtitle: "Various technologies",
    description: `1. Full stack: Chat App using Socket.io
2. React Projects: Password Generator, Background Changer, Currency Converter, To-do
3. HTML CSS JS: Image Search Engine, Dragon Game`,
    website: "https://github.com/VikasGgit",
    github: "https://github.com/VikasGgit",
    image: "", // Add a valid image URL if available
  },
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "React",
    experience: "1+ years",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-6xl" />,
    name: "Node.js",
    experience: "1+ years",
  },
  {
    icon: <TbBrandCpp className="text-4xl text-green-600 lg:text-6xl" />,
    name: "C++",
    experience: "1+ years",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-6xl" />,
    name: "MongoDB",
    experience: "1+ years",
  },
  {
    icon: <FaNodeJs className="text-4xl text-red-600 lg:text-6xl" />,
    name: "Express.js",
    experience: "1+ year",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://github.com/VikasGgit",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/vikas-gupta-234512224/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.geeksforgeeks.org/user/vikascol5v9y/",
    icon: <SiGeeksforgeeks fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://leetcode.com/u/Vikasguptagkp/",
    icon: <SiLeetcode fontSize={25} className=" hover:opacity-80" />,
  },
];

export const logo =
  "https://www.pngitem.com/pimgs/m/238-2384334_my-portfolio-cover-design-hd-png-download.png";
