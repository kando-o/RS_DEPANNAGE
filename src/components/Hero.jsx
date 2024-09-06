import React from 'react';

const Hero = () => {
  return (
    <div className="bg-white text-center py-16 md:py-24 px-4">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6">
        Enlèvement <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"> des épaves,</span>
        <br />
        <span className='text-3xl md:text-4xl lg:text-5xl'>Gratuit sur toute l'Île-de-France</span>
      </h1>
      <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mt-4 md:mt-6">
        Vendre sa voiture avec <span className='font-bold'>AutoXP</span>, c'est facile, rapide & sûr!
      </p>
      <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-8 max-w-3xl mx-auto">
        Un clic, un appel, et votre tranquillité assurée
      </p>
      <button className="bg-black text-white font-semibold py-2 px-5 md:py-3 md:px-6 rounded-full text-sm md:text-lg hover:bg-gray-800 transition-colors">
        Get started free →
      </button>
    </div>
  );
};

export default Hero;
