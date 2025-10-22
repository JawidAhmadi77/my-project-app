import {FaFacebook, FaInstagram, FaTelegram, FaWhatsapp} from "react-icons/fa"
import { bootstrap, figma, html, img1,img2, img3, img4, js, react, tailwind} from "../assets/index"
import { useImperativeHandle } from "react";

export const navData = {
  logo: "AHMADI",
  links: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contacts", path: "/contact" },
  ],
  social: [
    { icon: FaFacebook, url: "https://www.facebook.com/profile.php?id=61566438005642" },
    { icon: FaInstagram, url: "https://www.instagram.com/jawid5169?igsh=MXVzYWtnOGpsMG83NA==" },
    { icon: FaWhatsapp, url: "https://wa.me/+93796959949" },
    { icon: FaTelegram, url: "https://t.me/+93796959949" },
    
  ],
};



export const HeroData = {
  home: {
    title: "Hey, my name is",
    name: "JAWID AHMADI",
    skill: "WEB DESIGNER & UI/UX DESIGNER",
    img: img2,
    bgColor: "bg-dimgreen text-white",
    style:"mt-20"
  },
  about: {
    title: "",
    name: "ABOUT ME",
    skill: "Creative Frontend Developer",
    img: img1,
    bgColor: "bg-dimgreen text-white",
    style:"rounded-full mt-32",
  },
  projects: {
    title: "",
    name: "CASE STUDIES",
    skill: "Some of My Works",
    img: img4,
    bgColor: "bg-dimgreen text-white",
    style:"rounded-full mt-32",
  },
  contact: {
    title: "",
    name: "CONTACT ME",
    skill: "Let's work together",
    img: img3,
    bgColor: "bg-dimgreen text-white",
    style:"rounded-full mt-32",
  },
};

export const skillData=[
  {
    img:figma,
    name:"FIGMA",
    per:"82%",
  },
  {
    img:html,
    name:"HTML",
    per:"94%",
  },
   {
    img:bootstrap,
    name:"BOOTSTRAP",
    per:"92%",
  },
   {
    img:js,
    name:"JAVASCRIPT",
    per:"78%",
  },
   {
    img:tailwind,
    name:"TAILWIND",
    per:"91%",
  },
   {
    img:react,
    name:"REACT",
    per:"80%",
  },
];



// src/data/contactData.js
export const contactData = {
  title: "Contact Me",
  fields: [
    {
      id: "name",
      label: "Name",
      type: "text",
      placeholder: "Enter your name",
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
    },
    {
      id: "comment",
      label: "Comment",
      type: "textarea",
      placeholder: "Write your message...",
    },
  ],
  buttonText: "Send Message",
};


export const conectsMeData=[
  {
    title:"Have a great idea?",
    body:"Let’s talk about ",
    body2:"your project",
    button:"CONTACT ME" ,
    img:img4,
    
  }
];

export const AboutmeData=[
  {
    title:"BIRTHDAY",
    body:"2003.10.04",
  },
  {
    title:"AGE",
    body:"21",
  },
  {
    title:"NATIONALITY",
    body:"AFGHAN",
  },
  {
    title:"STUDY",
    body:"UNIVERSITY OF KABUL"
  },
  {
    title:"DEGREE",
    body:"STUDENT",
  },
  {
    title:"FREELANCE",
    body:"AVAILABLE",
  },
  {
    title:"EMAIL",
    body:"ahmadijawid347@gmail.com",
  },
  {
    title:"PHONE",
    body:"+93796959949",
  },
  {
    title:"ADDRESS",
    body:"KABUL-AFGHANISTAN",
  },
];
  
