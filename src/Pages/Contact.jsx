import React from "react";
import Hero from "../Companents/Hero";
import { HeroData } from "../data/ProjectData";
import ContactForm from "../Companents/Form";

export default function Contact() {
  return (
    <div>
      <Hero data={HeroData.contact} />
      <ContactForm />
    </div>
  );
}
