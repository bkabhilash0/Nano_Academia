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
            src={"/images/about.webp"}
            fill
            alt="About"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col gap-y-2 py-10 lg:py-20 xl:py-24">
          <Subtitle text="Learn Anything" />
          <Heading text="Benefits About Online Learning Expertise" />
          <ul className="rounded-sm shadow-sm list-none md:flex md:flex-col md:gap-y-2 lg:gap-y-4 lg:mt-3">
            <AboutCard
              Icon={RiBook3Line}
              title="Online Courses"
              desc="Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts."
            />
            <AboutCard
              Icon={RiBook3Line}
              title="Online Courses"
              desc="Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts."
            />
            <AboutCard
              Icon={RiBook3Line}
              title="Online Courses"
              desc="Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts."
            />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
