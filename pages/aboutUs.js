import DeepRooted from "../components/aboutUsComponents/DeepRooted";
import HeroSection from "../components/aboutUsComponents/HeroSection";
import OurMission from "../components/aboutUsComponents/OurMission";
import Header from "../components/shared/Header/Header";

const AboutUs = () => {
  return (
    <div>
      {/* title  */}
      <Header title={"About Us - Qwikskills"} />
      {/* main content  */}
      <HeroSection />
      <OurMission />
      <DeepRooted />
    </div>
  );
};

export default AboutUs;
