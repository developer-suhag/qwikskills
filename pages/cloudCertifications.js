import React from "react";
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
    </div>
  );
};

export default CloudCertifications;
