import React from "react";

export const Nav = () => {
  return (
    <nav className="absolute z-50 top-0 left-0 right-0 py-8">
      <div className="max-w-[1280px] m-auto flex justify-center items-center">
        <a href="/">
          <img src="/logo_nav.svg" alt="Logo" />
        </a>
      </div>
    </nav>
  );
};
