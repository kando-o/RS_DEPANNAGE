import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

const carLogos = [
  { name: 'Volkswagen', url: 'src/assets/images/volkswagen.png' },
  { name: 'BMW', url: 'src/assets/images/bmw.png' },
  { name: 'Mercedes-Benz', url: 'src/assets/images/mercedes.png' },
  { name: 'Audi', url: 'src/assets/images/audi.png' },
  { name: 'Renault', url: 'src/assets/images/renault.png' },
  { name: 'Peugeot', url: 'src/assets/images/peugeot.png' },
  { name: 'Citroën', url: 'src/assets/images/citro.png' },
  { name: 'Fiat', url: 'src/assets/images/fiat.png' },
  { name: 'Volvo', url: 'src/assets/images/volvo.png' },
];

const AutoLogoSlider = () => {
  return (
    <div className="py-8 sm:py-12 md:py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={2}
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