import { Course } from "@/data/courses";
import React from "react";

const CourseTitleCard: React.FC<Course> = ({ title, caption }) => {
  return (
    <div className="flex flex-col items-center gap-y-3 bg-white rounded p-8 hover:bg-primaryColor transition-all group shadow cursor-pointer lg:py-10">
      <div className="w-20 h-20 rounded-full bg-primaryColor mb-2 group-hover:bg-white transition-all"></div>
      <h2 className="text-xl font-bold group-hover:text-white transition-all">
        {title}
      </h2>
      <p className="bg-gray-200 text-primaryColor p-1 px-2 text-sm font-semibold">
        {caption}
      </p>
    </div>
  );
};

export default CourseTitleCard;
