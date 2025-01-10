'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Pagination } from 'swiper/modules';
import Image from 'next/image';

const GalleryCarousel: React.FC = () => {


  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12">Gallery</h2>

        <Swiper
          pagination={{
            dynamicBullets: true,
            clickable: true
          }}
          autoplay={{
            delay: 3000, // Time between slides in milliseconds (3 seconds)
            disableOnInteraction: false, // Continue autoplay even after user interaction
          }}
          navigation
          loop
          modules={[Pagination]}
          className="mySwiper"
        >

          <SwiperSlide>
            <div className='h-40'>
              <Image
                src="https://source.unsplash.com/random/800x600?sig=1"
                alt="Image 1"
                // className="w-full h-auto object-cover"
                fill
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-40'>
              <Image
                src="https://source.unsplash.com/random/800x600?sig=2"
                alt="Image 2"
                // className="w-full h-auto object-cover"
                fill
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-40'>
              <Image
                src="https://source.unsplash.com/random/800x600?sig=3"
                alt="Image 3"
                // className="w-full h-auto object-cover"
                fill
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-40'>
              <Image
                src="https://source.unsplash.com/random/800x600?sig=4"
                alt="Image 4"
                // className="w-full h-auto object-cover"
                fill
              />
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </section>
  );
};

export default GalleryCarousel;
