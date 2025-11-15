import React from 'react';
import Badge from '../../atoms/Badge';
import TestimonialCard from '../../atoms/TestimonialCard';

function Testimonials() {
  return (
    <div
      className="
        w-full
        /* preserve original large spacing at lg+ only */
        pt-16            /* small screens */
        lg:pt-[130px]    /* preserve original at lg and above */
        px-4             /* small screens */
        sm:px-6
        md:px-8
        lg:px-[240px]    /* KEEP the original 240px padding at lg and above */
        gap-[130px]
        flex
        flex-col
      "
    >
      <div
        className="
          max-w-full
          w-full
          h-full

          mx-auto
          flex
          flex-col
          items-center
          justify-start
          xl:gap-[130px]
          md:gap-[90px]
          gap-[60px]

          /* preserve original max width at lg+ (no change above lg) */
          lg:max-w-[1440px]
        "
      >
        <div
          className="
            /* full width on smaller breakpoints so the card stretches edge-to-edge within the small padding */
            w-full
            max-w-full

            /* keep exact constraints at xl/2xl as before (no change above lg) */
            xl:max-w-[900px]
            2xl:max-w-[904px]

            h-auto
            2xl:h-[301px]

            gap-[32px]
            
            flex
            flex-col
            items-center
            justify-start
            rounded-[12px]

            px-4
            py-6
            sm:py-8
            md:py-10
            2xl:py-0
          "
        >
          <Badge
            size="hug"
            tone="mint"
            style={{ width: '125px', fontWeight: 500 }}
          >
            Reviews
          </Badge>

          <h2
            className="
              text-[32px] leading-[30px] font-bold text-center text-black
              sm:text-[38px] sm:leading-[46px] sm:font-extrabold
              md:text-[40px] md:leading-[48px]
              lg:text-[48px] lg:leading-[58px]
              xl:text-[52px] xl:leading-[62px]
              2xl:text-[56px] 2xl:leading-[68px]
              max-w-[880px]
            "
          >
            <span className="inline sm:block">Hear What Customers Say</span>
            <span className="inline sm:block">About CASA!</span>
          </h2>

          <p
            className="
              font-manrope text-[14px] leading-[20px] text-center text-light-dark max-w-full
              sm:text-[16px] sm:leading-[24px] sm:max-w-[600px]
              md:text-[18px] md:leading-[26px] md:max-w-[640px]
              lg:text-[20px] lg:leading-[28px] lg:max-w-[660px]
              xl:text-[24px] xl:leading-[36px] xl:max-w-[651px]
              2xl:text-[24px] 2xl:leading-[36px] 2xl:max-w-[651px]
            "
          >
            Trusted by Thousands of Business Owners. See what our satisfied
            customers have to say about CASA.
          </p>
        </div>

        <div
          className="
  w-full
  max-w-full
  2xl:max-w-[1440px]
  2xl:mx-auto
  
  min-h-[585px]
  
  px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-0
  py-8 sm:py-10 md:py-12 lg:py-14
  
  gap-6 sm:gap-8 md:gap-9
  

  
  flex flex-col 2xl:flex-row
  items-center 2xl:items-stretch
  justify-center
"
        >
          <TestimonialCard
            logoSrc="app/assets/review/Other Company.svg"
            rating={5}
            title={`"Game-Changer for My Business!"`}
            body={`CASA has completely transformed my cash flow. As a restaurant owner, waiting for credit card payments used to be a struggle. Now, I get my funds within 24 hours, allowing me to pay suppliers and staff on time. The process is seamless, and the transparency in pricing is a huge plus.!`}
            avatarSrc="app/assets/chart/1.svg"
            personName="Michael R"
            personRole="Restaurant Owner"
          />

          <TestimonialCard
            logoSrc="/app/assets/review/Group.svg"
            rating={5}
            title={`"Game-Changer for My Business!"`}
            body={`CASA has completely transformed my cash flow. As a restaurant owner, waiting for credit card payments used to be a struggle. Now, I get my funds within 24 hours, allowing me to pay suppliers and staff on time. The process is seamless, and the transparency in pricing is a huge plus.!`}
            avatarSrc="app/assets/chart/1.svg"
            personName="Michael R"
            personRole="Restaurant Owner"
          />
        </div>

        <div className="relative inline-flex items-center justify-center">
          {/* Container with exact specs */}
          <div className="relative z-10 flex items-center w-[144px] h-[24px] gap-[36px]">
            {/* Left light circle */}
            <div className="w-[24px] h-[24px] rounded-full bg-mint-1"></div>

            {/* Center dark circle */}
            <div className="w-[24px] h-[24px] rounded-full bg-brand"></div>

            {/* Right light circle */}
            <div className="w-[24px] h-[24px] rounded-full bg-mint-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
