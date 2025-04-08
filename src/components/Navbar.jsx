import { ChevronDown, User, GalleryVerticalEnd, Download } from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedName from "./AnimatedName";
import Foto from "../assets/Foto.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { icon: <User />, text: "Sobre mí", link: "/aboutMe" },
    { icon: <GalleryVerticalEnd />, text: "Proyectos", link: "/projects" },
    { icon: <Download />, text: "Contacto", link: "/contact" },
  ];

  return (
    <div className="bg-negro w-screen h-28 flex items-center justify-between px-6 text-white">
      <div className="flex items-center gap-3">
        <div className="w-20 h-20 border-[3px] border-primary overflow-hidden rounded-full">
          <img
            src={Foto}
            alt="Lorenzo Carignani"
            className="w-full h-full object-cover"
          />
        </div>
        <AnimatedName name={"Lorenzo Carignani"} />
      </div>

      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="bg-gray-800 w-14 h-14 rounded-md hover:bg-gray-700 flex items-center justify-center"
        >
          <ChevronDown className="text-primary w-14 h-14 p-[10px] border-[3px] border-primary rounded-[5px] drop-shadow-red" />
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-1 rounded-[5px] shadow-lg flex flex-col items-end py-2"
            >
              {menuItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  className="flex items-center gap-2 py-2 hover:bg-gray-700 rounded-md"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <motion.span
                    className=" text-white pr-1"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <AnimatedName name={item.text} />
                  </motion.span>
                  <motion.div
                    className="text-primary w-14 h-14 p-[10px] border-[3px] border-primary rounded-[5px] drop-shadow-red flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.icon}
                  </motion.div>
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
