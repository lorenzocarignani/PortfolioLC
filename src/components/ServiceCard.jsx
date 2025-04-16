import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";

const ServiceCard = ({ title, items, link }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gris text-white rounded-2xl p-6 shadow-lg flex flex-col justify-between min-h-[320px]"
    >
      <h3 className="text-2xl font-bold mb-4 text-primary">{title}</h3>
      <ul className="flex-1 space-y-2 mb-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <CheckCircle className="text-primary w-5 h-5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center gap-2 bg-primary text-black font-semibold py-2 px-4 rounded-xl hover:bg-green-600 transition"
      >
        ¡Hablemos! <ArrowRight className="w-4 h-4" />
      </a>
    </motion.div>
  );
};

export default ServiceCard;
