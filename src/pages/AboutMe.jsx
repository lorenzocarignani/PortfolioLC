import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHero from "../components/AboutHero";
import Contact from "../components/Contact";

const AboutMe = () => {
  return (
    <div>
      <Navbar />
      <AboutHero />
      <Contact />
      <Footer />
    </div>
  );
};

export default AboutMe;
