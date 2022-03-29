import ExploreLabs from "../components/cloudLabsComponents/ExploreLabs";
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
    </div>
  );
};

export default cloudLabs;
