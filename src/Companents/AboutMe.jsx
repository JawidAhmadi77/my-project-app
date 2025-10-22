import React from "react";
import { AboutmeData } from "../data/ProjectData";
import { data } from "react-router-dom";

export default function AboutMe() {
  return (
    <div className="w-full px-10 text-justify lg:mx-auto max-w-7xl">
      <div>
        <h1 className="pt-32 text-3xl font-bold text-center sm:text-4xl lg:text-5xl sm:text-start">
          ABOUT ME
        </h1>
        <h2 className="py-10 text-2xl font-semibold text-center text-dimBlue sm:text-start">
          WEB DESIGNER & UI/UX DESIGNER
        </h2>
        <p className="pb-20 text-gray-600">
          *"Hi, I’m Jawid Ahmadi, a Front-end Developer with a passion for
          turning ideas into beautiful, interactive, and user-friendly websites.
          Ever since I started exploring web development, I’ve been fascinated
          by the power of design and code to create seamless digital
          experiences. I specialize in HTML, CSS, JavaScript, Tailwind CSS, and
          React, and I enjoy bringing creativity and technical skills together
          to build projects that not only look great but also function
          flawlessly. Over time, I’ve worked on various personal and client
          projects, each teaching me something new and helping me refine my
          approach to problem-solving and design. I’m constantly learning and
          experimenting with new technologies, aiming to stay at the forefront
          of web development trends. My goal is to craft innovative web
          applications that leave a lasting impression, delight users, and help
          clients achieve their vision."*
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 pb-40 text-justify sm:grid-cols-2 lg:grid-cols-3">
        {AboutmeData.map((data, items) => {
          return (
            <div key={items} className="flex items-center w-full gap-8 start-0">
              <h1 className="text-lg font-bold text-dimgreen">{data.title}</h1>
              <h2 className="text-lg font-bold text-gray-500 ">{data.body}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
