import React from "react";
import Header from "../components/shared/Header/Header";
const testimonials = [
  {
    id: "1",
    name: "Vishwa Jain",
    feedback:
      "“QwikSkills practice tests provide a comprehensive approach to cloud certifications, enabling you to focus on strengths and areas of improvement.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”",
    profile: "",
  },
];

const Testimonials = () => {
  return (
    <div>
      {/* title  */}
      <Header title="Testimonials - Qwikskills" />
      {/* man content  */}
    </div>
  );
};

export default Testimonials;
