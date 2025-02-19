import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import volkswagen from "../assets/images/volkswagen.png"
import bMW from "../assets/images/bmw.png"
import mercedesBenz from "../assets/images/mercedes.png"
import audi from "../assets/images/audi.png"
import renault from "../assets/images/renault.png"
import peugeot from "../assets/images/peugeot.png"
import citro from "../assets/images/citro.png"
import fiat from "../assets/images/fiat.png"
import volvo from "../assets/images/volvo.png"

const carLogos = [
  { name: 'Volkswagen', url: volkswagen  },
  { name: 'BMW', url: bMW },
  { name: 'Mercedes-Benz', url: mercedesBenz },
  { name: 'Audi', url: audi },
  { name: 'Renault', url: renault },
  { name: 'Peugeot', url: peugeot },
  { name: 'Citroën', url: citro },
  { name: 'Fiat', url: fiat },
  { name: 'Volvo', url: volvo },
];

const AutoLogoSlider = () => {
  return (
    <div className="py-8 sm:py-12 md:py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={10}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            480: {
              slidesPerView: 3,
              spaceBetween: 2,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 50,
            },
          }}
          className="pb-10 sm:pb-12"
        >
          {carLogos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center h-16 sm:h-20 md:h-24 lg:h-28 ">
                <img 
                  src={logo.url} 
                  alt={`${logo.name} logo`} 
                  className="max-h-[60%] max-w-[60%] object-contain"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default AutoLogoSlider;