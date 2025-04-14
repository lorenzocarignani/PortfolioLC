import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Project from "../components/Project";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";
import Contact from "../components/Contact";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulamos carga
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); // 2 segundos

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <Navbar />
      <Hero />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
