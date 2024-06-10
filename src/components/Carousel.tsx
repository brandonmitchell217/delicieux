import React, { DetailedHTMLProps, useRef } from "react";
import { Navigation } from "swiper/modules";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import type { PropsFilter } from "../../tina/__generated__/types";

import { Swiper, SwiperSlide } from "swiper/react";

export const Carousel = ({ images }: { images: PropsFilter[] }) => {
  const swiperRef = useRef(null);

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
              src={image.image as DetailedHTMLProps<any, any>["src"]}
              alt="sdfefesa"
              className="shadow-sm max-w-[355px] w-[80vw] sm:w-[40vw] md:w-[30vw] h-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute -bottom-8 z-50 flex justify-evenly items-center w-full">
        <button onClick={() => swiperRef?.current?.slidePrev()}>
          <ArrowLeftCircle />
        </button>
        <button onClick={() => swiperRef?.current?.slideNext()}>
          <ArrowRightCircle />
        </button>
      </div>
    </>
  );
};
