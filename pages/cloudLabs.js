import ExploreLabs from "../components/cloudLabsComponents/ExploreLabs";
import GetAccess from "../components/cloudLabsComponents/GetAccess";
import HandsOnCloudLabs from "../components/cloudLabsComponents/HandsOnCloudLabs";
import HeroSection from "../components/cloudLabsComponents/HeroSection";
import RealizePotential from "../components/cloudLabsComponents/RealizePotential";
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
    </div>
  );
};

export default cloudLabs;
