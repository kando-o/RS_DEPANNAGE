import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { NavLink } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";


export default function NotFound404() {

	const messageRef = useRef(null);
	const navbarRef = useRef(null);

	useEffect(() => {
		// GSAP Animations
		gsap.fromTo(
		messageRef.current,
		{ opacity: 0, y: 50 },
		{ opacity: 1, y: 0, duration: 1.4, ease: "power3.out", delay: 0.5 }
		);
	}, []);

  return (
		<>
		<HelmetProvider>
			<Helmet>
							<title>Page non trouvée | EPAVE AUTOMOBILE</title>
							<meta name="robots" content="noindex, follow" />
							<meta name="description" content="La page que vous recherchez n'existe pas ou a été déplacée. Retournez à l'accueil pour continuer votre navigation." />

							{/* Open Graph (Facebook, WhatsApp) */}
	
							<meta property="og:title" content="Page non trouvée | EPAVEAUTOMOBILE" />
							<meta property="og:description" content="Oops! La page que vous cherchez n'existe pas. Retournez à l'accueil." />
							<meta property="og:image" content="https://epaveautomobile.fr/assets/404.PNG" />
							<meta property="og:type" content="website" />
							<meta property="og:url" content="https://epaveautomobile.fr/404" />

							{/* Twitter Cards */}
	
							<meta name="twitter:card" content="summary_large_image" />
							<meta name="twitter:title" content="Page non trouvée | EPAVEAUTOMOBILE" />
							<meta name="twitter:description" content="Oops! La page que vous cherchez n'existe pas. Retournez à l'accueil." />
							<meta name="twitter:image" content="https://epaveautomobile.fr/assets/404.PNG" />
			</Helmet>
		</HelmetProvider>

			<nav ref={navbarRef} className="bg-white bg-opacity-20 backdrop-blur-lg dark:bg-white/10 fixed w-full z-20 top-0 start-0">
				<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
					<NavLink to="/" className="flex items-center space-x-3 text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text rtl:space-x-reverse transform hover:scale-105 transition duration-300">
						EPAVE AUTOMOBILE
					</NavLink>
				</div>
			</nav>

			<div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-pink-50 py-20 px-4 sm:px-8 lg:px-16">
				<div ref={messageRef} className="max-w-3xl text-center">
					<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-400 mb-6 lg:mb-8">
						Page 404!
					</h1>
					<p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-6">
						La page que vous recherchez est introuvable ou n'existe plus. Retournez à l'accueil pour poursuivre votre navigation ! 
					</p>
					<NavLink
						to="/"
						className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
					>
						Retour à l'accueil
					</NavLink>
				</div>
			</div>
		</>
	)
}
