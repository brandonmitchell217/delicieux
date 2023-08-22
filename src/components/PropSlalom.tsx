import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  title: string;
  description: string;
  link: {
    label: string;
    url: string;
  };
  image: string;
  side?: "left" | "right";
}

export const PropSlalom = ({
  title,
  description,
  link,
  image,
  side = "left",
}: Props) => {
  // TODO: FIX THIS TWMERGE
  return (
    <div className="py-24 px-4 md:px-12 xl:px-4">
      <div
        className={`w-full flex flex-col md:flex-row md:gap-8 lg:gap-0 justify-center items-center ${
          side === "left" ? null : twMerge("flex-row-reverse")
        } `}
      >
        <div className="xl:flex-1 flex flex-col">
          <h2 className="relative font-crimson font-bold text-[88px] xl:text-[144px] leading-[.877em] w-max">
            {title}
            <div className="absolute -z-10 h-2.5 w-[72%] bottom-0 right-2 bg-red rounded-full"></div>
          </h2>
          <div className="lg:w-[80%] space-y-4 md:pl-8 md:pr-4 lg:pl-14 lg:pr-0">
            <p className="pt-8 text-[16px] xl:text-[24px] leading-[1.5em] tracking-[.02em] ">
              {description}
            </p>
            <a
              href={link.url}
              className="block font-crimson text-[20px] lg:text-[32px] tracking-[.02em]"
            >
              {link.label}
            </a>
          </div>
        </div>
        <div className="relative">
          <img
            src={image}
            alt={`${title} image`}
            className="shadow-md max-w-[355px] w-[40vw] md:w-[30vw] h-auto"
          />
          <div className="absolute -z-10 -right-6 -top-4 h-full w-full border-2 border-dark rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};
