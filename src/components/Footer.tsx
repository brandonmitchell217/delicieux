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
    <footer className="bg-darkGray pt-14 pb-8 text-light">
      <section className="flex flex-col gap-10">
        <div className="flex items-center justify-between">
          <img
            src="/logo_nav.svg"
            alt="Logo image"
            className="w-[253px] h-auto"
          />
          <ul className="flex gap-16 text-[24px]">
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Menu</a>
            </li>
            <li>
              <a href="/">Contact & Info</a>
            </li>
          </ul>
        </div>

        <div className="max-w-[85%] w-full m-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <img src="/map.jpg" alt="image of a map" />
            <div>
              <div>
                <h6 className="font-semibold font-crimson text-[20px]">
                  Address:
                </h6>
                <p>1234 Lorem Street</p>
                <p>Lorem, Ip 87654</p>
              </div>
              <div>
                <h6 className="font-semibold font-crimson text-[20px]">
                  Phone:
                </h6>
                <p>3333-444-5678</p>
              </div>
              <div>
                <h6 className="font-semibold font-crimson text-[20px]">
                  Email:
                </h6>
                <p>delicieux@email.com</p>
              </div>
            </div>
          </div>

          <div className="text-center space-y-2">
            <div>
              <h6 className="font-semibold font-crimson text-[20px]">
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
              className="inline-block font-semibold text-[20px] border-b-2 border-b-red"
            >
              Reservations
            </a>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex gap-4 items-center">
            {Socials.map((social) => (
              <a href={social.link} key={social.name}>
                {social.icon}
              </a>
            ))}
          </div>
          <div>
            <p>
              Design & code by <a href="/">Brandon</a>
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};
