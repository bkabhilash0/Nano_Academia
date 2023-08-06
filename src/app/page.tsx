import About from "@/components/About";
import Banner from "@/components/Banner";
import CourseSlider from "@/components/CourseSlider";
import CourseTitleCard from "@/components/CourseTitleCard";
import Courses from "@/components/Courses";
import CoursesTitleSection from "@/components/CoursesTitleSection";
import Footer from "@/components/Footer";
import FooterLink from "@/components/FooterLink";
import FooterLinkList from "@/components/FooterLinkList";
import Header from "@/components/Header";
import Heading from "@/components/Heading";
import Navbar from "@/components/Navbar";
import Stats from "@/components/Stats";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "Nanoacademia - Start Learning Today",
  description:
    "Discover a world of knowledge and skill-building with [Your Online Course Provider]'s premier platform for online learning. Explore an extensive catalog of high-quality courses, taught by industry experts, designed to empower learners of all backgrounds. Enroll today to advance your career, boost your personal development, and unlock your full potential. Whether you're a professional seeking to upskill, a student seeking supplemental learning, or an enthusiast eager to explore new passions, we have the perfect online course for you. Join our vibrant learning community and embark on a transformative educational journey from the comfort of your own home.",
};

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <About />
      <Stats />
      <Courses />
      <CoursesTitleSection />
      <div className="py-12 bg-primaryColor w-full h-56"></div>
      <Footer />
    </>
  );
};

export default Home;
