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
    <div id='about' className='relative w-full mb-64'>
      <div className='w-full h-auto invisible md:visible lg:visible'>
        <img 
          src={aboutImage} 
          alt="about us" 
          className='w-full h-full object-cover about-image' 
        />
      </div>
      <div className='absolute inset-0 flex flex-col justify-start items-center p-6'>
        <div className='py-1 px-4 rounded-full border border-pink-600 text-sm font-extralight text-pink-600 mb-6'>
          Qui sommes nous ?
        </div>
        <h1 className='text-4xl bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text md:text-5xl lg:text-6xl font-bold text-center mb-6 about-header'>
          À propos de nous
        </h1>
        <p className='text-base md:text-lg lg:text-xl text-center max-w-3xl about-description'>
        Vous avez un véhicule que vous n’utilisez pas, parce que trop vieux ou hors d’usage, et vous souhaitez vous en débarrasser ? <br />Faites appel au service d’Enlèvement Épave <span className='font-bold'>Gratuit dans toute la France</span>. Nous répondons à tous les appels de la localité , afin de vous débarrasser de vos VHU (Véhicule Hors Usage).Auto, moto, scooter, jet ski camping car caravane,bateaux utilitaire roulant et non roulant, accidenté...
        </p>
      </div>
    </div>
  );
}

export default About;
