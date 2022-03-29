import ExploreLabs from "../components/cloudLabsComponents/ExploreLabs";
import HandsOnCloudLabs from "../components/cloudLabsComponents/HandsOnCloudLabs";
import HeroSection from "../components/cloudLabsComponents/HeroSection";
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
    </div>
  );
};

export default cloudLabs;
