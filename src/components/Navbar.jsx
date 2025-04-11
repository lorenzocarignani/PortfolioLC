import React, { useState, useEffect } from "react";

import AnimatedName from "./AnimatedName";
import Foto from "../assets/Foto.webp";

import Dropdown from "./Dropdown";
import DropdownIcons from "./DropdownIcons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsShrunk(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          isShrunk
            ? "py-2 bg-negro/90 shadow-md backdrop-blur-sm"
            : "py-6 bg-negro"
        }`}
    >
      <div className="w-full px-4 md:px-6 text-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 md:w-20 md:h-20 border-[3px] border-primary rounded-full overflow-hidden">
            <img
              src={Foto}
              alt="Lorenzo Carignani"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <AnimatedName name="Lorenzo Carignani" />
        </div>

        {/* Dropdown */}
        <div className="relative">
          <Dropdown setIsOpen={setIsOpen} isOpen={isOpen} />
          {/* Menú desplegable */}
          <DropdownIcons isOpen={isOpen} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
