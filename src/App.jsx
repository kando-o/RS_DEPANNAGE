import './App.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import MainLayout from './layout/MainLayout';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Enlèvement des épaves et enlèvement des véhicules</title>
        <meta name="description" content="Service d'enlèvement des épaves de véhicules en toute simplicité, rapidité et 100% gratuit en niveau Île-de-France." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "AutoService",
              "name": "Enlèvement des épaves 100% Gratuit sur toute la france ",
              "description": " une agence professionnelle pour l'enlèvement gratuit de votre épave en france , Vendre sa voiture avec AutoXP, c'est facile, rapide & sûr!",
              "image": "https://yourwebsite.com/images/car-removal.jpg",
              "url": "https://yourwebsite.com",
              "telephone": "+33622222018",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "04 rue de la briqueterie, 95380 louvres",
                "addressLocality": "France",
                "addressRegion": "France",
                "postalCode": "95380"
              },
              "openingHours": "Mo-Sa 08:00-18:00",
            }
          `}
        </script>
      </Helmet>
      <MainLayout />
    </HelmetProvider>
  );
}

export default App;
