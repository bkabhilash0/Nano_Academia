import React from "react";
import StatItem from "./StatItem";
import { stats } from "@/data/stats";

const Stats = () => {
  return (
    <div className="stats py-24 px-3 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
      <ul className="list-none flex flex-col gap-y-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 w-full max-w-screen-xl mx-auto">
        {stats.map((stat, index) => (
          <StatItem key={stat.title.concat(index.toString())} {...stat} />
        ))}
      </ul>
    </div>
  );
};

export default Stats;
