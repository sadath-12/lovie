import React from "react";
import Image from "next/image";

const BlogCard = ({ image, title, writerName, date }) => {
  return (
    <div>
      <div className="min-h-[24rem] min-w-[24rem] relative">
        <Image src={image} objectFit="cover" layout="fill" />
      </div>
      <div className="mt-4">
        <h4 className="text-lg font-medium">{title}</h4>
        <p className="text-gray-500 text-sm">{writerName}</p>
        <p className="text-gray-500 text-sm">{date}</p>
      </div>
    </div>
  );
};

export default BlogCard;
