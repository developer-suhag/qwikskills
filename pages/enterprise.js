import BestWayLearn from "../components/enterpriseComponents/BestWayLearn";
import Business from "../components/enterpriseComponents/Business";
import FastTrack from "../components/enterpriseComponents/FastTrack";
import HeroSection from "../components/enterpriseComponents/HeroSection";
import IncreaseProductivity from "../components/enterpriseComponents/IncreaseProductivity";
import Testimonials from "../components/enterpriseComponents/Testimonials";
import VideoSection from "../components/enterpriseComponents/VideoSection";
import WhyQwikSkills from "../components/enterpriseComponents/WhyQwikSkills";
import FAQ from "../components/shared/FAQ";
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
      <Business />
      <BestWayLearn />
      <VideoSection />
      <Testimonials />
      <FAQ />
      <FastTrack />
    </div>
  );
};

export default Enterprise;
