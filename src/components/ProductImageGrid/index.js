import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronForward, ChevronBack } from "react-ionicons";
import WishListButton from "../utils/WishListButton";

const Arrows = ({ slideLeft, slideRight }) => {
  return (
    <div className="flex items-center justify-between w-full">
      <button className="p-2" onClick={() => slideLeft()}>
        <ChevronBack color="#363638" />
      </button>

      <button className="p-2" onClick={() => slideRight()}>
        <ChevronForward color="#363638" />
      </button>
    </div>
  );
};

const index = ({ supportingImages, item }) => {
  const [x, setX] = useState(0);

  const slideLeft = (index) => {
    x === 0 ? setX(0) : setX(x + 30);
  };

  const slideRight = (index) => {
    x === -30 * (supportingImages.length - 1) ? setX(0) : setX(x - 30);
  };

  return (
    <div className="flex flex-col-reverse space-x-4 lg:flex-row md:sticky lg:top-44">
      <div className="flex justify-between lg:flex-col mt-5 lg:mt-0 max-h-[37.5rem] overflow-y-scroll categories ">
        {supportingImages.map((image, index) => (
          <button
            onClick={() => setX(index * -30)}
            key={image.id}
            className="relative h-[4rem] w-[4rem] lg:min-h-[10rem] lg:w-[8rem] mb-4 flex flex-col mr-4 lg:mr-0"
          >
            <Image src={image.url} objectFit="cover" layout="fill" />
            <div className="h-full w-full bg-black absolute top-0 left-0 hover:opacity-100 opacity-0 bg-opacity-20 transition duration-200"></div>
          </button>
        ))}
        {supportingImages.map((image, index) => (
          <button
            onClick={() => setX(index * -30)}
            key={image.id}
            className="relative h-[4rem] w-[4rem] lg:min-h-[10rem] lg:w-[8rem] mb-4 flex flex-col mr-4 lg:mr-0"
          >
            <Image src={image.url} objectFit="cover" layout="fill" />
            <div className="h-full w-full bg-black absolute hover:opacity-100 opacity-0 bg-opacity-20 transition duration-200"></div>
          </button>
        ))}
        <div className="hidden lg:block absolute z-50 bottom-0 transform left-14">
          <ChevronDown color="white" />
        </div>
      </div>

      <div className="relative cursor-pointer group bg-coolBlack">
        <div className="z-20 absolute w-full top-1/2 transform -translate-y-1/2">
          <Arrows slideLeft={slideLeft} slideRight={slideRight} />
        </div>
        <div className="flex overflow-x-hidden min-w-full md:max-w-[30rem]">
          {supportingImages.map((image, index) => (
            <div
              key={index}
              style={{
                transform: `translate(${x}rem)`,
                transition: "0.4s ease-in-out",
              }}
              className="relative h-[20rem] lg:h-[37.5rem] min-w-full lg:min-w-[30rem] cursor-pointer"
            >
              <Image src={image.url} objectFit="cover" layout="fill" />
            </div>
          ))}
        </div>
        <div className="h-full w-full bg-black absolute absolute top-0 left-0 hover:opacity-100 opacity-0 bg-opacity-20 transition duration-200 z-10">
          <WishListButton item={item} />
        </div>
      </div>
    </div>
  );
};

export default index;
