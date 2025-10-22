import React from "react";
import Hero from "../Companents/Hero";
import { HeroData } from "../data/ProjectData";

export default function Projects() {
  return (
    <div>
      <Hero data={HeroData.projects} />
    </div>
  );
}
