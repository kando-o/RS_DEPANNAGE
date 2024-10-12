import './App.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import MainLayout from './layout/MainLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThankYou from './components/ThankYou'; 

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Enlèvement des épaves et enlèvement des véhicules</title>
        <meta 
          name="description" 
          content="Service d'enlèvement des épaves de véhicules en toute simplicité, rapidité et 100% gratuit en niveau Île-de-France." 
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "AutoService",
              "name": "Enlèvement des épaves 100% Gratuit sur toute la France",
              "description": "Une agence professionnelle pour l'enlèvement gratuit de votre épave en France, Vendre sa voiture avec AGISSAUTO, c'est facile, rapide & sûr!",
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
              "openingHours": "Mo-Sa 08:00-18:00"
            }
          `}
        </script>
      </Helmet>
      
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/thank-you" element={<ThankYou />} /> {/* Corrected element prop */}
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
