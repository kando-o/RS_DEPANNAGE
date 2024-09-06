import React from 'react';
import FeatureCard from './shared/FeatureCard';
import aboutImage from '../assets/images/about.png';
import recImage from '../assets/images/rec.png';
import { SiPagespeedinsights } from "react-icons/si";
import { FaCreditCard } from "react-icons/fa6";
import { FaFileCircleCheck } from "react-icons/fa6";
import { SiHomeadvisor } from "react-icons/si";

const About = () => {

  const features = [
    {
      icon: SiPagespeedinsights,
      title: "Vente Rapide",
      description: "En moins de 5 minutes, obtenez gratuitement votre estimation, planifiez un rendez-vous avec un professionnel du réseau AutoXP, et vendez votre voiture en moins d'une heure."
    },
    {
      icon: FaCreditCard,
      title: "Règlement Rapide par Virement Bancaire",
      description: "Vous recevrez votre paiement par virement bancaire sous 48 à 72 heures ouvrées, dès que vous aurez accepté l'offre finale proposée par le professionnel après votre rendez-vous."
    },
    {
      icon: FaFileCircleCheck,
      title: "Vente Simplifiée avec Accompagnement Professionnel",
      description: "Vendez votre voiture en toute sérénité. Un professionnel vous assiste et prend en charge toutes les démarches administratives, vous faisant profiter de son expertise."
    },
    {
      icon: SiHomeadvisor,
      title: "SERVICE À DOMICILE",
      description: "Nous nous déplaçons dans toute l’Île-de-France jusqu'à votre domicile pour retirer des épaves.",
    }
  ];

  return (
    <div className='w-full h-auto relative'>
      <img 
        src={aboutImage} 
        alt="about us" 
        className='w-full h-auto object-cover' 
      />
      <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center p-6'>
        <h1 className='text-4xl bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text md:text-5xl lg:text-6xl font-bold text-center mb-6'>
          À propos de nous
        </h1>
        <p className='text-base md:text-lg lg:text-xl text-center max-w-3xl'>
          Vous cherchez une agence professionnelle pour l’enlèvement gratuit de votre épave en Île-de-France ? <br />
          Notre équipe intervient sans frais sur le lieu de stationnement de votre véhicule pour l’acheminer vers la casse.
        </p>
        <div className='relative'>
          <h1 className='text-2xl mt-10 bg-gradient-to-r from-blue-300 to-indigo-600 text-transparent bg-clip-text md:text-3xl lg:text-3xl font-bold text-center mb-6'>Pourquoi AutoXP ?</h1>
          <div className="container px-4 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-8">
                {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
                ))}
            </div>
            <div className='absolute top-7 right-[31%]'>
                <img src={recImage} alt="rectangle" className='w-[62%]' />
            </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default About;
