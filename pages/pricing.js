import Business from "../components/pricingComponents/Business";
import FAQ from "../components/pricingComponents/FAQ";
import HeroSection from "../components/pricingComponents/HeroSection";
import PricingSection from "../components/pricingComponents/PricingSection";
import ReviewSection from "../components/pricingComponents/reviewSection";
import Header from "../components/shared/Header/Header";

const Pricing = () => {
  return (
    <div>
      {/* title  */}
      <Header title={"Pricing - Qwikskills"} />
      {/* main content  */}
      <HeroSection />
      <PricingSection />
      <ReviewSection />
      <Business />
      <FAQ />
    </div>
  );
};

export default Pricing;
