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
  return (
    <div className="pt-32 pb-20 px-4 md:px-12 xl:px-4">
      <div
        className={`w-full flex flex-col md:flex-row gap-12 md:gap-8 lg:gap-0 justify-center md:justify-between items-center ${
          side === "left" ? null : twMerge("flex-row-reverse")
        } `}
      >
        <div className=" flex flex-col">
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
              className="md:ml-4 font-crimson text-[20px] lg:text-[28px] tracking-[.02em] flex items-center gap-4 md:gap-8 group"
            >
              {link.label}
              <svg
                width="141"
                height="24"
                viewBox="0 0 141 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-1 w-[115px] h-auto md:w-[141px] lg:group-hover:w-[160px] lg:group-hover:h-auto transition-all"
              >
                <path
                  d="M140.061 13.0607C140.646 12.4749 140.646 11.5251 140.061 10.9393L130.515 1.3934C129.929 0.807611 128.979 0.807611 128.393 1.3934C127.808 1.97919 127.808 2.92893 128.393 3.51472L136.879 12L128.393 20.4853C127.808 21.0711 127.808 22.0208 128.393 22.6066C128.979 23.1924 129.929 23.1924 130.515 22.6066L140.061 13.0607ZM0 13.5H139V10.5H0V13.5Z"
                  fill="#BB0A01"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="relative">
          <img
            src={image}
            alt={`${title} image`}
            loading="lazy"
            className="shadow-sm max-w-[355px] w-[40vw] md:w-[30vw] h-auto"
          />
          <div className="absolute -z-10 -right-4 -top-3 h-full w-full border-2 border-dark rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};
