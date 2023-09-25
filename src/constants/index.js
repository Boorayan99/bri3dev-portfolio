import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    meta,
    shopify,
    ediani,
    myshirt,
    tripguide,
    threejs,
  } from "../assets";
  
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
      title: "Frontend Web Developer",
      icon: web,
    },
    {
      title: "ReactJS Developer",
      icon: mobile,
    },
    {
      title: "ThreeJS Developer",
      icon: creator,
    },
    {
      title: "API/Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "ReactJS Developer",
      company_name: "Ediani Tech Solutions",
      icon: meta,
      iconBg: "#383E56",
      date: "Jan 2023 - Now",
      points: [
        "Developing new user-facing features using React.JS.",
        "Building reusable components and front-end libraries for future use.",
        "Translating designs and wireframes into high quality code.",
        "Optimizing components for maximum performance across a vast array of web-capable devices and browsers",
      ],
    },
    {
      title: "Junior Developer",
      company_name: "Eloise Creatives Ltd",
      icon: shopify,
      iconBg: "#383E56",
      date: "Dec 2021 - Dec 2022",
      points: [
        "Developing and maintaining web applications using React.JS and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Brian proved me wrong.",
      name: "Sara Lee-yao",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Brian does.",
      name: "Chris Breezy",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Brian optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang-lee",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Ediani e-Shop",
      description:
        "A dynamic and user-friendly ecommerce website providing a convenient and efficient solution for online shoppers.",
      tags: [
        {
          name: "React.Js",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: ediani,
      source_code_link: "https://github.com/Boorayan99/ediani-app.git",
    },
    {
      name: "MyTshirt",
      description:
        "Web application that enables users to customize t-shirt designs on a 3D model using AI",
      tags: [
        {
          name: "React.Js",
          color: "blue-text-gradient",
        },
        {
          name: "Three.Js",
          color: "green-text-gradient",
        },
        {
          name: "Dall-E2",
          color: "pink-text-gradient",
        },
      ],
      image: myshirt,
      source_code_link: "https://github.com/Boorayan99/my3DTshirt.git",
    },
    {
      name: "Trip Radar",
      description:
        "A comprehensive travel advisory platform that offers users curated recommendations for popular travel destinations, local hospitality services and local weather updates.",
      tags: [
        {
          name: "React.Js",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "Tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Boorayan99/trip-radar.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };