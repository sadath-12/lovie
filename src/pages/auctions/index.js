import React from "react";
import Layout from "../../components/layout/Layout";
import { newArrivals } from "../../data/";
import Filters from "../../components/Filters/Filters";
import Image from "next/image";
import StarReviews from "../../components/DataDisplay/StarReviews";
import Link from "next/link";

const index = ({ categories }) => {
  console.log(newArrivals);
  return (
    <Layout categories={categories}>
      <div className="flex flex-col md:flex-row mt-20 mb-10 gap-20">
        {/* Filters */}
        <div className="w-[16rem] hidden md:block mt-[8.9rem]">
          {/* <h3 className="uppercase text-2xl text-gray-500 font-semibold w-[12rem]">
            Auction
          </h3> */}
          <Filters />
        </div>
        <div className="flex-1">
          <h1 className="text-4xl text-center font-semibold uppercase text-coolBlack font-cool">
            Auction
          </h1>
          <p className="text-gray-400 text-md max-w-[48rem] text-center mx-auto mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            labore maxime nobis ipsam unde eaque debitis.
          </p>

          {/* ITEMS */}
          <div className="flex items-center gap-10 flex-wrap mt-16">
            {newArrivals.map((preOrder) => (
              <Link href="/auctions/dress" key={preOrder.id}>
                <a className="grow mb-14">
                  <div className="relative h-[24rem] md:h-[30rem] w-full">
                    <Image
                      src={preOrder.image}
                      objectFit="cover"
                      layout="fill"
                    />
                  </div>
                  <div className="flex items-stretch justify-between mt-4">
                    <div className="h-full">
                      <p className="font-light uppercase text-sm">
                        {preOrder.tag}
                      </p>
                      <h3 className="text-xl font-medium">{preOrder.title}</h3>
                      <div className="flex items-center my-2">
                        <StarReviews />
                        <p className="text-xs text-gray-400 ml-2">
                          2274 reviews
                        </p>
                      </div>
                      <p className="font-light text-sm mt-3">
                        Current Bid: <span className="font-semibold">$60</span>
                      </p>
                      <p className="font-light text-sm">
                        Total Bids: <span className="font-semibold">6</span>
                      </p>
                    </div>
                    <div className="min-h-full flex flex-col items-end justify-end">
                      <p className="text-sm mt-auto self-end font-semibold">
                        2d, 14h, 12m, 6s remaining
                      </p>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default index;

export async function getStaticProps() {
  const api = process.env.NEXT_PUBLIC_API;
  const categoryRes = await fetch(`${api}/categories`);
  const categoryData = await categoryRes.json();
  return {
    props: { categories: categoryData },
  };
}
