import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import male from '../assets/images/male.png';
import female from '../assets/images/female.png';

import 'swiper/css';
import 'swiper/css/pagination';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Jean Dupont",
    client: "Client, Lyon",
    img: male,
    stars: 4,
    description: "Je ne savais pas à qui m'adresser pour me débarrasser de ma vieille voiture, mais cette entreprise m'a été recommandée. Je suis ravi du service! Je recommande vivement leurs services à tous ceux qui cherchent une solution rapide.",
  },
  {
    name: "Sophie Martin",
    client: "Client, Paris",
    img: female,
    stars: 5,
    description: "Service impeccable du début à la fin. J'avais une vieille voiture qui prenait de la place dans mon garage depuis des années, et en un simple appel, tout était réglé. L'équipe était professionnelle et sympathique.",
  },
  {
    name: "Pierre Lemoine",
    client: "Client, Marseille",
    img: male,
    stars: 4,
    description: "J'étais sceptique au départ, mais tout s'est parfaitement déroulé. Franchement, un excellent service que je recommande les yeux fermés !",
  },
  {
    name: "Lucas Moreau",
    client: "Client, Bordeaux",
    img: male,
    stars: 5,
    description: "Une prestation au top ! Le processus a été simple et rapide, et l'équipe très courtoise.Très satisfait de l'efficacité et du professionnalisme de cette entreprise.",
  },
];

const Testimonial = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    
    const animateCards = gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.3,  
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardsRef.current[0],  // Start when the first card is in view
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      animateCards.kill();
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section className="px-8 py-10 rounded-lg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text md:text-4xl lg:text-4xl font-bold text-center mb-6">
          Ce que nos clients disent de nous !
        </h2>
        <p className="text-gray-600 text-center text-sm md:text-lg  mb-8">
          Ce que pensent notre chers clientel de EPAVE AUTOMOBILE !
        </p>

        <Swiper
          modules={[Pagination]}
          spaceBetween={24}
          grabCursor={true}
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
              <div
                ref={addToRefs}  
                className="bg-white p-6 rounded-lg border border-slate-200 flex flex-col"
              >
                <div className="flex items-center mb-4">
                  <img
										src={testimonial.img}
										alt={testimonial.name}
										className="w-14 h-14 rounded-full mr-4"
										loading="lazy"	
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
