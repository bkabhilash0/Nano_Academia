import React from "react";
import Subtitle from "./Subtitle";
import Heading from "./Heading";
import CourseTitleCard from "./CourseTitleCard";
import { courses } from "@/data/courses";

const CoursesTitleSection = () => {
  return (
    <section className="py-20 px-3 text-center bg-gray-100">
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="text-center">
          <Subtitle text="Courses" />
          <Heading text="Browse Our Online Courses" />
        </div>
        <div className="mt-12 flex flex-col gap-y-2 md:grid md:grid-cols-4 md:grid-rows-2 md:gap-5  lg:gap-x-2 lg:mt-16 xl:grid-cols-6 xl:gap-2">
          {courses.map((course, index) => (
            <CourseTitleCard
              key={course.title.toLowerCase().concat(index.toString())}
              {...course}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesTitleSection;
