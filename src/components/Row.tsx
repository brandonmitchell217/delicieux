import React from "react";

interface Props {
  side?: "left" | "right";
  children: React.ReactNode;
}

export const Row = ({ side = "left", children }: Props) => {
  return (
    <div
      className={`w-full flex ${
        side === "left" ? "justify-start" : "justify-end"
      }`}
    >
      {children}
    </div>
  );
};
