import React from 'react';

type TestimonialCardProps = {
  width?: string;
  logoSrc?: string;
  rating?: number; // 0-5
  title: string;
  body: string;
  avatarSrc?: string;
  personName: string;
  personRole?: string;
  className?: string;
};

export default function TestimonialCard({
  width = 'w-full',
  logoSrc,
  rating = 5,
  title,
  body,
  avatarSrc,
  personName,
  personRole,
  className,
}: TestimonialCardProps) {
  const r = Math.max(0, Math.min(5, Math.round(rating)));

  return (
    <article
      className={`${width} max-w-[701px] mx-auto
        h-auto 
        p-6 sm:p-10 md:p-12 lg:p-16 xl:p-20
        gap-6 sm:gap-8 md:gap-10
        rounded-2xl lg:rounded-[25px] 
        bg-neutral-1 shadow-sm 
        flex flex-col justify-start ${className ?? ''}`}
      role="article"
      aria-label={`Testimonial by ${personName}`}
    >
      {/* Top row: stars and logo */}
      <div className="flex flex-col items-start justify-between w-full gap-4 sm:flex-row sm:items-center sm:gap-6">
        {/* Stars */}
        <div className="flex items-center gap-1 sm:gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={i < r ? 'currentColor' : 'none'}
              stroke="currentColor"
              className={`${i < r ? 'text-gold' : 'text-[#E5E7EB]'} 
                w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8`}
              aria-hidden
            >
              <path
                d="M12 .587l3.668 7.431L23.4 9.75l-5.6 5.455L19.336 24 12 19.897 4.664 24l1.536-8.795L.6 9.75l7.732-1.732L12 .587z"
                strokeWidth="0"
              />
            </svg>
          ))}
        </div>

        {/* Logo */}
        {logoSrc ? (
          <img
            src={logoSrc}
            alt="brand logo"
            className="object-contain w-[80px] h-[32px] sm:w-[100px] sm:h-[40px] lg:w-[125px] lg:h-[50px]"
          />
        ) : (
          <div className="w-[80px] h-[32px] sm:w-[100px] sm:h-[40px] lg:w-[125px] lg:h-[50px] bg-gray-100 rounded-sm" />
        )}
      </div>

      {/* Middle: title + body */}
      <div className="flex flex-col flex-1 w-full gap-4 sm:gap-5 md:gap-6">
        <h3 className="font-bold text-black font-manrope
          text-xl leading-7
          sm:text-2xl sm:leading-8
          md:text-[28px] md:leading-9
          lg:text-[32px] lg:leading-[50px]">
          {title}
        </h3>

        <p className="font-manrope text-[#6B7280]
          text-sm leading-6
          sm:text-base sm:leading-7
          md:text-[15px] md:leading-[22px]
          lg:text-base lg:leading-[32px]
          overflow-hidden">
          {body}
        </p>
      </div>

      {/* Footer: avatar + name/role */}
      <div className="flex items-center gap-4 sm:gap-6">
        {avatarSrc ? (
          <img
            src={avatarSrc}
            alt={personName}
            className="w-12 h-12 sm:w-14 sm:h-14 lg:w-[56px] lg:h-[56px] rounded-full object-cover flex-shrink-0"
          />
        ) : (
          <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-[56px] lg:h-[56px] rounded-full bg-gray-200 flex-shrink-0" />
        )}

        <div className="flex flex-col gap-0.5">
          <span className="font-semibold text-black
            text-base leading-tight
            sm:text-lg sm:leading-tight
            lg:text-[20px] lg:leading-[1.2]">
            {personName}
          </span>
          {personRole && (
            <span className="font-semibold text-light-dark
              text-sm leading-tight
              sm:text-base sm:leading-tight
              lg:text-[18px] lg:leading-[1.2]">
              {personRole}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
