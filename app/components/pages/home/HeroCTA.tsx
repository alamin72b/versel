// app/components/sections/HeroCTA.tsx
import React from "react";
import Button from "../../atoms/Button";

const HeroCTA: React.FC = () => {
  return (
    <section
      className="
        w-full
        bg-white

        pt-8        /* xs */
        sm:pt-12     /* small devices */
        md:pt-16     /* medium */
        lg:pt-20     /* large */
        xl:pt-24     /* xl */
        2xl:pt-28    /* original */
      "
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* CTA Card */}
        <div
          className="
            w-full
            bg-brand
            rounded-[25px]
            flex flex-col items-center justify-center
            gap-[36px]

            px-4 py-10
            sm:px-6 sm:py-12
            md:px-12 md:py-16
            lg:px-20 lg:py-20
            xl:px-32 xl:py-24
            2xl:px-[175px] 2xl:py-[130px]
          "
        >
          {/* Heading */}
          <h2
            className="
              font-roboto font-[900] text-center text-white max-w-[971px]

              text-[28px] leading-[36px]
              sm:text-[36px] sm:leading-[44px]
              md:text-[48px] md:leading-[56px]
              lg:text-[56px] lg:leading-[66px]
              xl:text-[64px] xl:leading-[74px]
              2xl:text-[72px] 2xl:leading-[82px]
            "
          >
            Unlock Instant Cash Flow for Your Business!
          </h2>

          {/* Subheading */}
          <p
            className="
              font-manrope font-[400] text-center text-white max-w-[971px]

              text-[14px] leading-[20px]
              sm:text-[16px] sm:leading-[24px]
              md:text-[18px] md:leading-[28px]
              lg:text-[20px] lg:leading-[30px]
              xl:text-[22px] xl:leading-[34px]
              2xl:text-[24px] 2xl:leading-[36px]
            "
          >
            Running a business shouldn't mean waiting weeks for credit card payments to clear.
            With CASA, you can convert your daily transactions into instant cash,
          </p>

          {/* Button */}
          <div className="flex items-center justify-center w-full px-4 sm:px-0">
            <Button variant="yellow" size="ctaSmall" className="font-manrope">
              Let's get started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCTA;
