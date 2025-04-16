import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";

import useTranslation from "../custom/useTraslation/useTraslation";

const Contact = () => {
  const formRef = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const t = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setSubmitted(true);
        },
        (error) => {
          setLoading(false);
          alert("Hubo un error al enviar el mensaje. Intenta más tarde.");
          console.error(error);
        }
      );
  };

  return (
    <section className="bg-negro text-white items-center px-6 md:px-20 py-20 min-h-screen">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl sm:text-5xl font-semibold text-center mb-10">
          {t("contact.title")}
        </h2>
        {submitted ? (
          <p className="text-center text-lg text-primary">
            {t("contact.greetings")}
          </p>
        ) : (
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="p-8 rounded-[10px] shadow-md space-y-6 border border-mute"
          >
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-semibold mb-2"
              >
                {t("contact.name")}
              </label>
              <input
                type="text"
                name="name"
                id="username"
                autoComplete="on"
                required
                className="w-full p-3 rounded bg-black border border-mute text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label
                htmlFor="email-user"
                className="block text-sm font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email-user"
                autoComplete="on"
                required
                className="w-full p-3 rounded bg-black border border-mute text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label
                htmlFor="user-message"
                className="block text-sm font-semibold mb-2"
              >
                {t("contact.message")}
              </label>
              <textarea
                name="message"
                rows="5"
                id="user-message"
                required
                className="w-full p-3 rounded bg-black border border-mute text-white focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-1/2 bg-negro text-white justify-center px-6 py-3 rounded-[5px] font-semibold text-lg flex items-center gap-2 border border-primary transition-colors duration-300 hover:drop-shadow-red disabled:opacity-50"
              >
                {loading ? t("contact.sending") : t("contact.send")}
                <Send className="text-primary" />
              </motion.button>
            </div>
          </form>
        )}
      </motion.div>
    </section>
  );
};

export default Contact;
