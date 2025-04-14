import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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
    <section className="bg-negro text-white px-6 md:px-20 py-20 min-h-screen">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl sm:text-5xl font-semibold text-center mb-10">
          Contacto
        </h2>
        {submitted ? (
          <p className="text-center text-lg text-primary">
            ¡Gracias por tu mensaje! Te responderé pronto.
          </p>
        ) : (
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-gris p-8 rounded-[10px] shadow-md space-y-6"
          >
            <div>
              <label className="block text-sm font-semibold mb-2">Nombre</label>
              <input
                type="text"
                name="name"
                required
                className="w-full p-3 rounded bg-black border border-primary text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-3 rounded bg-black border border-primary text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">
                Mensaje
              </label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full p-3 rounded bg-black border border-primary text-white focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-negro text-white justify-center px-6 py-3 rounded-[8px] font-semibold text-lg flex items-center gap-2 border border-primary transition-colors duration-300 hover:drop-shadow-red disabled:opacity-50"
            >
              {loading ? "Enviando..." : "Enviar mensaje"}
              <Send className="text-primary" />
            </motion.button>
          </form>
        )}
      </motion.div>
    </section>
  );
};

export default Contact;
