import React from 'react';

export type FeatureCardProps = {
  id?: string;
  title: string;
  description: string;
  iconSrc?: string;
  cardWidth?: number;
  cardHeight?: number;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  id,
  title,
  description,
  iconSrc,
  cardWidth = 456,
  cardHeight = 408,
}) => {
  return (
    <article
      id={id}
      role="group"
      aria-labelledby={id ? `${id}-title` : undefined}
      className="
        group
        rounded-[20px] sm:rounded-[25px]
        transition-all duration-300 ease-in-out
        flex justify-center
        w-full
      "
      style={{ maxWidth: `${cardWidth}px` }}
    >
      <div
        className={`
          rounded-[20px] sm:rounded-[25px]
          w-full
          flex flex-col
          justify-start
          transition-all duration-300
          bg-neutral-1
          gap-1.5 sm:gap-2
          hover:bg-brand
          p-5 sm:p-8 md:p-12
          h-auto md:h-[${cardHeight}px]
        `}
      >
        {/* Title */}
        <h3
          id={id ? `${id}-title` : undefined}
          className="
            text-[20px] leading-[28px] mb-2
            sm:text-[22px] sm:leading-[30px] sm:mb-3
            md:text-[24px] md:leading-[28px]
            2xl:text-[32px] 2xl:leading-[40px]
            font-bold text-black
            transition-colors duration-300
            group-hover:text-white
          "
        >
          {title}
        </h3>

        {/* Icon */}
        <div
          className="flex items-center justify-center w-8 h-8 mb-4 transition-colors duration-300 rounded-full  sm:w-9 sm:h-9 md:w-10 md:h-10 bg-mint-2 group-hover:bg-white/15 sm:mb-5 md:mb-6"
        >
          {iconSrc ? (
            <img
              src={iconSrc}
              alt=""
              width={56}
              height={56}
              className="w-[40px] h-[40px] sm:w-[44px] sm:h-[44px] md:w-[56px] md:h-[56px] object-contain"
            />
          ) : (
            <div className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] bg-brand rounded-full" />
          )}
        </div>

        {/* Description */}
        <p
          className="
            text-[15px] leading-[24px]
            sm:text-[16px] sm:leading-[26px]
            md:text-[20px] md:leading-[32px]
            text-light-dark
            font-manrope font-normal
            transition-colors duration-300
            group-hover:text-white
          "
        >
          {description}
        </p>
      </div>
    </article>
  );
};

export default FeatureCard;
