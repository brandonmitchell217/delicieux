import React from "react";
import { Instagram, Facebook, Twitter } from "lucide-react";

export const Footer = () => {
  const Socials = [
    {
      name: "Instagram",
      icon: <Instagram size={24} />,
      link: "https://www.instagram.com/",
    },
    {
      name: "Facebook",
      icon: <Facebook size={24} />,
      link: "https://www.facebook.com/",
    },
    {
      name: "Twitter",
      icon: <Twitter size={24} />,
      link: "https://www.twitter.com/",
    },
  ];
  return (
    <footer
      id="contact"
      className="bg-darkGray pt-12 pb-8 px-4 xl:px-0 text-light"
    >
      <div className="flex flex-col gap-10 max-w-[1280px] m-auto">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 items-center justify-center lg:justify-between lg:border-b-2 lg:border-light lg:pb-4">
          <a href="/" className="group">
            <img
              src="/logo_nav.svg"
              alt="Logo image"
              className="block w-52 lg:w-[253px] h-auto lg:group-hover:scale-105 transition-all"
            />
          </a>
          <ul className="pt-1 lg:pt-0 flex gap-16 text-[18px] xl:text-[24px] border-t border-light lg:border-0">
            <li>
              <a href="/#about" className="hover:text-light/80">
                About Us
              </a>
            </li>
            <li>
              <a href="/menu" className="hover:text-light/80">
                Menu
              </a>
            </li>
          </ul>
        </div>

        <div className="max-w-[85%] md:max-w-[65%] lg:max-w-[85%] w-full m-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full flex flex-col lg:flex-row lg:items-center gap-8">
            <a
              href="https://goo.gl/maps/SZcMb1mGpShzSQgL8"
              target="_blank"
              className="m-auto lg:m-0"
            >
              <img src="/map.jpg" alt="image of a map" />
            </a>
            <div className="text-center text-lg sm:text-base space-y-2">
              <div>
                <h6 className="font-semibold text-[24px] sm:text-[20px] underline underline-offset-2 decoration-light/80">
                  Address:
                </h6>
                <p>1234 Lorem Street</p>
                <p>Lorem, Ip 87654</p>
              </div>
              <div>
                <h6 className="font-semibold text-[24px] sm:text-[20px] underline underline-offset-2 decoration-light/80">
                  Phone:
                </h6>
                <p>3333-444-5678</p>
              </div>
              <div>
                <h6 className="font-semibold text-[24px] sm:text-[20px] underline underline-offset-2 decoration-light/80">
                  Email:
                </h6>
                <a href="/" className="hover:text-light/80">
                  delicieux@email.com
                </a>
              </div>
            </div>
          </div>

          <div className="py-8 md:py-0 text-center space-y-2">
            <div className="space-y-1 text-lg sm:text-base">
              <h6 className="font-semibold font-crimson text-[24px] sm:text-[20px]">
                Hours of Operation:
              </h6>

              <p>
                <span className="font-semibold">Brunch:</span> 9:00am - 2:30pm
                Saturday & Sunday
              </p>
              <p>
                <span className="font-semibold">Dinner:</span> 5:30pm - 10:00pm
                Tuesday - Saturday
              </p>
            </div>
            <a
              href="/"
              className="inline-block pt-6 md:pt-0 font-semibold text-[28px] lg:text-[20px] border-b-2 border-b-red hover:border-dark hover:text-light/80 transition-colors"
            >
              Reservations
            </a>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-center items-center lg:items-stretch lg:justify-between">
          <div className="flex gap-4 lg:gap-12 items-center">
            {Socials.map((social) => (
              <a
                href={social.link}
                key={social.name}
                className="hover:text-light/80"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <div>
            <p>
              Design & code by{" "}
              <a className="hover:text-[#c2f73b] transition-colors">Brandon</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
