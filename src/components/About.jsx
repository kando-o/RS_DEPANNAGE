import React from 'react';
import aboutImage from '../assets/images/about.png';

const About = () => {
  return (
    <div id='about' className='relative w-full mb-7'>
      <div className='w-full h-auto'>
        <img 
          src={aboutImage} 
          alt="about us" 
          className='w-full h-auto object-cover' 
        />
      </div>
      <div className='absolute inset-0 flex flex-col justify-start items-center p-6'>
        <div className='py-1 px-4 rounded-full border border-pink-600 text-sm font-extralight text-pink-600 mb-6'>
          Qui sommes nous ?
        </div>
        <h1 className='text-4xl bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text md:text-5xl lg:text-6xl font-bold text-center mb-6'>
          À propos de nous
        </h1>
        <p className='text-base md:text-lg lg:text-xl text-center max-w-3xl'>
          Vous cherchez une agence professionnelle pour l'enlèvement gratuit de votre épave en Île-de-France ? <br />
          Notre équipe intervient sans frais sur le lieu de stationnement de votre véhicule pour l'acheminer vers la casse.
        </p>
      </div>
    </div>
  );
}

export default About;