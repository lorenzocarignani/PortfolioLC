// src/components/LazyLottie.jsx
import React, { useEffect, useState, Suspense } from "react";
import devAnimation from "../assets/animations/dev-animation.json";

const LazyPlayer = React.lazy(() =>
  import("@lottiefiles/react-lottie-player").then((mod) => ({
    default: mod.Player,
  }))
);

const LazyLottie = () => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Esperar un poco para no bloquear el thread principal
    const timeout = setTimeout(() => {
      setShouldRender(true);
    }, 300); // Ajustable

    return () => clearTimeout(timeout);
  }, []);

  return shouldRender ? (
    <Suspense
      fallback={<div className="w-full h-full bg-gray-800 animate-pulse" />}
    >
      <LazyPlayer autoplay loop src={devAnimation} className="w-full h-full" />
    </Suspense>
  ) : (
    <div className="w-full h-full bg-gray-800 animate-pulse" />
  );
};

export default LazyLottie;
