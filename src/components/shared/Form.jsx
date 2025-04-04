import React, { useState } from 'react';
import { Phone, Mail, MapPin } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com'

export default function ContactForm() {
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState('');

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [cp, setCp] = useState('');
  const [message, setMessage] = useState('');

  const handleKeyDown = (e) => {
    const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'];
    if (!/[0-9]/.test(e.key) && !allowedKeys.includes(e.key)) {
      e.preventDefault();
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      phone,
      zipcode: cp,
      message
    };

    if (!validateEmail(email)) {
      setEmailError("Veuillez entrer une adresse e-mail valide.");
      return;
    }

    setEmailError('');

    const serviceid = "service_3tcsdbp" // Email service ID
    const templateid = "template_4y2fnf9" // Template ID
    const userid = "ZPRPisl7Oq0Ge9GyR" // Clé publique EmailJS
	
		emailjs
		.send(serviceid, templateid, formData, userid)
		.then((result) => {
			console.log('Email envoyé avec succès:', result.text);
			navigate('/message-recu');
		})
		.catch((error) => {
			console.error('Erreur lors de l\'envoi de l\'email:', error.text);
		});
  };

  return (
    <section id="contact" className="py-12 px-20 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-4xl bg-gradient-to-r from-purple-600 to-orange-400 text-transparent bg-clip-text font-bold mb-2 text-center">
        Prenez votre rendez-vous maintenant !
      </h2>
      <p className="text-base md:text-lg text-gray-600 text-center mb-8 md:mb-12">
        Demande de rappel: Enlèvement des épaves, Enlèvement des voitures
      </p>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <div className="w-full lg:w-1/3 space-y-6 md:space-y-8">
          <div className="flex items-center">
            <Phone className="text-indigo-600 w-5 h-5 md:w-6 md:h-6 mr-3 md:mr-4 flex-shrink-0" />
            <div>
              <h3 className="text-lg md:text-xl font-medium">Call Us</h3>
              <a href="tel:+213776677887" className="text-sm md:text-base text-gray-600">06 22 22 20 18</a>
            </div>
          </div>

          <div className="flex items-center">
            <Mail className="text-indigo-600 w-5 h-5 md:w-6 md:h-6 mr-3 md:mr-4 flex-shrink-0" />
            <div>
              <h3 className="text-lg md:text-xl font-medium">Email</h3>
              <a href="mailto:autoxp@epaveautomobile.fr" className="text-sm md:text-base text-gray-600">autoxp@epaveautomobile.fr</a>
            </div>
          </div>

          <div className="flex items-center">
            <MapPin className="text-indigo-600 w-5 h-5 md:w-6 md:h-6 mr-3 md:mr-4 flex-shrink-0" />
            <div>
              <h3 className="text-lg md:text-xl font-medium">Place</h3>
              <span className="text-sm md:text-base text-gray-600">France - Europe</span>
            </div>
          </div>
        </div>

        <form
          name="contact"
          className="w-full lg:w-2/3 grid gap-4 md:gap-6"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <div>
              <input
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
                placeholder="Nom et Prénom"
                className="w-full px-3 py-2 md:px-4 md:py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm md:text-base"
                required
              />
            </div>
            <div>
              {emailError && <p className="text-red-500 text-sm mb-2">{emailError}</p>}
              <input
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className={`w-full px-3 py-2 md:px-4 md:py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 ${emailError ? 'focus:ring-red-500' : 'focus:ring-indigo-500'} text-sm md:text-base`}
                required
              />
            </div>
          </div>

          <div>
            <input
              type="tel"
              name="project"
              placeholder="Téléphone"
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3 py-2 md:px-4 md:py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm md:text-base"
              required
              pattern="[0-9]{10}"
              minLength="10"
              maxLength="10"
              onKeyDown={handleKeyDown}
            />
          </div>
          <div>
            <input
              type="text"
              name="cp"
              onChange={(e) => setCp(e.target.value)}
              placeholder="Code Postal"
              className="w-full px-3 py-2 md:px-4 md:py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm md:text-base"
              required
              pattern="[0-9]{5}"
              onKeyDown={handleKeyDown}
            />
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Message"
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
              className="w-full px-3 py-2 md:px-4 md:py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm md:text-base"
              required
            ></textarea>
          </div>

          <div data-netlify-recaptcha="true"></div>

          <button
            type="submit"
            className="flex items-center justify-center px-4 py-2 md:px-6 md:py-3 bg-gray-900 text-white font-medium rounded-md hover:bg-black text-sm md:text-base transition duration-300 ease-in-out"
          >
            Envoyer le message
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
}
