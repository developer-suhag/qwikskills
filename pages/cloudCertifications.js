import React from "react";
import CertifiedProfessionals from "../components/cloudCertificationsComponents/CertifiedProfessionals";
import CourseSection from "../components/cloudCertificationsComponents/CourseSection";
import HeroSection from "../components/cloudCertificationsComponents/HeroSection";
import ResearchPartner from "../components/cloudCertificationsComponents/ResearchPartner";
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
    </div>
  );
};

export default CloudCertifications;
