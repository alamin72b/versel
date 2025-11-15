import React from 'react';

export type Logo = { id: string; src: string; alt?: string };

export type TrustedByMarqueeTailwindProps = {
  logos?: Logo[];
  duration?: number;
  brandColor?: string; // CSS color or var(--...)
};

interface MarqueeStyle extends React.CSSProperties {
  '--marquee-duration'?: string;
}

const defaultLogos: Logo[] = [
  { id: 'cubyn', src: 'app/assets/slider/cubyn.svg', alt: 'Cubyn' },
  { id: 'bastion', src: 'app/assets/slider/bastion.svg', alt: 'Bastion' },
  { id: 'digits', src: 'app/assets/slider/digits.svg', alt: 'Digits' },
  { id: 'pipe', src: 'app/assets/slider/pipe.svg', alt: 'Pipe' },
  { id: 'ramp', src: 'app/assets/slider/ramp.svg', alt: 'Ramp' },
];

export default function TrustedByMarqueeTailwind({
  logos = defaultLogos,
  duration = 20,
  brandColor = 'var(--color-brand)',
}: TrustedByMarqueeTailwindProps) {
  const items = [...logos, ...logos];

  const sectionStyle: MarqueeStyle = {
    background: brandColor,
    '--marquee-duration': `${duration}s`,
  };

  return (
    <section
      aria-label="Trusted by marquee"
      role="region"
      style={sectionStyle}
      className="
        w-full flex items-center justify-center
        overflow-x-hidden overflow-y-visible
        min-h-[168px] sm:min-h-[240px] md:min-h-[168px] lg:min-h-[168px] xl:min-h-[180px] 2xl:min-h-[168px]
      "
    >
      <style>{`
        @keyframes tbm-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .tbm-track {
          display: flex;
          align-items: center;
          width: 200%;
          animation: tbm-scroll var(--marquee-duration, 20s) linear infinite;
          will-change: transform;
        }
        .tbm-marquee:focus-within .tbm-track,
        .tbm-marquee:hover .tbm-track {
          animation-play-state: paused;
        }
      `}</style>

      <div
        className="
          flex flex-col gap-6 w-full items-center justify-between px-4 max-w-full h-auto 
          
          
          
          sm:max-w-screen-sm sm:px-8 
          md:max-w-screen-md md:h-[168px] md:flex-row md:px-10
          lg:max-w-screen-lg  lg:px-12
          xl:max-w-1080 
          2xl:max-w-[1440px]
          mx-auto
        "
      >
        {/* LABEL: mobile single line, md+ two lines */}
        <div className="flex-shrink-0 min-w-0 text-center md:text-left">
          {/* mobile: single line */}
          <p
            className="
              text-white font-roboto font-bold text-[16px] leading-[20px]
              sm:text-[18px] sm:leading-[24px]
              lg:text-[20px] lg:leading-[26px]
              md:hidden
            "
          >
            Trusted by Top Companies
          </p>

          {/* md+ : two lines */}
          <div className="flex-col hidden gap-1 md:flex">
            <p className="text-white font-roboto font-bold text-[16px] leading-[20px] sm:text-[18px] sm:leading-[24px] lg:text-[22px] lg:leading-[30px] xl:text-[24px] xl:leading-[34px]">
              Trusted by
            </p>
            <p className="text-white font-roboto font-bold text-[16px] leading-[20px] sm:text-[18px] sm:leading-[24px] lg:text-[22px] lg:leading-[30px] xl:text-[24px] xl:leading-[34px]">
              Top Companies
            </p>
          </div>
        </div>

        {/* Separator (hidden on small) */}
        <div className="hidden md:flex w-[64px] h-0 rotate-90 border bg-light-green" />

        {/* MARQUEE */}
        <div
          className="relative flex-1 w-full overflow-hidden tbm-marquee"
          tabIndex={0}
        >
          <div
            className="items-center gap-3 tbm-track sm:gap-4 md:gap-8 lg:gap-12 xl:gap-16"
            role="list"
            aria-label="Trusted companies logos"
          >
            {items.map((logo, i) => (
              <div
                key={`${logo.id}-${i}`}
                className={`
                  flex items-center justify-center flex-shrink-0
                  w-[88px] h-[44px]
                  sm:w-[100px] sm:h-[48px]
                  md:w-[120px] md:h-[56px]
                  lg:w-[140px] lg:h-[64px]
                  xl:w-[156px] xl:h-[64px]
                  2xl:w-[168px] 2xl:h-[64px]
                `}
                role="listitem"
              >
                <img
                  src={logo.src}
                  alt={i < logos.length ? (logo.alt ?? '') : ''}
                  className="block object-contain max-w-full max-h-full"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
