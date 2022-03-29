import HeroSection from "../components/enterpriseComponents/HeroSection";
import IncreaseProductivity from "../components/enterpriseComponents/IncreaseProductivity";
import WhyQwikSkills from "../components/enterpriseComponents/WhyQwikSkills";
import Header from "../components/shared/Header/Header";

const Enterprise = () => {
  return (
    <div>
      {/* title  */}
      <Header title={"Enterprise - Qwikskills"} />
      {/* main content  */}
      <HeroSection />
      <IncreaseProductivity />
      <WhyQwikSkills />
    </div>
  );
};

export default Enterprise;