import React from 'react';
import franceFlag from '../assets/images/france.png'

const Footer = () => {

    const handleClick = () => {
        window.location.href = "mailto:support@autoxp.fr";
    }
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                AGISSAUTO
              </span>
            </h2>
            <p className="text-sm text-gray-400 mb-4">
              AGISSAUTO by AutoXP, Un service d'Enlèvement Épave Gratuit, disponible partout en France, pour vous débarrasser de vos VHU
            </p>
            <p className="text-sm text-gray-400 mb-4">
            Nous offrons des solutions de retrait de voiture rapides, professionnelles et gratuites, vous garantissant une tranquillité d'esprit avec un processus sans tracas et respectueux de l'environnement. Nos services sont disponibles 24/7 pour s'adapter à votre emploi du temps, avec tous les documents nécessaires pris en charge !
            </p>
            <button className="bg-gradient-to-r from-blue-400 to-purple-500 hover:scale-105 text-white font-bold py-2 px-4 rounded transition" onClick={handleClick}>
              Contactez Nous
            </button>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Nos Avantages</h3>
            <ul className="space-y-2">
              {['Vente Rapide', 'Règlement Rapide par Virement Bancaire', 'Accompagnement Professionnel', 'Service à Domicile'].map((item, index) => (
                <li key={index} className="flex items-center">
                  <svg className="h-4 w-4 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Secteurs d'Intervention</h3>
            <ul className="grid grid-cols-1 gap-2 mb-2">
              Notre Intervention n'a pas de limite, on intervient sur toute la France.
            </ul>
            <img src={franceFlag} alt="Flag" width={90}/>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} AutoXP. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;