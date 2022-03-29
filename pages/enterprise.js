import HeroSection from "../components/enterpriseComponents/HeroSection";
import IncreaseProductivity from "../components/enterpriseComponents/IncreaseProductivity";
import Header from "../components/shared/Header/Header";

const Enterprise = () => {
  return (
    <div>
      {/* title  */}
      <Header title={"Enterprise - Qwikskills"} />
      {/* main content  */}
      <HeroSection />
      <IncreaseProductivity />
    </div>
  );
};

export default Enterprise;
