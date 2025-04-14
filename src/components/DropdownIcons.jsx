import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import AnimatedName from "./AnimatedName";

const DropdownIcons = ({ isOpen, menuItems, setIsOpen }) => {
  return (
    <div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute  bg-negro right-0 mt-2 rounded-[5px] flex flex-col gap-2 z-50"
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
              >
                {item.text === "Descargar Cv" ? (
                  <a
                    href="/Lorenzo-Carignani-CV.pdf"
                    download="Lorenzo-Carignani-CV.pdf"
                    className="flex items-center justify-end gap-3 py-2 hover:drop-shadow-red rounded-[5px] transition"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-white">
                      <AnimatedName name={item.text} />
                    </span>
                    <div className="text-primary w-14 h-14 p-2 border-[3px] border-primary rounded-[5px] flex items-center justify-center">
                      {item.icon}
                    </div>
                  </a>
                ) : (
                  <Link
                    to={item.link}
                    className="flex items-center justify-end gap-3 py-2 hover:drop-shadow-red rounded-[5px] transition"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-white">
                      <AnimatedName name={item.text} />
                    </span>
                    <div className="text-primary w-14 h-14 p-2 border-[3px] border-primary rounded-[5px] flex items-center justify-center">
                      {item.icon}
                    </div>
                  </Link>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropdownIcons;
