"use client";

import TinySlider, { TinySliderSettings } from "tiny-slider-react";
import "tiny-slider/dist/tiny-slider.css";
import CourseCard from "./CourseCard";

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
      <div key={1} style={{ position: "relative" }}>
        <CourseCard />
      </div>
      <div key={2} style={{ position: "relative" }}>
        <CourseCard />
      </div>
      <div key={3} style={{ position: "relative" }}>
        <CourseCard />
      </div>
      <div key={4} style={{ position: "relative" }}>
        <CourseCard />
      </div>
    </TinySlider>
  );
};

export default CourseSlider;
