import React from "react";

interface Props {
  text: string;
}
const Subtitle: React.FC<Props> = ({ text }) => {
  return (
    <h3 className="font-bold uppercase text-primaryColor lg:text-lg">{text}</h3>
  );
};

export default Subtitle;
