import React from "react";

interface Props {
  text: string;
}

const Heading: React.FC<Props> = ({ text }) => {
  return (
    <h1 className="text-4xl leading-[50px] font-semibold mb-4 lg:text-5xl lg:leading-[65px]">
      {text}
    </h1>
  );
};

export default Heading;
