import ExploreLabs from "../components/cloudLabsComponents/ExploreLabs";
import GetAccess from "../components/cloudLabsComponents/GetAccess";
import HandsOnCloudLabs from "../components/cloudLabsComponents/HandsOnCloudLabs";
import HeroSection from "../components/cloudLabsComponents/HeroSection";
import QwikSkillsForBusiness from "../components/cloudLabsComponents/QwikSkillsForBusiness";
import RealizePotential from "../components/cloudLabsComponents/RealizePotential";
import FAQ from "../components/shared/FAQ";
import Header from "../components/shared/Header/Header";

const cloudLabs = () => {
  return (
    <div>
      {/* title  */}
      <Header title={"Cloud Labs - Qwikskills"} />
      {/* main content  */}
      <HeroSection />
      <ExploreLabs />
      <HandsOnCloudLabs />
      <RealizePotential />
      <GetAccess />
      <QwikSkillsForBusiness />
      <FAQ />
    </div>
  );
};

export default cloudLabs;
