import React from "react";
import Layout from "../../components/layout/Layout";
import Image from "next/image";
import sellerImage from "../../../public/sellerstore.png";
import { AiFillStar } from "react-icons/ai";
import {BsFacebook} from 'react-icons/bs'
import {GrInstagram} from 'react-icons/gr'
import {BsTwitter} from 'react-icons/bs'
import {SiTiktok} from 'react-icons/si'

const FollowSeller = () => {
  const categories = [];
  return (
    <Layout categories={categories}>
      <div className="flex flex-col relative items-center p-2 lg:flex-row   space-x-3">
        <div className="flex-0.4">
          <Image
            src={sellerImage}
            width={500}
            height={400}
            objectFit="contain"
          />
        </div>

        

        <div className="flex-1 items-start">

<div className="p-2 text-sm text-gray-200 bg-gray-500 w-[120px] rounded-sm absolute top-[500px] lg:top-3 right-5">
    925 <span>Followers</span> 
</div>

          <h1 className="font-medium text-gray-400">STORE</h1>

          <div className="mt-10 space-y-5 justify-around">
            <h2 className="text-3xl font-cool font-semibold text-gray-800">BODONI</h2>
            <div>

            <h3 className="font-medium text-gray-500">Spain</h3>
            <p className="flex items-center space-x-2">
              {" "}
              <AiFillStar className="text-orange-600"/> <AiFillStar className="text-orange-600" /> <AiFillStar className="text-orange-600"/> <AiFillStar className="text-orange-600"/>{" "}
              <span className="text-xs text-gray-400">623 reviews</span>{" "}
            </p>
            </div>
            <div className="flex space-x-2">
              <p className="text-sm flex items-center space-x-2 gap-1">
                <span className="bg-orange-600 text-white text-xs p-1 rounded-md space-x-1">HS</span>101
              </p>
              <p className="text-sm flex items-center space-x-2 gap-1">
                <span className="bg-[#327357] text-white text-xs p-1 rounded-md space-x-1">OS</span>35
              </p>
            </div>

            <div>
              <p className="font-inter text-sm tracking-wide text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex in
                quisquam debitis obcaecati excepturi rem officia qui fugiat,
                quasi aliquam exercitationem dolorem praesentium voluptas
                mollitia ipsam iste amet beatae quae.
              </p>
            </div>


<button className="bg-[#327357] text-white font-medium text-sm py-2 px-3 rounded-sm">CONTACT SELLER</button>

<div className="flex items-center justify-end space-x-5 p-3">
    <p><BsFacebook className="text-blue-800 text-2xl" /> </p>
    <p> <GrInstagram className="text-pink-700 text-2xl"/> </p>
    <p><BsTwitter className="text-blue-700 text-2xl"/> </p>
    <p><SiTiktok className=" text-2xl"/></p>
</div>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FollowSeller;
