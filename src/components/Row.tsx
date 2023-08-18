import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  side?: "left" | "right";
  children: React.ReactNode;
}

export const Row = ({ side = "left", children }: Props) => {
  return (
    <div
      className={`w-full flex ${
        side === "left" ? twMerge("justify-start") : twMerge("justify-end")
      }`}
    >
      {children}
    </div>
  );
};
