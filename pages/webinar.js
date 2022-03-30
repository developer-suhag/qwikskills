import Header from "../components/shared/Header/Header";
import HeroSection from "../components/webinarComponents/HeroSection";
import UpcomingWebinar from "../components/webinarComponents/UpcomingWebinar";

const Webinar = () => {
  return (
    <div>
      {/* title  */}
      <Header title="Webinar - Qwikskills" />
      {/* main content  */}
      <HeroSection />
      <UpcomingWebinar />
    </div>
  );
};

export default Webinar;
