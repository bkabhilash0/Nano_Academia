import React from "react";
import {IconType} from "react-icons";

interface Props{
    Icon:IconType;
    title:string;
    desc:string;
}

const AboutCard:React.FC<Props> = ({title,desc,Icon}) => {
  return (
    <li className="bg-white p-6 flex gap-x-5 hover:bg-primaryColor group transition-all duration-300">
      <div className="text-5xl text-primaryColor group-hover:text-white">
        <Icon />
      </div>
      <div className="flex flex-col gap-y-3">
        <h2 className="text-lg font-semibold group-hover:text-white">{title}</h2>
        <p className="text-gray-400 leading-7 group-hover:text-gray-200">
          {desc}
        </p>
      </div>
    </li>
  );
};

export default AboutCard;
