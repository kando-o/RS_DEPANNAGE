import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaCheckCircle } from "react-icons/fa";

export default function ThankYou() {
  const messageRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    // GSAP Animations
    gsap.fromTo(
      iconRef.current,
      { opacity: 0, scale: 0.5, rotate: -180 },
      { opacity: 1, scale: 1.5, rotate: 0, duration: 1.2, ease: "elastic.out(1, 0.75)" }
    );
    gsap.fromTo(
      messageRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.4, ease: "power3.out", delay: 0.5 }
    );
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-pink-50 py-20 px-4 sm:px-8 lg:px-16">
      {/* Animated Icon */}
      <div
        ref={iconRef}
        className="mb-8 lg:mb-12 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <FaCheckCircle className="text-green-500 text-6xl sm:text-7xl lg:text-6xl" />
      </div>

      {/* Animated Thank You Message */}
      <div ref={messageRef} className="max-w-3xl text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-400 mb-6 lg:mb-8">
          Merci pour votre message!
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-6">
          Nous avons bien reçu votre soumission et nous vous recontacterons sous peu.
        </p>
        <p className="text-base sm:text-lg lg:text-xl text-gray-500">
          En attendant, n'hésitez pas à parcourir notre site web ou à nous contacter de nouveau si vous avez d'autres questions.
        </p>
      </div>
    </div>
  );
}
