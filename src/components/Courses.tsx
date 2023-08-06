import React from "react";
import Subtitle from "./Subtitle";
import Heading from "./Heading";

const CourseSlider = dynamic(() => import("./CourseSlider"), { ssr: false });
import dynamic from "next/dynamic";

const Courses = () => {
  return (
    <section className="py-24 px-3 text-center bg-gray-100">
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="mb-10">
          <Subtitle text="our courses" />
          <Heading text="Explore Our Popular Online Courses" />
        </div>
        <div>
          <CourseSlider />
        </div>
      </div>
    </section>
  );
};

export default Courses;
