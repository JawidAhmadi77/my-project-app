// src/Companents/Skills.jsx
import React, { useEffect, useRef, useState } from "react";
import { skillData } from "../data/ProjectData";

export default function Skills() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  // observer: کله چې section ښکاره شي، animation پیل کړه
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // یوازې یو ځل انیمېشن
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 bg-gray-100 sm:py-24 md:py-32 lg:pt-80"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-8 md:px-12 lg:px-6">
        <div className="grid grid-cols-1 gap-6 text-center sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 sm:gap-8">
          {skillData.map((data, index) => (
            <SkillCard
              key={index}
              data={data}
              visible={visible}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// 🎯 یو جلا component د animation لپاره
function SkillCard({ data, visible, delay }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (visible) {
      let start = 0;
      const end = parseInt(data.per);
      const duration = 1500; // 1.5 second animation
      const stepTime = Math.max(Math.floor(duration / end), 15);

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) clearInterval(timer);
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [visible, data.per]);

  return (
    <div
      className="p-6 transition-all duration-100 bg-white border border-gray-200 shadow-md sm:p-8 rounded-3xl hover:bg-dimgreen group hover:shadow-2xl hover:shadow-dimgreen hover:-translate-y-2"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex justify-center mb-4 ">
        <img
          src={data.img}
          alt={data.name}
          className="object-contain transition-transform w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 group-hover:scale-110"
        />
      </div>
      <h1 className="mb-1 text-base font-semibold duration-50 md:py-4 sm:text-lg md:text-xl sm:mb-2 group-hover:text-white">
        {data.name}
      </h1>
      <p className="text-lg font-bold text-gray-600 sm:text-xl group-hover:text-white">
        {count}%
      </p>
    </div>
  );
}
