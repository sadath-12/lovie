import React from "react";
import Heading from "../Typography/Heading";
import Paragraph from "../Typography/Paragraph";

const Description = ({ description }) => {
  return (
    <>
      <Paragraph size="text-base" text={description} />
    </>
  );
};

export default Description;
