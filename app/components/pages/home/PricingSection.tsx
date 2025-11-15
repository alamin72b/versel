import React from 'react';
import Badge from '../../atoms/Badge';
import Button from '../../atoms/Button';

interface PricingCardProps {
  title: string;
  rate: string;
  subtitle: string;
  description: string;
  features: string[];
  buttonText?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  rate,
  subtitle,
  description,
  features,
  buttonText = 'Get Started',
}) => {
  return (
    <div
      className="
        w-full max-w-[383px] h-auto
        rounded-[25px] p-6 sm:p-8 md:p-9
        flex flex-col gap-4 sm:gap-5 md:gap-6
        border-2 border-gray-200
        bg-gray-bg
        hover:bg-brand hover:border-brand
        transition-all duration-300 ease-in-out
        group
      "
    >
      {/* Header */}
      <div className="flex flex-col gap-2">
        <span className="font-bold transition-colors text-[24px] leading-[34px] font-manrope text-light-dark group-hover:text-white">
          {title}
        </span>
        <div className="flex items-baseline gap-4">
          <span className="text-4xl font-bold leading-[100%] transition-colors md:text-5xl font-roboto text-text-default group-hover:text-white">
            {rate}
          </span>
          <span className="transition-colors text-md font-manrope text-light-dark group-hover:text-gray-300">
            {subtitle}
          </span>
        </div>
      </div>

      {/* Button - Using your Button component */}
      <div className="w-full">
        <Button
          variant="outline"
          size="pricing"
          className="
            w-full
            group-hover:!bg-light-green 
            group-hover:!border-light-green
            group-hover:hover:!bg-[#b0d896]
            transition-all
          "
        >
          {buttonText}
        </Button>
      </div>

      {/* Description */}
      <p className="transition-colors text-[20px] leading-[28px] font-manrope text-light-dark group-hover:text-gray-200">
        {description}
      </p>

      {/* Features */}
      <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl">
        <span className="text-sm font-semibold font-manrope text-text-default">
          What's Included?
        </span>
        <ul className="flex flex-col gap-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <svg
                className="w-5 h-5 flex-shrink-0 mt-0.5"
                viewBox="0 0 20 20"
                fill="none"
              >
                <circle cx="10" cy="10" r="10" fill="var(--color-light-green)" />
                <path
                  d="M6 10l3 3 5-6"
                  stroke="var(--color-brand)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm font-manrope text-light-dark">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function PricingSection() {
  return (
    <section className="w-full py-16 bg-white sm:py-20 md:py-24 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 mb-12 text-center sm:gap-5 md:gap-6 sm:mb-16">
          <Badge size="why" tone="mint">
            Pricing
          </Badge>
          <h2 className="text-3xl 
          sm:text-4xl sm:leading-[40px]
          md:text-5xl md:leading-[56px]
          lg:text-6xl lg:leading-[68px]
          xl:text-[56px] 
          font-extrabold font-roboto text-text-default max-w-[700px]">
            Simple, Transparent Pricing No Hidden Fees!
          </h2>
          <p className="text-base sm:text-2xl leading-9 text-light-dark max-w-[600px] font-manrope">
            Trusted by Thousands of Business Owners See what our satisfied
            customers have to say about CASA.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col items-center justify-center gap-6 2xl:flex-row sm:gap-8 md:gap-9">
          <PricingCard
            title="Basic Plan"
            rate="2%"
            subtitle="Discount Rate"
            description="For businesses processing up to $10,000/month"
            features={[
              'Instant Fund Transfers',
              'Real-time Transaction Monitoring',
              'Seamless POS Integration',
              '24/7 Customer Support',
            ]}
          />

          <PricingCard
            title="Enterprise Plan"
            rate="Custom Rate"
            subtitle=""
            description="Tailored for high-volume businesses"
            features={[
              'Instant Fund Transfers',
              'Real-time Transaction Monitoring',
              'Seamless POS Integration',
              '24/7 Customer Support',
            ]}
          />

          <PricingCard
            title="Growth Plan"
            rate="1.5%"
            subtitle="Discount Rate"
            description="For businesses processing up to $10,000 – $50,000/month"
            features={[
              'Instant Fund Transfers',
              'Real-time Transaction Monitoring',
              'Seamless POS Integration',
              '24/7 Customer Support',
            ]}
          />
        </div>
      </div>
    </section>
  );
}
