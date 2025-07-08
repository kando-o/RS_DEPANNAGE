import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import aboutImage from '../assets/images/about.png';

const About = () => {
		const textRefs = useRef([]);
		const buttonRef = useRef(null);

	
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
        <h2 className='text-3xl bg-gradient-to-r from-zinc-900 to-red-500 text-transparent bg-clip-text md:text-4xl lg:text-4xl font-bold text-center mb-6 about-header'>
          À propos de nous
        </h2>
       <p
					ref={(el) => textRefs.current[1] = el}
					className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mt-4 md:mt-6"
				>
					Dépannage et remorquage 24h/24 dans toute la France avec <span className='font-bold bg-gradient-to-r from-zinc-900 to-red-500 text-transparent bg-clip-text'>RS DEPANNAGE</span>.
				</p>
				<p
					ref={(el) => textRefs.current[2] = el}
					className="text-base text-center md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-8 max-w-3xl mx-auto"
				>
					Nous intervenons rapidement sur tous types de véhicules — épaves, en panne, accidentés, gagés ou non pour un remorquage fiable et un dépannage efficace. 
					<br />
					Et si vous souhaitez vendre votre voiture, nous vous accompagnons aussi dans une procédure simple, rapide et sécurisée.
				</p>
      </div>
    </div>
  );
}

export default About;
