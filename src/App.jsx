import './App.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import MainLayout from './layout/MainLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThankYou from './components/ThankYou';
import Loading from './components/shared/Loading/Loading'; 
import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate loading delay for demonstration purposes
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Adjust delay as needed
    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  if (loading) {
    return <Loading />; // Render the Loading component while loading
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>Enlèvement des épaves et véhicules - Service Rapide et Gratuit en France</title>
        <meta
          name="description"
          content="Profitez d'un service gratuit et rapide pour l'enlèvement des épaves de voitures en Île-de-France et dans toute la France. AGISSAUTO, votre partenaire de confiance."
        />
        <meta
          name="keywords"
          content="enlèvement épaves, voiture épave, enlèvement gratuit, île-de-france, enlèvement épave Paris, vente voiture épave"
        />
        <meta name="author" content="AGISSAUTO" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourwebsite.com" />
        <meta name="geo.region" content="FR" />
        <meta name="geo.placename" content="Île-de-France" />
        <meta name="geo.position" content="48.8566;2.3522" />
        <meta name="ICBM" content="48.8566, 2.3522" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "AutoService",
              "name": "AGISSAUTO - Enlèvement des épaves 100% Gratuit en France",
              "description": "AGISSAUTO offre un service d'enlèvement gratuit des épaves partout en France. Vendez votre véhicule avec facilité, rapidité et sécurité.",
              "image": "https://yourwebsite.com/images/car-removal.jpg",
              "url": "https://yourwebsite.com",
              "telephone": "+33622222018",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "04 rue de la briqueterie, 95380 Louvres",
                "addressLocality": "Louvres",
                "addressRegion": "Île-de-France",
                "postalCode": "95380",
                "addressCountry": "France"
              },
              "openingHours": "Mo-Sa 08:00-18:00",
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
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
