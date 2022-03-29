import React from "react";
import CertifiedProfessionals from "../components/cloudCertificationsComponents/CertifiedProfessionals";
import CloudCertificationsFAQ from "../components/cloudCertificationsComponents/CloudCertificationsFAQ";
import CourseSection from "../components/cloudCertificationsComponents/CourseSection";
import HeroSection from "../components/cloudCertificationsComponents/HeroSection";
import ResearchPartner from "../components/cloudCertificationsComponents/ResearchPartner";
import WhyChooseQwikSkills from "../components/cloudCertificationsComponents/WhyChooseQwikSkills";
import WhyHighDemand from "../components/cloudCertificationsComponents/WhyHighDemand";
import Header from "../components/shared/Header/Header";

const CloudCertifications = () => {
  return (
    <div>
      {/* title  */}
      <Header title={"Cloud Certifications - Qwikskills"} />
      {/* main content  */}
      <HeroSection />
      <CourseSection />
      <ResearchPartner />
      <CertifiedProfessionals />
      <WhyHighDemand />
      <WhyChooseQwikSkills />
      <CloudCertificationsFAQ />
    </div>
  );
};

export default CloudCertifications;
