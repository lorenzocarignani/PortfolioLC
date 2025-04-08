import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const typingSpeed = 0.05; // segundos por letra

// Nueva animación solo con opacidad
const letterAnimation = {
  hidden: { opacity: 0 },
  visible: (i) => ({
    opacity: 1,
    transition: {
      delay: i * typingSpeed,
      duration: 0.05,
    },
  }),
};

const AnimatedName = ({ name }) => {
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const totalDelay = name.length * typingSpeed * 1000 + 500;
    const timeout = setTimeout(() => setShowCursor(true), totalDelay);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <span className="text-2xl font-jaro flex items-center">
      {name.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={letterAnimation}
          initial="hidden"
          animate="visible"
          custom={index}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}

      {showCursor && (
        <motion.span
          className="ml-1 text-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
        >
          |
        </motion.span>
      )}
    </span>
  );
};

export default AnimatedName;
