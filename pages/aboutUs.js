import CloudCertifications from "../components/aboutUsComponents/CloudCertifications";
import CTA from "../components/aboutUsComponents/CTA";
import DeepRooted from "../components/aboutUsComponents/DeepRooted";
import HeroSection from "../components/aboutUsComponents/HeroSection";
import OurMission from "../components/aboutUsComponents/OurMission";
import Team from "../components/aboutUsComponents/Team";
import Testimonials from "../components/HomeComponents/Testimonials";
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
      <Testimonials />
      <CloudCertifications />
      <CTA />
    </div>
  );
};

export default AboutUs;
