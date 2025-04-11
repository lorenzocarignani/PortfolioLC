import { Code2, Github, Linkedin } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="  shadow bg-gris p-4 md:p-8">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center">
        <Code2 className="mb-4 border-2 border-primary rounded-full p-1 h-8 w-8 text-primary" />
        <hr className="border-white border-1 w-1/2 mb-10" />
        {/* Social media and copyright */}
        <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between w-full">
          <ul className="flex items-center space-x-6 text-white dark:text-gray-400 mb-4 md:mb-0">
            <li className="text-sm text-white">Redes sociales:</li>
            {/* Linkedn */}
            <li>
              <a
                href="https://www.linkedin.com/in/lorenzo-carignani-95b9521b7/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary "
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </li>
            {/* Github */}
            <li>
              <a
                href="https://github.com/lorenzocarignani?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                <Github className="w-5 h-5" />
              </a>
            </li>
          </ul>
          <span className="block text-sm text-white ">
            Desarrollado por Lorenzo Carignani
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
