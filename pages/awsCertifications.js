import React from "react";
import CourseSection from "../components/awsCertificationsComponents/CourseSection";
import HeroSection from "../components/awsCertificationsComponents/HeroSection";
import Header from "../components/shared/Header/Header";

const AWSCertifications = () => {
  return (
    <div>
      {/* title  */}
      <Header title={"AWS Certifications - Qwikskills"} />
      {/* main content  */}
      <HeroSection />
      <CourseSection />
    </div>
  );
};

export default AWSCertifications;
