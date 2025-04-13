import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Project from "../components/Project";
import ProjectContent from "../components/ProjectContent";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <ProjectContent />
      <Project />
      <Footer />
    </div>
  );
};

export default Projects;
