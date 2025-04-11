import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const Dropdown = ({ setIsOpen, isOpen }) => {
  const toggleDropdown = () => setIsOpen((prev) => !prev);
  return (
    <div>
      <button
        onClick={toggleDropdown}
        aria-label="Menú de navegación"
        role="button"
        className="w-12 h-12 md:w-14 md:h-14 rounded-md hover:drop-shadow-red flex items-center justify-center overflow-hidden relative border-[3px] border-primary"
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
              <ChevronUp className="text-primary w-full h-full p-2" />
            ) : (
              <ChevronDown className="text-primary w-full h-full p-2" />
            )}
          </motion.div>
        </AnimatePresence>
      </button>
    </div>
  );
};

export default Dropdown;
