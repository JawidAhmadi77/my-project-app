// import React from "react";
import AboutMe from "../Companents/AboutMe";
import Hero from "../Companents/Hero";
import { HeroData } from "../data/ProjectData";

export default function About() {
  return (
    <div>
      <Hero data={HeroData.about} />
      <AboutMe />
    </div>
  );
}
