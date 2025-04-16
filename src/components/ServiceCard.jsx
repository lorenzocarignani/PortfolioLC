import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import useTranslation from "../custom/useTraslation/useTraslation";
import { FaWhatsapp } from "react-icons/fa";

const ServiceCard = ({ title, items, message }) => {
  const t = useTranslation();

  const whatsappMessage = encodeURIComponent(message);
  const whatsappLink = `https://api.whatsapp.com/send?phone=543407413101&text=${whatsappMessage}`;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gris text-white rounded-2xl p-6 shadow-lg flex flex-col justify-between min-h-[320px]"
    >
      <h3 className="text-2xl font-bold mb-4 text-primary">{title}</h3>
      <ul className="flex-1 space-y-2 mb-4 ">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <CheckCircle className="text-primary w-5 h-5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-2 w-1/2 bg-negro text-white justify-center font-semibold py-2 px-4 rounded-xl hover:drop-shadow-red transition"
        >
          {t("services.button")} <FaWhatsapp className="w-6 h-6 text-primary" />
        </a>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
