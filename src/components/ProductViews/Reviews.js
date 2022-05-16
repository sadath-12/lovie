import Image from "next/image";
import React, { useState } from "react";
import {
  Star,
  StarHalf,
  ChevronDown,
  ThumbsUpOutline,
  ThumbsDownOutline,
} from "react-ionicons";
import SearchIcon from "../icons/SearchIcon";
import Button from "../inputs/Button";
import Heading from "../Typography/Heading";
import Paragraph from "../Typography/Paragraph";

const Reviews = ({ reviews, imageUrl, productName }) => {
  const [openSort, setOpenSort] = useState(false);
  return (
    <div className="">
      <div className="flex gap-3 items-center">
        <div className="mr-2">
          <Heading size="text-xl" h3 text={`${reviews.length} review`} />
        </div>
        <Star height="26px" width="26px" color="#E5602D" />
        <Star height="26px" width="26px" color="#E5602D" />
        <Star height="26px" width="26px" color="#E5602D" />
        <Star height="26px" width="26px" color="#E5602D" />
        <StarHalf height="26px" width="26px" color="#E5602D" />
      </div>
      {/* INPUTS */}
      <div className="flex items-center mt-4">
        <div className="mr-6">
          <p className="mb-2 text-sm">Search Reviews:</p>
          <div className="border border-coolBlack w-[17rem] flex items-center">
            <input
              type="text"
              className="p-2 py-2 w-full focus:outline-none"
              placeholder="Search Reviews"
            />
            <div className="mr-3">
              <SearchIcon />
            </div>
          </div>
        </div>
        <div>
          <p className="mb-2 text-sm">Sort by:</p>
          <div
            onClick={() => setOpenSort(!openSort)}
            className="border relative border-coolBlack w-[17rem] flex items-center justify-between cursor-pointer"
          >
            <button
              type="button"
              className="p-2 py-2 w-full text-left focus:outline-none"
            >
              Search Reviews
            </button>
            <div className="mr-3 border-l border-coolBlack pl-2">
              <ChevronDown />
            </div>
            {openSort && (
              <div className="absolute top-11 left-0 w-full z-20 bg-white border border-coolBlack">
                <p className="hover:bg-gray-50 p-3 cursor-pointer">Time</p>
                <p className="hover:bg-gray-50 p-3 cursor-pointer">Stars</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* BUTTONS */}
      <div className="flex items-center justify-start mt-10">
        <Button color="bg-coolDarkGreen" margin="mr-9" text="Positive" />
        <Button color="bg-coolDarkGreen" margin="mr-9" text="Negative" />
        <Button color="bg-coolDarkGreen" margin="mr-9" text="Images" />
        <Button color="bg-coolDarkGreen" text="Videos" />
      </div>

      {/* Reviews */}
      <div className="mt-10">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="border-b border-borderColor mb-4 pb-4"
          >
            <div className="flex justify-between">
              <div>
                <div className="h-16 w-16 relative rounded-full overflow-hidden mb-4">
                  <Image
                    src="/man-tennis-court.jpg"
                    objectFit="cover"
                    layout="fill"
                  />
                </div>
                <Heading h3 text="John Doe" />
                <Paragraph
                  text="Berlin, Germany"
                  size="text-base"
                  margin="mt-1 mb-1"
                />
                <Paragraph text="10.10.2022" />
              </div>

              {/* REVIW WITH IMAGE AND DESCRIPTION */}
              <div className="">
                <div className="flex gap-3">
                  <div className="relative h-[10rem] w-[8rem]">
                    <Image
                      src={imageUrl[0].url}
                      objectFit="cover"
                      layout="fill"
                    />
                  </div>
                  <div className="relative h-[10rem] w-[8rem]">
                    <Image
                      src={imageUrl[1].url}
                      objectFit="cover"
                      layout="fill"
                    />
                  </div>
                </div>

                <div className="flex mt-4 gap-1">
                  <Star height="24px" width="24px" color="#E5602D" />
                  <Star height="24px" width="24px" color="#E5602D" />
                  <Star height="24px" width="24px" color="#E5602D" />
                  <StarHalf height="24px" width="24px" color="#E5602D" />
                  <StarHalf height="24px" width="24px" color="#E5602D" />
                </div>
                <Heading h3 text={productName} margin="mt-2" />
                <Paragraph text={review.review_description} />
                <div className="flex items-center mt-4">
                  <div className="mr-8 flex items-center">
                    <ThumbsUpOutline height="18px" width="18px" />
                    <Paragraph
                      margin="ml-3"
                      size="text-sm opacity-60"
                      text={review.upvotes}
                    />
                  </div>
                  <div className="flex items-center">
                    <ThumbsDownOutline height="18px" width="18px" />
                    <Paragraph
                      margin="ml-3"
                      size="text-sm opacity-60"
                      text={review.downvotes}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
