import './App.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import MainLayout from './layout/MainLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThankYou from './components/ThankYou';
import Loading from './components/shared/Loading/Loading'; 
import NotFound404 from './page/NotFound404';
import { useState, useEffect } from 'react';

function App() {

	const [loading, setLoading] = useState(false);
	const metaImage = "https://RS DEPANNAGE.fr/assets/pic2-B4MtFGv-.jpg";

	if (loading) {
		return <Loading />; 
	}

	return (
		<HelmetProvider>
			<Helmet>
				<title>Enlèvement Gratuit et Rapide d'épaves de véhicules 91 - RS DEPANNAGE en Île-de-France et partout en France</title>
				<meta
					name="description"
					content="Besoin d'un enlèvement d'épave rapide et gratuit dans le 91 ? RS DEPANNAGE intervient 7j/7 en Île-de-France et partout en France. Contactez-nous !" 
				/>
				<meta
					name="keywords"
					content="enlèvement épaves, enlèvement d'épave 91, camping car, enlèvement gratuit, enlèvement épaves gratuit, utilitaire, bateau, récupération véhicule, épaviste agréé, enlèvement épave Paris, vente voiture épave"
				/>
				<meta name="author" content="RS DEPANNAGE" />
				<meta name="robots" content="index, follow" />
				<link rel="canonical" href="https://RSDEPANNAGE.fr" /> {/* A changer */}

				{/*  Balises Open Graph (Facebook, Whatsapp) */}

				<meta property="og:site_name" content="RS DEPANNAGE" />
				<meta property="og:locale" content="fr_FR" />
				<meta property="og:title" content="Enlèvement Gratuit et Rapide d'Épaves 91 - RS DEPANNAGE Service rapide & gratuit en Île-de-France" />
				<meta property="og:description" content="Service d'enlèvement gratuit et rapide des épaves en Île-de-France et partout en France. Contactez RS DEPANNAGE pour un service fiable et professionnel." />
				<meta property="og:image" content={metaImage} />
				<meta property="og:image:alt" content="RS DEPANNAGE - Enlèvement gratuit d'épaves en Île-de-France" />
				<meta property="og:url" content="https://RS DEPANNAGE.fr" />
				<meta property="og:type" content="website" />

				{/* Balises Twitter Cards */}

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="RS DEPANNAGE - Service d'Enlèvement des Épaves Gratuit" />
				<meta name="twitter:description" content="Enlèvement gratuit des épaves en France. Fiabilité, rapidité et professionnalisme avec RS DEPANNAGE." />
				<meta name="twitter:image" content={metaImage} />
				<meta name="twitter:image:alt" content="Service rapide et gratuit pour l'enlèvement des épaves" />

				<meta name="geo.region" content="FR" />
				<meta name="geo.placename" content="Île-de-France" />
				<meta name="geo.position" content="48.8566;2.3522" />				

				<script type="application/ld+json">
					{`
						{
						"@context": "https://schema.org",
						"@type": "AutoService",
						"name": "RS DEPANNAGE - Enlèvement des épaves 100% Gratuit en France",
						"description": "RS DEPANNAGE offre un service d'enlèvement gratuit des épaves partout en France. Vendez votre véhicule avec facilité, rapidité et sécurité.",
						"image": "https://RS DEPANNAGE.fr/assets/pic2-B4MtFGv-.jpg",
						"url": "https://RS DEPANNAGE.fr",
						"telephone": "+33622222018",
						"address": {
							"@type": "PostalAddress",
							"streetAddress": "18 allée des Irlandais, 91300 Massy",
							"addressLocality": "Louvres",
							"addressRegion": "Île-de-France",
							"postalCode": "91300",
							"addressCountry": "France"
						},
						"openingHoursSpecification": [
							{
							"@type": "OpeningHoursSpecification",
							"dayOfWeek": [
								"Monday",
								"Tuesday",
								"Wednesday",
								"Thursday",
								"Friday",
								"Saturday"
							],
							"opens": "08:00",
							"closes": "18:00"
							}
						],
						"geo": {
							"@type": "GeoCoordinates",
							"latitude": "49.0139",
							"longitude": "2.4597"
						},
						"serviceType": "Enlèvement d'épaves, Achat de véhicules d'occasion",
						"areaServed": "France",
						"priceRange": "Gratuit"
						}
					`}
				</script>
			</Helmet>
		
			<Router>
				<Routes>
				<Route path="/" element={<MainLayout />} />
				<Route path="/message-recu" element={<ThankYou />} />
				<Route path="*" element={<NotFound404 />} />
				</Routes>
			</Router>
		</HelmetProvider>
	);
}

export default App;
