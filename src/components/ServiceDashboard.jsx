import ServiceCard from "./ServiceCard";
import { Rocket } from "lucide-react";

const ServiceDashboard = () => {
  return (
    <section className="mt-28 px-6 py-16 bg-negro text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-6xl font-bold mb-4 text-white">
          ¿Necesitás una página web?
        </h1>
        <p className="text-lg mb-10 text-mute">
          Impulsá tu presencia online con soluciones profesionales a medida.
        </p>
        <div className="flex justify-center items-center gap-4 mb-12">
          <Rocket className=" text-primary w-6 h-6" />
          <p className="text-sm">
            Transformá tu idea en una web de alto impacto
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <ServiceCard
            title="Landing Page Profesional"
            items={[
              "Diseño moderno y responsive",
              "Formulario de contacto funcional",
              "Optimización SEO básica",
              "Carga rápida y buen rendimiento",
            ]}
            link="https://wa.me/tu-numero"
          />

          <ServiceCard
            title="Sitio Web Complejo"
            items={[
              "Múltiples secciones (Inicio, Sobre mí, Servicios, Contacto)",
              "Interactividad avanzada con React",
              "Integración de base de datos o CMS",
              "Optimización SEO avanzada",
              "Adaptable para e-commerce o blog",
            ]}
            link="https://wa.me/tu-numero"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceDashboard;
