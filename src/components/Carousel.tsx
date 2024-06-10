import React, { useRef } from "react";
import { Navigation } from "swiper/modules";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

export const Carousel = ({ images }: { images: any[] }) => {
  const swiper = useSwiper();
  const swiperRef = useRef(null);
  // const pagination = {
  //   clickable: true,
  //   bulletClass: "pagination-bullet",
  //   bulletActiveClass: "pagination-bullet-active",
  // };

  return (
    <>
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        initialSlide={1}
        centeredSlides={true}
        loop={true}
        navigation={{
          enabled: true,
          nextEl: ".arrow-right",
          prevEl: ".arrow-left",
        }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={() => console.log("slide change")}
        className="relative"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image.image}
              alt="sdfefesa"
              className="shadow-sm max-w-[355px] w-[80vw] sm:w-[40vw] md:w-[30vw] h-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute -bottom-8 z-50 flex justify-evenly items-center w-full">
        <button onClick={() => swiperRef.current.slidePrev()}>
          <ArrowLeftCircle />
        </button>
        <button onClick={() => swiperRef.current.slideNext()}>
          <ArrowRightCircle />
        </button>
      </div>
    </>
  );
};
