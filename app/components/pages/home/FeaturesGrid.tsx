import React from 'react';
import FeatureCard from '~/components/atoms/FeatureCard';

export type FeaturesGridProps = {
  items?: {
    id?: string;
    title: string;
    description: string;
    icon?: string;
  }[];
};

const defaultItems = [
  {
    id: 'feat-1',
    title: 'Secure and Instant Cash Advances',
    description:
      'No more waiting weeks—convert daily credit card transactions into cash within 24 hours to keep your business running smoothly.',
    icon: 'app/assets/feature/icon-cash.svg',
  },
  {
    id: 'feat-2',
    title: 'Transparent and Fair Pricing Process',
    description:
      'No Hidden Fees, No Surprises. Enjoy clear, upfront pricing with flexible funding options, so you always know what to expect.',
    icon: 'app/assets/feature/icon-pricing.svg',
  },
  {
    id: 'feat-3',
    title: 'Flexible and Secure Payout Options',
    description:
      'We offer flexible and easy payout options tailored to your needs, ensuring quick access to your funds. Choose from multiple payment methods.',
    icon: 'app/assets/feature/icon-payout.svg',
  },
];

const FeaturesGrid: React.FC<FeaturesGridProps> = ({
  items = defaultItems,
}) => {
  return (
    <section className="py-40">
      <div
        className="
          max-w-[1440px]
          mx-auto
          px-4 sm:px-6
          md:px-10
          lg:px-16
          2xl:px-0
          text-left
        "
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 sm:gap-8 justify-items-center">
          {items.map((item, i) => (
            <FeatureCard
              key={i}
              id={item.id}
              title={item.title}
              description={item.description}
              iconSrc={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
