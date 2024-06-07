import React from "react";
import { twMerge } from "tailwind-merge";

interface RowProps {
  side?: "left" | "right";
  className?: string;
  children: React.ReactNode;
}

export const Row = ({ side = "left", className, children }: RowProps) => {
  return (
    <div
      className={twMerge(
        `w-full flex ${className}`,
        side === "left" ? "justify-start" : "justify-end"
      )}
    >
      {children}
    </div>
  );
};
