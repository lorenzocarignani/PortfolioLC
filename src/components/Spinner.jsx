import React from "react";
import Logo from "../assets/Pictures/Logo-Lc.png";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black relative ">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-primary"></div>
      <img src={Logo} alt="Logo" className="absolute h-24 w-24 rounded-full" />
    </div>
  );
};

export default Spinner;
