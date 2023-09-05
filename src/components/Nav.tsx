import React from "react";

interface Props {
  pathname?: string;
}

export const Nav = ({ pathname }: Props) => {
  return (
    <nav className="absolute z-50 top-0 left-0 right-0 py-8">
      <div className="max-w-[1280px] m-auto flex justify-center items-center">
        <a href="/" className="group">
          {pathname === "/menu" ? (
            <img
              src="/logo_dark.svg"
              alt="Logo"
              className="lg:group-hover:scale-105 transition-all"
            />
          ) : (
            <img
              src="/logo_nav.svg"
              alt="Logo"
              className="lg:group-hover:scale-105 transition-all"
            />
          )}
        </a>
      </div>
    </nav>
  );
};
