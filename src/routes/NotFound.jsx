import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const backToHomePageHandler = () => {
    navigate("/home");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1>404</h1>
      <p>Oops! Page not found.</p>
      <p>The page you are looking for doesn't exist or has been moved.</p>
      <button onClick={backToHomePageHandler}>Back to Home</button>
    </div>
  );
};

export default NotFound;
