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
	const metaImage = "https://epaveautomobile.fr/assets/pic2-B4MtFGv-.jpg";

	if (loading) {
		return <Loading />; 
	}

	return (
		<HelmetProvider>
			<Helmet>
				<title>Enlèvement Gratuit et Rapide d'épaves de véhicules 95 - EPAVEAUTOMOBILE en Île-de-France et partout en France</title>
				<meta
					name="description"
					content="Besoin d'un enlèvement d'épave rapide et gratuit dans le 95 ? EPAVEAUTOMOBILE intervient 7j/7 en Île-de-France et partout en France. Contactez-nous !" 
				/>
				<meta
					name="keywords"
					content="enlèvement épaves, enlèvement d'épave 95, camping car, enlèvement gratuit, enlèvement épaves gratuit, utilitaire, bateau, récupération véhicule, épaviste agréé, enlèvement épave Paris, vente voiture épave"
				/>
				<meta name="author" content="EPAVEAUTOMOBILE" />
				<meta name="robots" content="index, follow" />
				<link rel="canonical" href="https://epaveautomobile.fr" />

				{/*  Balises Open Graph (Facebook, Whatsapp) */}

				<meta property="og:site_name" content="EPAVEAUTOMOBILE" />
				<meta property="og:locale" content="fr_FR" />
				<meta property="og:title" content="Enlèvement Gratuit et Rapide d'Épaves 95 - EPAVEAUTOMOBILE Service rapide & gratuit en Île-de-France" />
				<meta property="og:description" content="Service d'enlèvement gratuit et rapide des épaves en Île-de-France et partout en France. Contactez EPAVEAUTOMOBILE pour un service fiable et professionnel." />
				<meta property="og:image" content={metaImage} />
				<meta property="og:image:alt" content="EPAVEAUTOMOBILE - Enlèvement gratuit d'épaves en Île-de-France" />
				<meta property="og:url" content="https://epaveautomobile.fr" />
				<meta property="og:type" content="website" />

				{/* Balises Twitter Cards */}

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="EPAVEAUTOMOBILE - Service d'Enlèvement des Épaves Gratuit" />
				<meta name="twitter:description" content="Enlèvement gratuit des épaves en France. Fiabilité, rapidité et professionnalisme avec EPAVEAUTOMOBILE." />
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
						"name": "EPAVEAUTOMOBILE - Enlèvement des épaves 100% Gratuit en France",
						"description": "EPAVEAUTOMOBILE offre un service d'enlèvement gratuit des épaves partout en France. Vendez votre véhicule avec facilité, rapidité et sécurité.",
						"image": "https://epaveautomobile.fr/assets/pic2-B4MtFGv-.jpg",
						"url": "https://epaveautomobile.fr",
						"telephone": "+33622222018",
						"address": {
							"@type": "PostalAddress",
							"streetAddress": "04 rue de la briqueterie, 95380 Louvres",
							"addressLocality": "Louvres",
							"addressRegion": "Île-de-France",
							"postalCode": "95380",
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
