import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AnimatedName from "./AnimatedName";
import Foto from "../assets/Pictures/Foto.webp";
import Dropdown from "./Dropdown";
import DropdownIcons from "./DropdownIcons";
import LanguageSwitcher from "./LanguageSwitcher";

import { User, GalleryVerticalEnd, Download, Home, Store } from "lucide-react";
import useTranslation from "../custom/useTraslation/useTraslation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);
  const t = useTranslation();

  const menuItems = [
    { icon: <Home />, text: t("navbar.home"), link: "/" },
    { icon: <Store />, text: t("nabar.services"), link: "/services" },
    { icon: <User />, text: t("nabar.user"), link: "/about" },
    {
      icon: <GalleryVerticalEnd />,
      text: t("nabar.projects"),
      link: "/projects",
    },
    {
      icon: <Download />,
      text: t("nabar.cv"),
    },
  ];

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
        {/* Foto + Nombre */}
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

        {/* Menú horizontal desde 901px en adelante */}
        <div className="hidden [@media(min-width:901px)]:flex items-center gap-6">
          <div className="hidden [@media(min-width:901px)]:flex items-center gap-6">
            <LanguageSwitcher />
          </div>
          {menuItems.map((item, index) => (
            <div key={index}>
              {item.text === t("nabar.cv") ? (
                <a
                  href="/Lorenzo-Carignani-CV.pdf"
                  download="Lorenzo-Carignani-CV.pdf"
                  className="flex items-center gap-2 text-white hover:drop-shadow-red transition"
                >
                  <span>{item.icon}</span>
                  <AnimatedName name={item.text} />
                </a>
              ) : (
                <Link
                  to={item.link}
                  className="flex items-center gap-2 text-white hover:drop-shadow-red transition"
                >
                  <span>{item.icon}</span>
                  <AnimatedName name={item.text} />
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Dropdown hasta 900px */}
        <div className="relative [@media(min-width:901px)]:hidden">
          <Dropdown setIsOpen={setIsOpen} isOpen={isOpen} />
          <DropdownIcons
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            menuItems={menuItems}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
