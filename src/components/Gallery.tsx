'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

const TestimonialsCarousel: React.FC = () => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
        clickable: true
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="flex flex-col lg:flex-row items-center justify-center p-8 bg-gray-100 rounded-lg shadow-md">
          <div className="lg:w-2/3 text-center lg:text-left">
            <p className="text-lg italic mb-4 text-gray-700">
              {'"'}A game-changer! I love how simple it is to use and how it boosts my productivity every day.{'"'}
            </p>
            <p className="font-bold text-gray-800">Jane Smith</p>
          </div>
          <div className="lg:w-1/3 flex justify-center mt-4 lg:mt-0 max-w-72">
            <Image
              src="/images/person2.jpg"
              alt="Jane Smith"
              width={120}
              height={120}
              className="rounded-full"
              objectFit='cover'
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col lg:flex-row items-center justify-center p-8 bg-gray-100 rounded-lg shadow-md">
          <div className="lg:w-2/3 text-center lg:text-left">
            <p className="text-lg italic mb-4 text-gray-700">
              {'"'}A game-changer! I love how simple it is to use and how it boosts my productivity every day.{'"'}
            </p>
            <p className="font-bold text-gray-800">Jane Smith</p>
          </div>
          <div className="lg:w-1/3 flex justify-center mt-4 lg:mt-0 max-w-72">
            <Image
              src="/images/person2.jpg"
              alt="Jane Smith"
              width={120}
              height={120}
              className="rounded-full"
              objectFit='cover'
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col lg:flex-row items-center justify-center p-8 bg-gray-100 rounded-lg shadow-md">
          <div className="lg:w-2/3 text-center lg:text-left">
            <p className="text-lg italic mb-4 text-gray-700">
              {'"'}A game-changer! I love how simple it is to use and how it boosts my productivity every day.{'"'}
            </p>
            <p className="font-bold text-gray-800">Jane Smith</p>
          </div>
          <div className="lg:w-1/3 flex justify-center mt-4 lg:mt-0 max-w-72">
            <Image
              src="/images/person2.jpg"
              alt="Jane Smith"
              width={120}
              height={120}
              className="rounded-full"
              objectFit='cover'
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default TestimonialsCarousel;
