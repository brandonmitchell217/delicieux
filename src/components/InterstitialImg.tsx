import React from "react";

interface Props {
  label?: string;
  src: string;
}

export const InterstitialImg = ({ label, src }: Props) => {
  return (
    <div className="max-w-[2000px] m-auto w-full md:my-10 py-10">
      <img
        src={src}
        alt={label ? `${label} image` : "Image of restaurant"}
        className="max-w-full h-auto m-auto"
      />
    </div>
  );
};
