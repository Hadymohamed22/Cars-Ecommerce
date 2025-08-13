"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay } from "swiper/modules";
import CarCard from "../CarCard";
import { useEffect, useState } from "react";

const RecommendedCarsSwiper = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("https://6885fd6ff52d34140f6b1124.mockapi.io/ecommerce/v1/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  return (
    <div className="my-10">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {cars.length === 0 && (
          <h2 className="text-primary font-bold text-3xl md:text-4xl animate-pulse">
            Loading...
          </h2>
        )}
        {cars.slice(0, 8).map((e) => {
          return (
            <SwiperSlide key={e.slug}>
              <CarCard
                id={e.id}
                title={e.name}
                type={e.type}
                image={e.image}
                fuel={e.fuel}
                engine={e.engine}
                buyers={e.buyers}
                buyLink={`/cars/${e.slug}`}
                price={e.price}
                sale={e.sale}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default RecommendedCarsSwiper;
