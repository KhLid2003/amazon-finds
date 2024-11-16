import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const slides = [
  {
    title: "Tech Deals of the Week",
    description: "Up to 40% off on premium electronics",
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&q=80&w=2340",
    buttonText: "Shop Tech Deals"
  },
  {
    title: "Smart Home Essentials",
    description: "Transform your home with the latest smart devices",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=2340",
    buttonText: "Explore Smart Home"
  },
  {
    title: "Premium Audio Sale",
    description: "Incredible sound quality at unbeatable prices",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=2340",
    buttonText: "View Audio Deals"
  }
];

export default function FeaturedSection() {
  return (
    <div className="relative overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        navigation
        className="featured-slider"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[400px] lg:h-[500px]">
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
              </div>
              
              <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col justify-center h-full max-w-lg">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-xl text-gray-200 mb-8">
                    {slide.description}
                  </p>
                  <button className="flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition w-fit">
                    {slide.buttonText}
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}