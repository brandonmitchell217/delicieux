import React from "react";

export const ChefsTable = () => {
  return (
    <div className="my-0 sm:my-5 md:my-10">
      <div className="bg-[#F1F3F1] py-5 px-4 lg:px-20 max-w-[90%] m-auto rounded-[20px] border-2 border-dark">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <div>
            <img
              src="/chefsTable.svg"
              alt="Chef's Table image"
              className="max-w-[317px] h-auto"
            />
          </div>

          <div className="text-center space-y-3 px-2 sm:px-4 flex-1">
            <p className="font-crimson text-[20px] md:text-[24px] lg:text-[32px] leading-[1.282em] tracking-[.02em]">
              Our <span className="italic">Chef&apos;s Table</span> allows you
              to indulge in an intimate setting mere steps away from our
              talented culinary artisans, as they craft a bespoke menu tailored
              to your palate.
            </p>
            <p className="text-[13px] md:text-[16px] xl:text-[18px] leading-[1.227em]">
              Chef&apos;s Table is priced starting at $189 per person.
              <br />
              <a href="/" className="underline">
                Contact us
              </a>
              {""} directly to create your unique experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
