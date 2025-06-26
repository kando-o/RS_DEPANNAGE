import React, { useEffect, useRef } from 'react';
import { SiPagespeedinsights } from "react-icons/si";
import { FaCreditCard, FaFileCircleCheck } from "react-icons/fa6";
import { SiHomeadvisor } from "react-icons/si";
import FeatureCard from './shared/FeatureCard';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Advantage = () => {
  const featureRefs = useRef([]);
  const advantage = useRef(null);

  useEffect(() => {
    const animateFeatures = gsap.fromTo(
      featureRefs.current,
      { scale: 0.5, opacity: 0, rotate: 20 },
      {
        scale: 1,
        opacity: 1,
        rotate: 0,
        duration: 1,
        ease: "elastic.out(1, 0.75)",
        stagger: 0.2, 
        scrollTrigger: {
          trigger: featureRefs.current[0], 
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      animateFeatures.kill(); 
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !featureRefs.current.includes(el)) {
      featureRefs.current.push(el);
    }
  };

  const features = [
    {
      icon: SiPagespeedinsights,
      title: "Remorquage & Dépannage",
      description:
        " Une panne ou un accident ? Nos équipes interviennent 24h/24 et 7j/7 partout en France pour le remorquage ou le dépannage de votre véhicule. Un service rapide, fiable et au meilleur prix, où que vous soyez.",
    },
		{
      icon: SiHomeadvisor,
      title: "SERVICE À DOMICILE",
      description:
        "Nous intervenons partout en France et nous nous déplaçons directement à votre domicile pour un enlèvement d’épave rapide, efficace et sans contrainte. Un service sur mesure, pensé pour votre tranquillité.",
    },
		{
			icon: FaFileCircleCheck,
			title: "Vente Simplifiée avec Accompagnement Professionnel",
			description:
				"En moins de 5 minutes, obtenez gratuitement votre estimation, Vendez votre voiture en toute sérénité. Un professionnel vous assiste et prend en charge toutes les démarches administratives.",
		},
    {
      icon: FaCreditCard,
      title: " en espèces ou virement bancaire instantanée",
      description:
        "Vous recevrez votre paiement par virement bancaire sous 48 à 72 heures ouvrées, dès que vous aurez accepté l'offre finale proposée par le professionnel après votre rendez-vous.",
    },
    
  ];

  return (
    <div ref={advantage} className='bg-white py-24 mt-24 md:mt-2 md:py-12 flex flex-col'>
      <div className='py-1 self-center px-4 rounded-full border border-pink-600 text-lg font-extralight text-pink-600'>
        Nos Avantages
      </div>
      <h1 className='text-2xl mt-10  md:text-3xl lg:text-3xl font-bold text-center mb-14'>
        Pourquoi RD  <span className="bg-gradient-to-r from-zinc-900 to-red-500 text-transparent bg-clip-text">DEPANNAGE ?</span>
      </h1>
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div key={index} ref={addToRefs}>
            <FeatureCard {...feature} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advantage;
