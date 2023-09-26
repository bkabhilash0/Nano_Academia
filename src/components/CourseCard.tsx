import { AiFillStar } from "react-icons/ai";
import Button from "./Button";
import { CourseSliderData } from "@/data/courses";
import { FC } from "react";

const CourseCard:FC<CourseSliderData> = ({title,author,duration}) => {
  return (
    <div className="bg-white p-7 text-left flex flex-col gap-y-10">
      <div className="flex gap-x-5">
        <div className="min-w-[80px] h-20 rounded-full bg-primaryColor"></div>
        <div className="">
          <h1 className="text-2xl font-semibold mb-2">
            {title}
          </h1>
          <div className="text-primaryColor text-lg flex gap-x-1 items-center mb-1">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <span>(5.0)</span>
          </div>
          <div className="flex gap-x-2 mb-1">
            <div className="w-6 h-6 rounded-full bg-primaryColor"></div>
            <p className="text-gray-400 font-semibold">by {author}</p>
          </div>
          <p className="text-primaryColor text-sm font-semibold">
            {duration}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-y-3">
        <p className="bg-gray-200 py-2 text-center rounded-sm text-primaryColor font-semibold">
          $100 All Course / $15 per month
        </p>
        <Button text="Enroll Now" />
      </div>
    </div>
  );
};

export default CourseCard;
