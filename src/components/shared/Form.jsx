import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactForm() {
  return (
    <section id="contact" className="py-12 px-20 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-4xl bg-gradient-to-r from-purple-600 to-orange-400 text-transparent bg-clip-text font-bold mb-2 text-center">Prenez votre rendez-vous maintenant !</h2>
      <p className="text-base md:text-lg text-gray-600 text-center mb-8 md:mb-12">Demande de rappel: Enlèvement des épaves, Enlèvement des voiture</p>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <div className="w-full lg:w-1/3 space-y-6 md:space-y-8">
          <div className="flex items-center">
            <Phone className="text-indigo-600 w-5 h-5 md:w-6 md:h-6 mr-3 md:mr-4 flex-shrink-0" />
            <div>
              <h3 className="text-lg md:text-xl font-medium">Call Us</h3>
              <a href="tel:+213776677887" className="text-sm md:text-base text-gray-600">+33 62 22 22 018</a>
            </div>
          </div>

          <div className="flex items-center">
            <Mail className="text-indigo-600 w-5 h-5 md:w-6 md:h-6 mr-3 md:mr-4 flex-shrink-0" />
            <div>
              <h3 className="text-lg md:text-xl font-medium">Email</h3>
              <a href="mailto:saiadzeyd@gmail.com" className="text-sm md:text-base text-gray-600">support@autoxp.fr</a>
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

        <form name="contact" method="POST" data-netlify="true" className="w-full lg:w-2/3 grid gap-4 md:gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <div>
              <input type="text" name="name" placeholder="Nom et Prenom" className="w-full px-3 py-2 md:px-4 md:py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm md:text-base" required />
            </div>
            <div>
              <input type="email" name="email" placeholder="Email" className="w-full px-3 py-2 md:px-4 md:py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm md:text-base" required />
            </div>
          </div>

          <div>
            <input type="text" name="project" placeholder="Telephone" className="w-full px-3 py-2 md:px-4 md:py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm md:text-base" required />
          </div>

          <div>
            <textarea name="message" placeholder="Message" rows="4" className="w-full px-3 py-2 md:px-4 md:py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm md:text-base" required></textarea>
          </div>

          <button type="submit" className="flex items-center justify-center px-4 py-2 md:px-6 md:py-3 bg-gray-900 text-white font-medium rounded-md hover:bg-black text-sm md:text-base transition duration-300 ease-in-out">
            Send Message
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
}