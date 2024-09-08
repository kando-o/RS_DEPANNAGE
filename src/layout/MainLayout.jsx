import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import About from '../components/About';
import Hero from '../components/Hero';
import NavBar from '../components/NavBar';
import Contact from '../components/Contact';
import Advantage from '../components/Advantage';
import Gallery from '../components/Gallery';
import Testimonial from '../components/Testimonial';
import ContactForm from '../components/ContactForm';
import AutoLogoSlider from '../components/AutoLogoSlider';
import Footer from '../components/Footer';


gsap.registerPlugin(ScrollTrigger);

const MainLayout = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    sectionRefs.current.forEach((section) => {
      gsap.fromTo(
        section,
        {
          opacity: 0,
          y: 50,  
        },
        {
          opacity: 1,
          y: 0, 
          duration: 1,  
          ease: 'power2.out',  
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',  
            end: 'bottom 10%', 
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <div>
      <NavBar />
      <Hero />
      <div ref={addToRefs}><About /></div>
      <div ref={addToRefs}><Advantage /></div>
      <div ref={addToRefs}><AutoLogoSlider /></div>
      <div ref={addToRefs}><Contact /></div>
      <div ref={addToRefs}><Gallery /></div>
      <div ref={addToRefs}><Testimonial /></div>
      <div ref={addToRefs}><ContactForm /></div>
      <div><Footer /></div>
    </div>
  );
};

export default MainLayout;
