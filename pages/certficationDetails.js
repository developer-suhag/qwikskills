import CourseDetails from "../components/certificationDetailsComponents/CourseDetails";
import HeroSection from "../components/certificationDetailsComponents/HeroSection";
import RelatedCertifications from "../components/certificationDetailsComponents/RelatedCertifications";
import Header from "../components/shared/Header/Header";

const CertficationDetails = () => {
  return (
    <div>
      {/* title  */}
      <Header title={"Course Name - QwikSkils"} />
      {/* main content  */}
      <HeroSection />
      <CourseDetails />
      <RelatedCertifications />
    </div>
  );
};

export default CertficationDetails;
