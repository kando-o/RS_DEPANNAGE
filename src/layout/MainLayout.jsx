import React from 'react'
import About from '../components/About';
import Hero from '../components/Hero';
import NavBar from '../components/NavBar';
import Contact from '../components/Contact';
import Advantage from '../components/Advantage';
import Gallery from '../components/Gallery';
import Testimonial from '../components/Testimonial';
import ContactForm from '../components/ContactForm';
import AutoLogoSlider from '../components/AutoLogoSlider';

const MainLayout = () => {
  return (
    <div>
        <NavBar />
        <Hero />
        <About />
        <Advantage />
        <AutoLogoSlider />
        <Contact />
        <Gallery />
        <Testimonial />
        <ContactForm />
    </div>
  )
}

export default MainLayout