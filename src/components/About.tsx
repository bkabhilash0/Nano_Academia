import React from "react";
import AboutCard from "./AboutCard";
import { RiBook3Line } from "react-icons/ri";
import Image from "next/image";
import Subtitle from "./Subtitle";
import Heading from "./Heading";

const About = () => {
  return (
    <section className="px-3 bg-gray-100">
      <div className="w-full max-w-screen-xl mx-auto md:grid md:grid-cols-2 md:gap-x-10">
        <div className="relative h-full">
          <Image
            src={"/images/nano_logo.png"}
            fill
            alt="About"
            className="object-contain"
          />
        </div>
        <div className="flex flex-col gap-y-2 py-10 lg:py-20 xl:py-24">
          <Subtitle text="Nano Academia" />
          <Heading
            text="Benefits About Courses At Nano Academia"
          />
          <ul className="rounded-sm shadow-sm list-none md:flex md:flex-col md:gap-y-2 lg:gap-y-4 lg:mt-3">
            <AboutCard
              Icon={RiBook3Line}
              title="Research Oriented Learning"
              desc="Our courses are mainy focused on research oniented practical 
              outcome based learning for students."
            />
            <AboutCard
              Icon={RiBook3Line}
              title="Earn a Certificate"
              desc="Earn a valid certification approved by various certifying partners
              at the successful completion of each course."
            />
            <AboutCard
              Icon={RiBook3Line}
              title="Learn from Experts"
              desc="All our tutors & trainers are well qualified techers, academicians
              and researchers."
            />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
