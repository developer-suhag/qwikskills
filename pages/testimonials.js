import React from "react";
import Header from "../components/shared/Header/Header";
import HeroSection from "../components/testimonialsComponents/HeroSection";
import TestimonialSection from "../components/testimonialsComponents/TestimonialSection";

const Testimonials = () => {
  return (
    <div>
      {/* title  */}
      <Header title="Testimonials - Qwikskills" />
      {/* man content  */}
      <HeroSection />
      <TestimonialSection />
    </div>
  );
};

export default Testimonials;
