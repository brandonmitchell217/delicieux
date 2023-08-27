import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  side?: "left" | "right";
  className?: string;
  children: React.ReactNode;
}

export const Row = ({ side = "left", className, children }: Props) => {
  return (
    <div
      className={`w-full flex ${
        side === "left"
          ? twMerge(className, "justify-start")
          : twMerge(className, "justify-end")
      }`}
    >
      {children}
    </div>
  );
};
