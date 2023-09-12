import React, { useState, useEffect } from "react";
import LogoNav from "/logo_nav.svg";
import { Menu } from "lucide-react";
import NavMenu from "./NavMenu";

export const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <nav className="absolute z-50 top-0 left-0 right-0 py-8">
      <div className="max-w-7xl m-auto px-4 md:px-16 lg:px-20  flex justify-end items-center">
        <div className="flex justify-between items-center w-full lg:w-[60%] ">
          <a href="/" className="group">
            <img
              src={LogoNav}
              alt="Logo"
              className="lg:group-hover:scale-105 transition-all"
            />
          </a>
          <Menu
            className="text-light cursor-pointer hover:text-light/70 transition-all"
            size={32}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div>
      </div>
      <NavMenu
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
    </nav>
  );
};
