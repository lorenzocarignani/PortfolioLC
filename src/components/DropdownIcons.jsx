import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { User, GalleryVerticalEnd, Download } from "lucide-react";
import AnimatedName from "./AnimatedName";

const menuItems = [
  { icon: <User />, text: "Sobre mí", link: "/about" },
  { icon: <GalleryVerticalEnd />, text: "Proyectos", link: "/projects" },
  { icon: <Download />, text: "Descargar Cv", link: "/contact" },
];
const DropdownIcons = ({ isOpen }) => {
  return (
    <div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 rounded-[5px] shadow-lg flex flex-col gap-2 z-50"
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
                  className="flex items-center justify-end gap-3 py-2 hover:drop-shadow-red rounded-md transition"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-white">
                    <AnimatedName name={item.text} />
                  </span>
                  <div className="text-primary w-12 h-12 p-2 border-[3px] border-primary rounded-[5px] hover:drop-shadow-red flex items-center justify-center">
                    {item.icon}
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropdownIcons;
