import React from "react";
import Hero from "../Companents/Hero";
import { HeroData } from "../data/ProjectData";
import Skills from "../Companents/Skills";

import ConectsMe from "../Companents/ConectsMe";
import Footer from "../Companents/Footer";

export default function Home() {
  return (
    <div>
      <div>
        <Hero data={HeroData.home} />
      </div>
      <div>
        <Skills />
        <ConectsMe />
      </div>
    </div>
  );
}
