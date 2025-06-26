import React from 'react';
import franceFlag from '../assets/images/france.png'

const Footer = () => {

	const handleClick = () => {
			window.location.href = "mailto:RSDEPANNAGE@XXX.fr";
	}

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-red-500 text-transparent bg-clip-text">
                RS DEPANNAGE
              </span>
            </h2>
            <p className="text-sm text-gray-400 mb-4">
              RS DEPANNAGE, Un service d'Enlèvement Épave, disponible partout en France
            </p>
            <p className="text-sm text-gray-400 mb-4">
            Nous offrons des solutions de retrait de voiture <strong>rapides, professionnelles et fiables</strong> , pour vous débarrasser de vos VHU (Véhicules Hors d’Usage) en toute sérénité. Nos services sont disponibles <strong>24/24 & 7/7</strong>  pour s'adapter à votre emploi du temps, avec tous les documents nécessaires pris en charge !
            </p>
            <button className="bg-gradient-to-r from-blue-400 to-red-500 hover:scale-105 text-white font-bold py-2 px-4 rounded transition" onClick={handleClick}>
              Contactez Nous
            </button>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Nos Avantages</h3>
            <ul className="space-y-2">
              {['Dépannage & Remorquage','Service à Domicile', 'Vente Rapide', 'Règlement Rapide par Virement Bancaire', 'Accompagnement Professionnel'].map((item, index) => (
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
            <img 
							src={franceFlag} 
							alt="Flag" 
							width={90}
							loading="lazy"
						/>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} RS DEPANNAGE. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;