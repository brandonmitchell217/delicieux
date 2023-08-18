import React from "react";

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
    <div className="max-w-[1209px] m-auto py-24">
      <div
        className={`w-full flex ${
          side === "left" ? null : "flex-row-reverse"
        } justify-center items-center`}
      >
        <div className="flex-1 flex flex-col">
          <h2 className="relative font-crimson font-bold text-[144px] leading-[.877em] w-max">
            {title}
            <div className="absolute -z-10 h-2.5 w-[72%] bottom-0 right-2 bg-red rounded-full"></div>
          </h2>
          <div className="w-[80%] space-y-4 pl-14">
            <p className="pt-8 text-[24px] leading-[1.5em] tracking-[.02em] ">
              {description}
            </p>
            <a
              href={link.url}
              className="block font-crimson text-[32px] tracking-[.02em]"
            >
              {link.label}
            </a>
          </div>
        </div>
        <div className="">
          <img src={image} alt={`${title} image`} />
        </div>
      </div>
    </div>
  );
};
