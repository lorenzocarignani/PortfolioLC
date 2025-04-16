import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import useTranslation from "../custom/useTraslation/useTraslation";

const socialLinks = [
  {
    icon: <Github className="w-7 h-7" />,
    url: "https://github.com/lorenzocarignani",
    label: "GitHub",
  },
  {
    icon: <Linkedin className="w-7 h-7" />,
    url: "https://www.linkedin.com/in/lorenzo-carignani-95b9521b7/",
    label: "LinkedIn",
  },
  {
    icon: <Mail className="w-7 h-7" />,
    url: "mailto:lorenzocarignani@outlook.com",
    label: "Email",
  },
];

const SocialIcons = () => {
  const t = useTranslation();
  return (
    <div className="flex items-center gap-4 ">
      <p htmlFor="title">{t("social.title")}</p>
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="text-mute hover:text-primary transition hover:drop-shadow-red hover:scale-105"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
