import { IconType } from "react-icons";
import { FaCalendarDay } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import { BiBook } from "react-icons/bi";

export interface Stat {
  Icon: IconType;
  value: string;
  title: string;
}

export const stats: Stat[] = [
  {
    Icon: SiGooglescholar,
    title: "Students Trained",
    value: "3,000+",
  },
  {
    Icon: FaCalendarDay,
    title: "Trusted Tutors",
    value: "30",
  },
  {
    Icon: FaCalendarDay,
    title: "Schedules",
    value: "9000",
  },
  {
    Icon: BiBook,
    title: "Courses",
    value: "18",
  },
];
