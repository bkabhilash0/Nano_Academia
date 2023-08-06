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
    title: "Success Stories",
    value: "3,000",
  },
  {
    Icon: FaCalendarDay,
    title: "Success Tutors",
    value: "300",
  },
  {
    Icon: FaCalendarDay,
    title: "Schedules",
    value: "1,000",
  },
  {
    Icon: BiBook,
    title: "Courses",
    value: "587",
  },
];
