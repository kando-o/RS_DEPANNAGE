import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);
  const textRefs = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.2 } });

    tl.fromTo(
      textRefs.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.2 }
    )
    .fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.8, rotation: -15 },
      { opacity: 1, scale: 1, rotation: 0, duration: 0.8 },
      "-=0.5" // Overlap with the previous animation
    );
  }, []);

  return (
    <div ref={heroRef} className="bg-white text-center py-24 md:py-24 px-4">
      <h1
        ref={(el) => textRefs.current[0] = el}
        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6"
      >
        Enlèvement <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"> d'épaves,</span>
        <br />
        <span className='text-3xl md:text-4xl lg:text-5xl'>Gratuit sur toute la France</span>
      </h1>
      <p
        ref={(el) => textRefs.current[1] = el}
        className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mt-4 md:mt-6"
      >
        Vendre sa voiture avec <span className='font-bold'>AGISSAUTO</span>, c'est facile, rapide & sûr!
      </p>
      <p
        ref={(el) => textRefs.current[2] = el}
        className="text-base md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-8 max-w-3xl mx-auto"
      >
        Autoxp s'engage à prendre en charge tous types de véhicules: normal, étranger, véhicules gagés et/ou accidentés.
      </p>
      <div className="flex flex-col w-[50%] md:w-[50%] lg:w-[30%] mx-auto gap-2">
        <button
          ref={buttonRef}
          className="bg-gray-900 text-white font-semibold py-2 px-5 sm:py-3 sm:px-6 rounded-full text-sm sm:text-base md:text-lg hover:bg-gray-800 transition-colors"
        >
          Get started free →
        </button>
        <button
          className="bg-gray-900 text-white font-semibold py-2 px-5 sm:py-3 sm:px-6 rounded-full text-sm sm:text-base md:text-lg"
          disabled
        >
          0622222018
        </button>
      </div>
    </div>
  );
};

export default Hero;
