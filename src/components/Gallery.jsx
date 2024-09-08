import React, { useState, useEffect } from 'react'
import ImageSlider from './shared/ImageSlider';
import image1 from '../assets/images/pic1.jpeg'
import image2 from '../assets/images/pic2.jpg'
import image3 from '../assets/images/pic3.jpg'
import image4 from '../assets/images/pic4.jpg'

const Gallery = () => {

  const images = [
    image1,
    image2,
    image3,
    image4,
  ];
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const sliderHeight = windowWidth >= 768 ? '500px' : '400px';

  return (
    <div className='flex flex-col items-center'>
        <div className='py-1 px-4 rounded-full border border-pink-600 text-sm font-extralight text-pink-600 mt-10 mb-5'>
            Notre Gallerie 
        </div>
        <h1 className='text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text text-center md:mb-12 lg:mb-12'>
        Découverer notre Gallerie ! 
        </h1>
        <ImageSlider 
        images={images}
        autoSlideInterval={5000}
        showArrows={true}
        showDots={true}
        height= {sliderHeight} 
        objectFit="contain"
      />
    </div>
  )
}

export default Gallery