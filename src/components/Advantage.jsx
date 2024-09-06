import React from 'react'
import { SiPagespeedinsights } from "react-icons/si";
import { FaCreditCard, FaFileCircleCheck } from "react-icons/fa6";
import { SiHomeadvisor } from "react-icons/si";
import FeatureCard from './shared/FeatureCard';


const Advantage = () => {

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
          description: "Nous nous déplaçons dans toute l'Île-de-France jusqu'à votre domicile pour retirer des épaves.",
        }
      ];

  return (
    <div className='bg-white py-24 mt-24 md:mt-2 md:py-12 flex flex-col'>
    <div className='py-1 self-center px-4 rounded-full border border-pink-600 text-sm font-extralight text-pink-600'>
        Nos Avantages
    </div>
    <h1 className='text-2xl mt-10 bg-gradient-to-r from-blue-300 to-indigo-600 text-transparent bg-clip-text md:text-3xl lg:text-3xl font-bold text-center mb-14'>
      Pourquoi AutoXP ?
    </h1>
    <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 gap-8">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  </div>
  )
}

export default Advantage