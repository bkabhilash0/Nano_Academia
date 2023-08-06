import { Stat } from "@/data/stats";
import React from "react";

const StatItem: React.FC<Stat> = ({ Icon, title, value }) => {
  return (
    <li className="z-10 flex gap-x-5 items-center">
      <div className="text-white text-4xl">
        <Icon />
      </div>
      <div className="flex flex-col ">
        <h2 className="text-white text-[40px] font-bold">{value}</h2>
        <p className="text-gray-200 uppercase">{title}</p>
      </div>
    </li>
  );
};

export default StatItem;
