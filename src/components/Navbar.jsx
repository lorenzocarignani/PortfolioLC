import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  User,
  GalleryVerticalEnd,
  Download,
} from "lucide-react";
import AnimatedName from "./AnimatedName";
import Foto from "../assets/Foto.jpeg";
import { Link } from "react-router-dom"; // usar Link en lugar de <a> para navegación interna

const menuItems = [
  { icon: <User />, text: "Sobre mí", link: "/about" },
  { icon: <GalleryVerticalEnd />, text: "Proyectos", link: "/projects" },
  { icon: <Download />, text: "Descargar Cv", link: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <nav className="bg-negro w-full h-24 md:h-28 px-4 md:px-6 text-white flex items-center justify-between">
      {/* Logo y Nombre */}
      <div className="flex items-center gap-3">
        <div className="w-16 h-16 md:w-20 md:h-20 border-[3px] border-primary rounded-full overflow-hidden">
          <img
            src={Foto}
            alt="Lorenzo Carignani"
            className="w-full h-full object-cover"
          />
        </div>
        <AnimatedName name="Lorenzo Carignani" />
      </div>

      {/* Dropdown */}
      <div className="relative">
        <button
          onClick={toggleDropdown}
          aria-label="Menú de navegación"
          role="button"
          className="bg-gris w-12 h-12 md:w-14 md:h-14 rounded-md hover:bg-gray-700 flex items-center justify-center overflow-hidden relative border-[3px] border-primary"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isOpen ? "up" : "down"}
              initial={{ opacity: 1, rotate: -90, scale: 0.6 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 1, rotate: 90, scale: 0.6 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 30,
                duration: 0.2,
              }}
              className="absolute"
            >
              {isOpen ? (
                <ChevronUp className="text-primary w-full h-full p-2 drop-shadow-red" />
              ) : (
                <ChevronDown className="text-primary w-full h-full p-2 drop-shadow-red" />
              )}
            </motion.div>
          </AnimatePresence>
        </button>

        {/* Menú desplegable */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 p-2 bg-gris rounded-[5px] shadow-lg flex flex-col gap-2 z-50"
            >
              {menuItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                >
                  <Link
                    to={item.link}
                    className="flex items-center justify-end gap-3 py-2 hover:bg-gray-700 rounded-md transition"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-white">
                      <AnimatedName name={item.text} />
                    </span>
                    <div className="text-primary w-12 h-12 p-2 border-[3px] border-primary rounded-[5px] drop-shadow-red flex items-center justify-center">
                      {item.icon}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
