"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay } from "swiper/modules";
import SwiperSlideContent from "./SwiperSlideContent";

import background1 from "@/assets/images/hero-bg1.svg";
import background2 from "@/assets/images/hero-bg2.svg";
import car1 from "@/assets/images/car1.webp";
import car2 from "@/assets/images/car2.webp";

const SwiperComponent = () => {
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
        slidesPerView={1}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
      >
        <SwiperSlide>
          <SwiperSlideContent
            background={background1}
            title="The Best Platform for Car Rental"
            subtitle="Ease of doing a car rental safely and reliably. Of course at a low price."
            btnLink="/cars/nissan-gtr"
            btnBg="#54A6FF"
            image={car1}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlideContent
            background={background2}
            title="Easy way to rent a car at a low price"
            subtitle="Providing cheap car rental services and safe and comfortable facilities."
            btnLink="/cars/koenigsegg"
            btnBg="#3563E9"
            image={car2}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlideContent
            background={background1}
            title="The Best Platform for Car Rental"
            subtitle="Ease of doing a car rental safely and reliably. Of course at a low price."
            btnLink="/cars/nissan-gtr"
            btnBg="#54A6FF"
            image={car1}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlideContent
            background={background2}
            title="Easy way to rent a car at a low price"
            subtitle="Providing cheap car rental services and safe and comfortable facilities."
            btnLink="/cars/koenigsegg"
            btnBg="#3563E9"
            image={car2}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
