import React, { useState } from 'react';
import { Phone, Mail, MapPin } from "lucide-react";
import { useNavigate } from 'react-router-dom';

export default function ContactForm() {
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState('');
	const [status, setStatus] = useState(null);

 	const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    postCode: '',
    message: ''
  });

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

	const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(form.email)) {
      setEmailError('Adresse e-mail invalide.');
      return;
    }

    setEmailError('');
		setStatus('Envoi en cours…');

		try {
      const res = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('Message envoyé ! 😊');
        navigate('/message-recu');
      } else {
        setStatus('Échec de l’envoi. Réessaie plus tard.');
      }
    } catch (err) {
      console.error('Erreur formulaire :', err);
      setStatus('Erreur réseau. Réessaie plus tard.');
    }
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
              <h3 className="text-lg md:text-xl font-medium">Contactez nous</h3>
              <a href="tel:+336 51 60 58 83" className="text-sm md:text-base text-gray-600">06 51 60 58 83</a>
            </div>
          </div>

          <div className="flex items-center">
            <Mail className="text-indigo-600 w-5 h-5 md:w-6 md:h-6 mr-3 md:mr-4 flex-shrink-0" />
            <div>
              <h3 className="text-lg md:text-xl font-medium">Email</h3>
              <a href="mailto:contact@rsdepannage.com" className="text-sm md:text-base text-gray-600">contact@rsdepannage.com</a>
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
								value={form.name}
                onChange={handleChange}
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
								value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className={`w-full px-3 py-2 md:px-4 md:py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 ${emailError ? 'focus:ring-red-500' : 'focus:ring-indigo-500'} text-sm md:text-base`}
                required
              />
            </div>
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Téléphone"
							value={form.phone}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              className="w-full px-3 py-2 md:px-4 md:py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm md:text-base"
              required
              pattern="[0-9]{10}"
              minLength="10"
              maxLength="10"
            />
          </div>
          <div>
            <input
              type="text"
              name="postCode"
							value={form.postCode}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              placeholder="Code Postal"
              className="w-full px-3 py-2 md:px-4 md:py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm md:text-base"
              required
              pattern="[0-9]{5}"
            />
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Message"
							value={form.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-3 py-2 md:px-4 md:py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm md:text-base"
              required
            ></textarea>
          </div>

          <div data-netlify-recaptcha="true"></div>

          <button
            type="submit"
            className="flex items-center justify-center px-4 py-2 md:px-6 md:py-3 bg-gray-900 text-white font-medium rounded-md text-sm md:text-base transition duration-300 ease-in-out hover:bg-red-600"
          >
            Envoyer le message
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
					{status && <p className="mt-2 text-center">{status}</p>}
        </form>
      </div>
    </section>
  );
}
