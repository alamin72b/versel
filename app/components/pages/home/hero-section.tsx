import React from "react";
import Button from "../../atoms/Button";
import Badge from "../../atoms/Badge";  
import InlineBadge from "app/assets/hero/inline-badge.svg";

export type HeroSectionProps = {
  subtitle?: string;
  ctaText?: string;
};

const HeroSection: React.FC<HeroSectionProps> = ({
  subtitle,
  ctaText = "Get Started",
}) => {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden pt-25 lg:pt-35"
    >
      <div className="max-w-[1042px] mx-auto text-center">
        {/* HERO BADGE */}
        <div className="flex justify-center">
          <Badge size="hero" tone="green">
            Fast. secure. hassle-free
          </Badge>
        </div>

        {/* TITLE */}
        <h1
          id="hero-title"
          className="
            pt-8
            font-roboto font-extrabold text-text-default tracking-[0px]
            text-center align-middle
            text-[40px] leading-11
            md:text-[50px] md:leading-16
            lg:text-[56px] lg:leading-[82px]
            xl:text-[62px]
            2xl:text-[72px]
          "
        >
          {/* Mobile stacked layout */}
          <span className="block sm:hidden text-[56px] leading-[72px]">
            <span className="block">Get Paid</span>
            <span className="inline-flex items-center justify-center mt-1">
              <span className="mr-2">Faster</span>
              <img
                src={InlineBadge}
                alt=""
                aria-hidden="true"
                className="inline-block w-[72px] h-[48px] -translate-y-[2px]"
              />
            </span>
            <span className="block">Instant Cash</span>
            <span className="block">for Businesses!</span>
          </span>

          {/* Desktop layout */}
          <span className="hidden sm:inline">
            <span>Get Paid </span>
            <span className="inline-flex items-center">
              <span className="mr-3 md:mr-4">Faster</span>
              <img
                src={InlineBadge}
                alt=""
                aria-hidden="true"
                className="
                  inline-block
                  w-[72px] h-[48px]
                  -translate-y-[2px]
                "
              />
            </span>
            <span className="ml-3 md:ml-4">Instant Cash</span>
            <span className="block">for Businesses!</span>
          </span>
        </h1>

        {/* SUBTITLE */}
        <p
          className="
          mt-6
          font-manrope font-normal text-neutral-600 text-center align-middle
          text-[18px] leading-[28px]
          lg:text-[24px] lg:leading-[36px]
          tracking-[0px]
          w-full
        "
        >
          {subtitle ??
            "Stop waiting months for credit card payments. CASA helps business owners access cash instantly by converting card transactions into immediate funds."}
        </p>

        {/* CTA */}
        <div className="flex items-center justify-center pt-8">
          <Button
            variant="default"
            size="hero"
            aria-label="Get started"
            className="font-semibold font-manrope"
          >
            {ctaText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
