import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import testImage from '../assets/images/pic1.jpeg';

import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: "Ould Menouer Ilies",
    client: "Mobile Development Lead",
    img: testImage,
    stars: 4,
    description:
      "I had the pleasure of studying alongside Zeyd and collaborating with him in our scientific club, and I can confidently say that he is an exceptional software engineer. Zeyd excels in collaboration and communication, making him a valuable team member and leader in any project",
  },
  {
    name: "Ould Menouer Ilies",
    client: "Mobile Development Lead",
    img: testImage,
    stars: 4,
    description:
      "I had the pleasure of studying alongside Zeyd and collaborating with him in our scientific club, and I can confidently say that he is an exceptional software engineer. Zeyd excels in collaboration and communication, making him a valuable team member and leader in any project",
  },
  {
    name: "Ould Menouer Ilies",
    client: "Mobile Development Lead",
    img: testImage,
    stars: 4,
    description:
      "I had the pleasure of studying alongside Zeyd and collaborating with him in our scientific club, and I can confidently say that he is an exceptional software engineer. Zeyd excels in collaboration and communication, making him a valuable team member and leader in any project",
  },
  {
    name: "Ould Menouer Ilies",
    client: "Mobile Development Lead",
    img: testImage,
    stars: 4,
    description:
      "I had the pleasure of studying alongside Zeyd and collaborating with him in our scientific club, and I can confidently say that he is an exceptional software engineer. Zeyd excels in collaboration and communication, making him a valuable team member and leader in any project",
  },
];

const Testimonial = () => {
  return (
    <section className="px-8 py-10 rounded-lg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text md:text-5xl lg:text-6xl font-bold text-center mb-6">
          Ce que nos clients disent de nous !
        </h2>
        <p className="text-gray-600 text-center text-sm md:text-lg mb-8">
          Ce que pensent notre chers clientel de AutoXP !
        </p>

        <Swiper
          modules={[Pagination]}
          spaceBetween={24}
          grabCursor={true}
          // pagination={{ clickable: true, dynamicBullets: false }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className="swiper-container"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-lg border border-slate-200 flex flex-col">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full mr-4 border-2 border-gray-300"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      {testimonial.name}
                    </h3>
                    <span className="text-sm text-gray-500">
                      {testimonial.client}
                    </span>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <i
                      key={i}
                      className="uil uil-star text-yellow-500 text-xl"
                    ></i>
                  ))}
                </div>
                <p className="text-gray-700 text-center">
                  {testimonial.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
