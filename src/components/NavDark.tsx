import React from "react";
import LogoDark from "/logo_dark.svg";

export const NavDark = () => {
  return (
    <nav className="absolute z-50 top-0 left-0 right-0 py-8">
      <div className="max-w-[1280px] m-auto flex justify-center items-center">
        <a href="/" className="group">
          <img
            src={LogoDark}
            alt="Logo"
            className="lg:group-hover:scale-105 transition-all"
          />
        </a>
      </div>
    </nav>
  );
};
