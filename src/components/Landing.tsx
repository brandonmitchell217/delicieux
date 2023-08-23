import React from "react";

export const Landing = () => {
  return (
    <div className="bg-landingMobile sm:bg-landing bg-cover bg-top sm:bg-center bg-no-repeat min-h-[90vh] md:min-h-[55vh] lg:min-h-[85vh] w-full text-light flex items-end pb-16 px-4 sm:px-16">
      <div className="w-full flex flex-col sm:flex-row items-center sm:items-stretch  gap-6 sm:gap-0">
        <h1 className="text-[48px] lg:text-[56px] xl:text-[66px] leading-[.877em] font-bold font-crimson">
          Fine Wine & an
          <br />
          Authentic French
          <br />
          Experience
        </h1>

        <div className="font-bold text-[18px] tracking-[.045em] leading-[.877em] hidden sm:flex flex-col gap-4 sm:items-end justify-end flex-1">
          <div className="w-full">
            <a href="/" className="w-full flex items-center justify-end">
              <div className="w-[180px] pb-1 relative before:box-content before:absolute before:z-10 before:-left-[208px] before:top-1/2 before:-translate-y-1/2 before:bg-red before:h-0.5 before:w-[203px]">
                Make a Reservation
              </div>
            </a>
          </div>
          <div className="w-full">
            <a href="/" className="w-full flex items-center justify-end">
              <div className="w-[180px] pb-1 relative before:box-content before:absolute before:z-10 before:-left-[208px] before:top-1/2 before:-translate-y-1/2 before:bg-red before:h-0.5 before:w-[203px]">
                Contact Us
              </div>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 items-center text-center  text-lg sm:hidden">
          <a
            href="/"
            className="bg-red p-4 w-72 rounded-lg border text-light border-red hover:bg-transparent hover:border-light hover:text-light transition-colors"
          >
            Make a Reservation
          </a>
          <a
            href="/"
            className="bg-transparent p-4 w-72 rounded-lg border border-light hover:bg-dark hover:border-dark transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};
