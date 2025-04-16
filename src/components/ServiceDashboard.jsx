import ServiceCard from "./ServiceCard";
import { Rocket } from "lucide-react";
import useTranslation from "../custom/useTraslation/useTraslation";
const ServiceDashboard = () => {
  const t = useTranslation();
  return (
    <section className="mt-28 px-6 py-16 bg-negro text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-6xl font-bold mb-4 text-white">
          {t("services.title")}
        </h1>
        <p className="text-lg mb-10 text-mute">{t("services.subtitle")}</p>
        <div className="flex justify-center items-center gap-4 mb-12">
          <Rocket className=" text-primary w-6 h-6" />
          <p className="text-sm">{t("services.subtitle2")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <ServiceCard
            title={t("services.landing.title")}
            items={[
              t("services.landing.items1"),
              t("services.landing.items2"),
              t("services.landing.items3"),
              t("services.landing.items4"),
            ]}
            message={t("services.message")}
          />

          <ServiceCard
            title={t("services.complex.title")}
            items={[
              t("services.complex.items1"),
              t("services.complex.items2"),
              t("services.complex.items3"),
              t("services.complex.items4"),
              t("services.complex.items5"),
            ]}
            message={t("services.message2")}
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceDashboard;
