import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  image: string;
  title: string;
  name: string;
  description: string;
  icon: string;
  side?: "left" | "right";
}

export const StaffInfo = ({
  image,
  title,
  name,
  description,
  icon,
  side = "left",
}: Props) => {
  return (
    <div className="pt-10 pb-16 md:py-8 lg:py-16 px-8 md:px-4 overflow-x-hidden">
      <div
        className={`flex flex-col gap-8 lg:gap-[30px] justify-center md:justify-stretch items-center md:max-w-[868px] ${
          side === "left"
            ? twMerge("md:flex-row")
            : twMerge("md:flex-row-reverse")
        }`}
      >
        <img
          src={image}
          alt="image of person"
          className="w-44 sm:w-52 h-auto lg:w-full"
        />
        <div className="space-y-2 sm:space-y-4">
          <div
            className={`flex flex-col items-end gap-1 lg:gap-4 relative header ${
              side === "left"
                ? "md:items-start"
                : twMerge("before:left-0 before:right-[-30%]")
            }`}
          >
            <h3
              className={`flex flex-row-reverse gap-3 text-[32px] sm:text-[42px] lg:text-[56px] leading-[.877em] ${
                side === "left" ? twMerge("md:flex-row") : ""
              }`}
            >
              {title}
              <img
                src={icon ?? "/knife.svg"}
                alt="icon image"
                className="w-6 sm:w-10 h-auto drop-shadow-sm xl:drop-shadow-lg"
              />
            </h3>
            <h4 className="font-crimson font-bold text-[24px] sm:text-[32px] lg:text-[48px] leading-[.877em] border-b-2 border-dark border-spacing-3 sm:border-none">
              {name}
            </h4>
          </div>
          <p
            className={`font-crimson text-right text-[14px] sm:text-base leading-[1.5em] md:px-4 ${
              side === "left" ? twMerge("md:text-left") : ""
            }`}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
