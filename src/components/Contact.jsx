import React from 'react';
import SwipeableButton from './shared/SwipeableButton';
import { FaPhoneAlt, FaCheck } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const handleSuccess = () => {
    console.log("Button unlocked!");
  };

  return (
    <div id='contact' className='flex flex-col items-center gap-6 py-14 bg-slate-100'>
      <div className='py-1 px-4 rounded-full border border-pink-600 text-sm font-extralight text-pink-600'>
        Contact
      </div>
      <h1 className='text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-orange-400 text-transparent bg-clip-text mb-2 text-center'>
        Qu'est-ce que vous attendez ?
      </h1>
      <p className='text-gray-600 text-sm md:text-lg'>Demandez l’enlèvement de votre épave 7j/7 et 13h/24</p>
      <div className='flex flex-col justify-center items-center gap-6 w-full max-w-md'>
        <h2 className='text-lg sm:text-xl font-semibold text-gray-600 text-center'>
          Appelez Nous!
        </h2>
        <SwipeableButton
          onSuccess={handleSuccess}
          text="0033622222018"
          startIcon={FaPhoneAlt}
          endIcon={FaCheck}
        />
        <h2 className='text-lg sm:text-xl font-semibold text-gray-600 text-center'>
          Contactez Nous!
        </h2>
        <SwipeableButton
          onSuccess={handleSuccess}
          text="Glisser pour contacter"
          startIcon={MdEmail}
          endIcon={FaCheck}
        />
      </div>
    </div>
  );
};

export default Contact;