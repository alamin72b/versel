// key fixes: add space (h -> w), remove invalid gap, remove fixed heights, add break-words
import React from "react";
import Button from "../../atoms/Button";
import Badge from "../../atoms/Badge";

export type HeroSplitProps = {
  eyebrow?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  ctaText?: string;
  onCtaClick?: () => void;
};

const HeroSplit: React.FC<HeroSplitProps> = ({
  eyebrow = "About Casa Service",
  title = "Revolutionizing Cash Flow for Business Owners!",
  description =
    "Empowering businesses with faster cash access, CASA provides a secure, fast, and flexible solution to get early payments for credit card sales.",
  ctaText = "Join Now",
  onCtaClick,
}) => {
  return (
    <section className="pt-24 overflow-x-hidden bg-white font-roboto sm:pt-40">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-16 2xl:px-0">
        {/* grid */}
        <div className="grid items-start grid-cols-1 gap-8 sm:gap-12 md:gap-20 lg:gap-24 lg:grid-cols-12">
          {/* LEFT */}
          <div className="w-full lg:col-span-7">
            <Badge size="hug" tone="green" className="inline-block my-2 w-max">
              {eyebrow}
            </Badge>

            <h1
              id="hero-title"
              className="mt-4 sm:mt-5 font-roboto font-extrabold text-[28px] leading-[36px] sm:text-[42px] sm:leading-[48px] md:text-[56px] md:leading-[68px] lg:text-[50px] lg:leading-[62px] xl:text-[56px] xl:leading-[68px] break-words whitespace-normal"
            >
              {title}
            </h1>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col w-full min-w-0 gap-6 lg:col-span-5 sm:gap-8">
            <p className="font-manrope text-light-dark text-[16px] leading-[26px] sm:text-[24px] sm:leading-[36px]">
              {description}
            </p>

            <Button
              size="join"
              variant="default"
              onClick={onCtaClick}
              aria-label={ctaText}
              className="w-full sm:w-max"
            >
              {ctaText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSplit;
