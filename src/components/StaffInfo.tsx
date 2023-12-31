import React from "react";
import { twMerge } from "tailwind-merge";
import type { StaffFilter } from "../../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
interface StaffInfoProps {
  person: any;
  side: string | number;
}

export const StaffInfo = ({ person, side }: StaffInfoProps) => {
  if (!person) return null;

  return (
    <div className="py-12 md:py-8 lg:py-0 px-8 md:px-4 overflow-x-hidden">
      <div
        className={`flex flex-col gap-8 lg:gap-[30px] justify-center md:justify-stretch items-center md:max-w-[868px] ${
          side === "left"
            ? twMerge("md:flex-row")
            : twMerge("md:flex-row-reverse")
        }`}
      >
        <img
          src={person.image}
          alt="image of person"
          className={`w-66 md:w-52 h-auto lg:w-full ${
            side === "left"
              ? twMerge("self-end md:self-stretch")
              : twMerge("self-start md:self-stretch")
          }`}
        />
        <div className="space-y-2 sm:space-y-4">
          <div
            className={`flex flex-col items-end gap-1 lg:gap-4 relative header ${
              side === "left"
                ? "md:items-start before:left-[-30%]"
                : twMerge("before:right-[-30%]")
            }`}
          >
            <h3
              className={`flex flex-row-reverse gap-3 text-[42px] lg:text-[56px] leading-[.877em] ${
                side === "left" ? twMerge("md:flex-row") : ""
              }`}
            >
              {person.title}
              <img
                src={person.icon ?? "/knife.svg"}
                alt="icon image"
                className="w-6 sm:w-10 h-auto drop-shadow-sm xl:drop-shadow-lg"
              />
            </h3>
            <h4 className="font-crimson font-bold text-[32px] lg:text-[48px] leading-[.877em] border-b-2 border-dark border-spacing-3 sm:border-none">
              {person.name}
            </h4>
          </div>
          <div
            className={`font-crimson text-right text-[14px] sm:text-base leading-[1.5em] md:px-4 ${
              side === "left" ? twMerge("md:text-left") : ""
            }`}
          >
            <TinaMarkdown content={person.body} />
          </div>
        </div>
      </div>
    </div>
  );
};
