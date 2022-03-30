import Header from "../components/shared/Header/Header";
import HeroSection from "../components/webinarComponents/HeroSection";
import OnDemandWebinar from "../components/webinarComponents/OnDemandWebinar";
import UpcomingWebinar from "../components/webinarComponents/UpcomingWebinar";

const Webinar = () => {
  return (
    <div>
      {/* title  */}
      <Header title="Webinar - Qwikskills" />
      {/* main content  */}
      <HeroSection />
      <UpcomingWebinar />
      <OnDemandWebinar />
    </div>
  );
};

export default Webinar;
