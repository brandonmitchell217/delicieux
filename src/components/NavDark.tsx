import React, { useState, useEffect } from "react";
import LogoNav from "/logo_nav.svg";
import LogoDark from "/logo_dark.svg";
import { Menu, X, Facebook, Instagram, Twitter } from "lucide-react";

export const NavDark = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const MobileMenu = () => {
    return (
      <div
        className={`fixed z-50 top-0 left-0 h-screen w-full pt-8 pb-24 px-[3vw] md:px-[7vw] bg-dark text-light flex-col items-center justify-between ${
          isMobileMenuOpen ? "flex" : "hidden"
        }`}
      >
        <X
          className="absolute top-10 right-10 text-white hover:text-red cursor-pointer"
          size={32}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
        <div>
          <img src={LogoNav} alt="Logo" className="m-auto" />
        </div>

        <div className="w-full flex flex-col md:flex-row gap-16 md:gap-0 justify-between items-center px-[9vw]">
          <ul className="space-y-14 text-center md:text-left text-2xl sm:text-3xl lg:text-5xl font-semibold">
            <li onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <a href="/#about">About</a>
            </li>
            <li onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <a href="/menu">Menu</a>
            </li>
            <li onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <a href="/#contact">Contact</a>
            </li>
          </ul>
          <div className="space-y-3">
            <div className="space-y-1 text-lg sm:text-base">
              <h6 className="font-semibold font-crimson text-[20px] md:text-[24px] text-center">
                Hours of Operation:
              </h6>

              <p>
                <span className="font-semibold block text-center">Brunch:</span>{" "}
                9:00am - 2:30pm Saturday & Sunday
              </p>
              <p>
                <span className="font-semibold block text-center">Dinner:</span>{" "}
                5:30pm - 10:00pm Tuesday - Saturday
              </p>
            </div>
            <div className="flex justify-center">
              <a href="/" className="border-b border-b-red">
                Make a Reservation
              </a>
            </div>
          </div>
        </div>
        <div>
          <ul className="flex gap-24 items-center">
            <li>
              <a href="/">
                <Facebook size={32} />
              </a>
            </li>
            <li>
              <a href="/">
                <Instagram size={32} />
              </a>
            </li>
            <li>
              <a href="/">
                <Twitter size={32} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <nav className="absolute z-50 top-0 left-0 right-0 py-8">
      <div className="max-w-7xl m-auto px-4 md:px-16 lg:px-20  flex justify-end items-center">
        <div className="flex justify-between items-center w-full lg:w-[60%] ">
          <a href="/" className="group">
            <img
              src={LogoDark}
              alt="Logo"
              className="lg:group-hover:scale-105 transition-all"
            />
          </a>
          <Menu
            className="text-dark cursor-pointer"
            size={32}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div>
      </div>
      <MobileMenu />
    </nav>
  );
};
