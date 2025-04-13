import React from "react";
import SocialIcons from "./SocialIcons";
import Logo from "../assets/Pictures/Logo.png";

const Footer = () => {
  return (
    <footer className="  shadow bg-gris p-4 md:p-8">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center">
        <img
          src={Logo}
          className="w-8 h-8 p-1 border-2 rounded-full border-primary mb-3"
        />
        <hr className="border-mute border-1 w-1/2 mb-10" />
        {/* Social media and copyright */}
        <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between w-full">
          {/* Redes sociales en desktop */}
          <SocialIcons />
          <span className="block text-sm md:mt-4 text-mute">
            Desarrollado por Lorenzo Carignani
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
