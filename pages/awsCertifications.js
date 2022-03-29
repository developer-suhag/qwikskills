import React from "react";
import CourseSection from "../components/awsCertificationsComponents/CourseSection";
import HeroSection from "../components/awsCertificationsComponents/HeroSection";
import CertifiedProfessionals from "../components/cloudCertificationsComponents/CertifiedProfessionals";
import ResearchPartner from "../components/cloudCertificationsComponents/ResearchPartner";
import WhyChooseQwikSkills from "../components/cloudCertificationsComponents/WhyChooseQwikSkills";
import WhyHighDemand from "../components/cloudCertificationsComponents/WhyHighDemand";
import FAQ from "../components/shared/FAQ";
import Header from "../components/shared/Header/Header";

const AWSCertifications = () => {
  return (
    <div>
      {/* title  */}
      <Header title={"AWS Certifications - Qwikskills"} />
      {/* main content  */}
      <HeroSection />
      <CourseSection />
      <ResearchPartner />
      <CertifiedProfessionals />
      <WhyHighDemand />
      <WhyChooseQwikSkills />
      <FAQ />
    </div>
  );
};

export default AWSCertifications;
