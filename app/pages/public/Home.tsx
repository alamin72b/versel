export function meta() {
  return [{ title: "Home" }, { name: "Home", content: "Welcome to facto" }];
}
import HeroSection from "~/components/pages/home/hero-section";
import FeaturesGrid from '~/components/pages/home/FeaturesGrid';

import HeroSplit from '~/components/pages/home/HeroSplit';
import ThreeImageCards from '~/components/pages/home/ThreeImageCards';
import TrustedByMarquee from '~/components/pages/home/TrustedByMarquee';
import HowItWorksSection from "~/components/pages/home/HowItWorksSection";
import WhyCasa from "~/components/pages/home/WhyCasa";
import Testimonials from "~/components/pages/home/Testimonials";
import PricingSection from "~/components/pages/home/PricingSection";
import HeroCTA from "~/components/pages/home/HeroCTA";

PricingSection
const Home: React.FC = () => {

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-text">
      {/* centered content */}
      <div className="w-full max-w-[85%] xl:max-w-[1250px] 2xl:max-w-[1440px] mx-auto mb-1">
        <HeroSection />
        <ThreeImageCards />
      </div>

      {/* FULL-BLEED WRAPPER so the marquee spans the viewport, not the container */}
        <TrustedByMarquee />


      <HeroSplit
        eyebrow="About Casa Service"
        title="Revolutionizing Cash Flow for Business Owners!"
        description="Empowering businesses with faster cash access, CASA provides a secure, fast, and flexible solution to get early payments for credit card sales."
        ctaText="Join Now"
        onCtaClick={() => alert('Join clicked')}
      />
      <FeaturesGrid />
       {/* <HowItWorksSection /> */}
      <HowItWorksSection/>
      <WhyCasa/>
      <Testimonials/>
      <PricingSection/>
      <HeroCTA />

    </div>
  );
}

export default Home;
