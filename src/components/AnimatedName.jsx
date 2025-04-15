import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { memo } from "react";

const typingSpeed = 0.05; // segundos por letra

const AnimatedName = ({ name }) => {
  const [showCursor, setShowCursor] = useState(false);

  // ✅ Memoiza la animación para evitar recalcularla en cada render
  const getLetterAnimation = useCallback(
    (i) => ({
      opacity: 1,
      transition: {
        delay: i * typingSpeed,
        duration: 0.15,
      },
    }),
    []
  );

  useEffect(() => {
    const totalDelay = name.length * typingSpeed * 1000 + 500;
    const timeout = setTimeout(() => setShowCursor(true), totalDelay);
    return () => clearTimeout(timeout);
  }, [name]);

  return (
    <span
      className="text-xl flex items-center whitespace-nowrap"
      aria-label={name}
    >
      {name.split("").map((char, index) => (
        <motion.span
          key={index}
          custom={index}
          initial={{ opacity: 0 }}
          animate={getLetterAnimation(index)}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}

      <motion.span
        className="ml-1 text-primary"
        initial={{ opacity: 0 }}
        animate={{ opacity: showCursor ? [0, 1, 0] : 0 }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
      >
        |
      </motion.span>
    </span>
  );
};

export default memo(AnimatedName);
