import React from "react";

interface Props {
  label?: string;
  src: string;
}

export const InterstitialImg = ({ label, src }: Props) => {
  return (
    <div className="max-w-[2000px] m-auto w-full mt-8 md:mt-24 pt-10">
      <img
        src={src}
        alt={label ? `${label} image` : "Image of restaurant"}
        className="hidden sm:block max-w-full h-auto m-auto"
      />
      <img
        src={"/interstitial_mobile.jpg"}
        alt={label ? `${label} image` : "Image of restaurant"}
        className="sm:hidden"
      />
    </div>
  );
};
