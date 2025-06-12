import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaCheckCircle } from "react-icons/fa";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { NavLink } from "react-router-dom";


export default function ThankYou() {
  const messageRef = useRef(null);
  const iconRef = useRef(null);
  const navbarRef = useRef(null);


  useEffect(() => {
    // GSAP Animations
    gsap.fromTo(
      iconRef.current,
      { opacity: 0, scale: 0.5, rotate: -180 },
      { opacity: 1, scale: 1.5, rotate: 0, duration: 1.2, ease: "elastic.out(1, 0.75)" }
    );
    gsap.fromTo(
      messageRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.4, ease: "power3.out", delay: 0.5 }
    );
  }, []);

  return (
	  /* Helmet pour les métadonnées */
    <HelmetProvider>
      <Helmet>
				<title>Merci pour votre message | RS DEPANNAGE - Épaviste agréé</title>
				<meta
					name="description"
					content="Nous avons bien reçu votre message ! Notre équipe vous contactera sous peu. RS DEPANNAGE, expert en enlèvement gratuit d'épaves en Île-de-France et partout en France." 
					/>

					<meta 
					name="keywords" 
					content="confirmation message, contact RS DEPANNAGE, épaviste, enlèvement épaves, épaviste agréé, service auto, dépannage voiture, récupération véhicule" 
				/>

				<meta name="author" content="RS DEPANNAGE" />
				<meta name="robots" content="noindex, follow" />

				<link rel="canonical" href="https://epaveautomobile.fr/message-recu" />

				{/* Open Graph (Facebook, WhatsApp) */}

				<meta property="og:title" content="Merci pour votre message | EPAVEAUTOMOBILE - Épaviste agréé" />
				<meta property="og:description" content="Nous avons bien reçu votre message ! Notre équipe vous répondra rapidement. Besoin d'un enlèvement d'épave ? Contactez-nous !" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://epaveautomobile.fr/message-recu" />
				<meta property="og:image:alt" content="https://epaveautomobile.fr/assets/pic3-D21_GbCp.jpg" />
				<meta property="og:site_name" content="EPAVEAUTOMOBILE" />

				{/* Twitter Cards */}

				<meta name="twitter:card" content="summary_large_image" loading="lazy" />
				<meta name="twitter:title" content="Merci pour votre message | EPAVEAUTOMOBILE - Épaviste agréé" />
				<meta name="twitter:description" content="Nous avons bien reçu votre message et vous répondrons rapidement. Enlèvement d'épaves gratuit en Île-de-France et dans toute la France !" />
				<meta name="twitter:image:alt" content="https://epaveautomobile.fr/assets/pic3-D21_GbCp.jpg" />

				{/* Données structurées (Schema.org) */}

				<script type="application/ld+json">
					{`
						{
							"@context": "https://schema.org",
							"@type": "WebPage",
							"name": "Merci pour votre message | EPAVEAUTOMOBILE - Épaviste agréé",
							"description": "Nous avons bien reçu votre message ! Notre équipe vous contactera sous peu. Besoin d'un enlèvement d'épave ? Contactez-nous.",
							"url": "https://epaveautomobile.fr/message-recu",
							"image": "https://epaveautomobile.fr/assets/pic3-D21_GbCp.jpg",
							"publisher": {
								"@type": "Organization",
								"name": "EPAVEAUTOMOBILE",
								"url": "https://epaveautomobile.fr",
								"logo": {
									"@type": "ImageObject",
									"url": "https://epaveautomobile.fr/assets/logo.png"
								}
							}
						}
					`}
				</script>
    	</Helmet>

      <nav ref={navbarRef} className="bg-white bg-opacity-20 backdrop-blur-lg dark:bg-white/10 fixed w-full z-20 top-0 start-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink to="/" className="flex items-center space-x-3 text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text rtl:space-x-reverse transform hover:scale-105 transition duration-300">
            RS DEPANNAGE
          </NavLink>
        </div>
      </nav>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-pink-50 py-20 px-4 sm:px-8 lg:px-16">
        {/* Animated Icon */}
        <div
          ref={iconRef}
          className="mb-8 lg:mb-12 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <FaCheckCircle className="text-green-500 text-6xl sm:text-7xl lg:text-6xl" />
        </div>

        {/* Animated Thank You Message */}
        <div ref={messageRef} className="max-w-3xl text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-400 mb-6 lg:mb-8">
            Merci pour votre message!
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-6">
            Nous avons bien reçu votre demande et nous vous recontacterons sous peu.
          </p>
          <p className="text-base sm:text-lg lg:text-xl text-gray-500">
            En attendant, n'hésitez pas à parcourir notre site web ou à nous contacter de nouveau si vous avez d'autres questions.
          </p>
					<NavLink
    				to="/"
    				className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white m-5 px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
					>
    				Retour à l'accueil
					</NavLink>
        </div>
      </div>
    </HelmetProvider>
  );
}
