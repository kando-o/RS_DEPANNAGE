import React, { useEffect } from 'react';
import gsap from 'gsap';
import aboutImage from '../assets/images/about.png';

const About = () => {
  useEffect(() => {
    gsap.fromTo(
      '.about-image',
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );
    gsap.fromTo(
      '.about-header',
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.5 }
    );
    gsap.fromTo(
      '.about-description',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 1 }
    );
  }, []);

  return (
    <div id='about' className='relative w-full mb-64 md:mb-10'>
      <div className='w-full h-auto invisible md:visible lg:visible'>
        <img 
          src={aboutImage} 
          alt="about us" 
          className='w-full h-full object-cover about-image'
		  		loading="lazy"
        />
      </div>
      <div className='absolute inset-0 flex flex-col justify-start items-center p-6'>
        <div className='py-1 px-4 rounded-full border border-pink-600 text-lg font-extralight text-pink-600 mb-6'>
          Qui sommes nous ?
        </div>
        <h1 className='text-3xl bg-gradient-to-r from-zinc-900 to-red-500 text-transparent bg-clip-text md:text-4xl lg:text-4xl font-bold text-center mb-6 about-header'>
          À propos de nous
        </h1>
        <p className='text-base md:text-lg lg:text-lg text-center max-w-3xl about-description'>
        Vous avez un véhicule trop vieux, hors d’usage ou immobilisé ? <br />Confiez-le à notre service de <span className='font-bold bg-gradient-to-r from-zinc-900 to-red-500 text-transparent bg-clip-text'>Remorquage & Dépannage dans toute la France</span>. Nous intervenons rapidement pour l’enlèvement de tous types de VHU (Véhicules Hors d’Usage) : <strong>voitures, motos, scooters, jet-skis, camping-cars, caravanes, bateaux, utilitaires — qu’ils roulent ou non, accidentés ou non.</strong> 
        </p>
      </div>
    </div>
  );
}

export default About;
