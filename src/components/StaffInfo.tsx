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
    <div>
      <div
        className={`flex gap-[30px] items-center max-w-[868px] ${
          side === "left" ? twMerge("flex-row") : twMerge("flex-row-reverse")
        }`}
      >
        <img src={image} alt="image of person" />
        <div className="space-y-4">
          <div
            className={`flex flex-col gap-4 relative header ${
              side === "left"
                ? ""
                : twMerge("items-end before:left-0 before:right-[-10%]")
            }`}
          >
            <h3
              className={`flex gap-3 text-[56px] leading-[.877em] ${
                side === "left" ? twMerge("row") : twMerge("flex-row-reverse")
              }`}
            >
              {title}
              <img src={icon ?? "/knife.svg"} alt="icon image" />
            </h3>
            <h4 className="font-crimson font-bold text-[48px] leading-[.877em]">
              {name}
            </h4>
          </div>
          <p
            className={`font-crimson leading-[1.5em] px-4 ${
              side === "left" ? twMerge("text-left") : twMerge("text-right")
            }`}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
