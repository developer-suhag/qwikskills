import DeepRooted from "../components/aboutUsComponents/DeepRooted";
import HeroSection from "../components/aboutUsComponents/HeroSection";
import OurMission from "../components/aboutUsComponents/OurMission";
import Team from "../components/aboutUsComponents/Team";
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
      <Team />
    </div>
  );
};

export default AboutUs;
