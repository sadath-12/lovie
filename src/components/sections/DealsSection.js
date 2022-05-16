import React from "react";
import Image from "next/image";
import Heading from "../Typography/Heading";

const DealsSection = () => {
  return (
    <section className="mt-[5rem]">
      <Heading h2 text="Deal of the day" margin="mb-4" />
      <div className="w-full h-[30rem] relative">
        <Image src="/deals.jpg" objectFit="cover" layout="fill" />
        <div className="bg-coolBlack bg-opacity-40 absolute w-full h-full z-10"></div>
        <div className="absolute bottom-10 left-10 z-20">
          <p className="font-light uppercase text-xs text-white">Cloth</p>
          <h3 className="text-xl font-medium text-white">Ribbed Button Vest</h3>
          <p className="font-semibold mt-1 text-white">$60</p>
        </div>
      </div>
    </section>
  );
};

export default DealsSection;
