import React from "react";
import { twMerge } from "tailwind-merge";

export const Landing = () => {
  // TODO: Create mobile/tablet/desktop version of landing bg, also a new fancy line
  const LinkStyles =
    "relative before:absolute before:-left-[104%] before:top-1/2 before:-translate-y-1/2 before:h-1 before:w-full before:bg-red before:rounded-xl";

  return (
    <div className="relative bg-landingMobile sm:bg-landing md:bg-contain bg-top bg-no-repeat w-full h-[90vh] md:h-auto md:aspect-video flex text-light">
      <div className="relative w-full h-full flex flex-col md:flex-row items-center md:items-end justify-end md:justify-between gap-6 md:gap-0 pb-[5%] lg:pb-[8%] xl:pb-[5%] px-4 sm:px-20">
        <div className="absolute top-32 right-[8%] -translate-x-[8%] lg:top-auto lg:bottom-44 flex gap-3 lg:gap-6">
          <img
            src="/goodyear.png"
            alt="Goodyear Award badge"
            className="block w-16 h-auto lg:w-24 lg:h-max"
          />
          <img
            src="/goodyear.png"
            alt="Goodyear Award badge"
            className="block w-16 h-auto lg:w-24 lg:h-max"
          />
        </div>
        <h1 className="text-[48px] lg:text-[56px] xl:text-[66px] leading-[.877em] font-bold font-crimson landing-text">
          Fine Wine & an
          <br />
          Authentic French
          <br />
          Experience
        </h1>
        <div className="font-bold text-[18px] tracking-[.045em] leading-[.877em] hidden lg:flex justify-end items-end">
          <div className="flex flex-col gap-4 w-full landing-text">
            <a className={twMerge(LinkStyles)}>Make a Reservation</a>
            <a href="/#contact" className={twMerge(LinkStyles)}>
              Contact Us
            </a>
          </div>
        </div>
        {/* button buttons */}
        <div className="flex flex-col gap-4 items-center text-center  text-lg lg:hidden">
          <a
            href="/"
            className="bg-red p-4 w-72 rounded-lg border text-light border-red hover:bg-transparent hover:border-light hover:text-light transition-colors"
          >
            Make a Reservation
          </a>
          <a
            href="/"
            className="bg-light text-dark p-4 w-72 rounded-lg border border-light hover:bg-transparent hover:text-light transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};
