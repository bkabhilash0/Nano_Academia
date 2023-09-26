"use client";

import TinySlider, { TinySliderSettings } from "tiny-slider-react";
import "tiny-slider/dist/tiny-slider.css";
import CourseCard from "./CourseCard";
import { sliderData } from "@/data/courses";

const settings: TinySliderSettings = {
  lazyload: true,
  nav: false,
  controls: false,
  autoplay: true,
  autoplayButton: false,
  autoplayTimeout: 2500,
  items: 1,
  gutter: 10,
  autoplayButtonOutput: false,
  responsive: {
    768: {
      items: 2,
    },
    1200: {
      items: 3,
      gutter: 16,
    },
  },
  mouseDrag: true,
};

const CourseSlider = () => {
  return (
    <TinySlider settings={settings}>
      {sliderData.map((data) => (
        <div key={data.title} style={{ position: "relative" }}>
          <CourseCard {...data}/>
        </div>
      ))}
    </TinySlider>
  );
};

export default CourseSlider;
