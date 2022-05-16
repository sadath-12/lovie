import React from "react";
import Layout from "../../components/layout/Layout";
import { preOrders } from "../../data/";
import Filters from "../../components/Filters/Filters";
import Image from "next/image";
import StarReviews from "../../components/DataDisplay/StarReviews";
import Link from "next/link";

const index = ({ categories }) => {
  return (
    <Layout categories={categories}>
      <div className="flex flex-col md:flex-row mt-20 mb-10 gap-20">
        {/* Filters */}
        <div className="w-[16rem] hidden md:block mt-[9.5rem]">
          {/* <h3 className="uppercase text-2xl text-gray-500 font-semibold w-[12rem]">
            Pre-Order
          </h3> */}
          <Filters />
        </div>
        <div className="flex-1">
          <h1 className="text-4xl text-center uppercase text-coolBlack font-cool font-semibold">
            Pre-Order
          </h1>
          <p className="text-gray-400 text-md max-w-[48rem] text-center mx-auto mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            labore maxime nobis ipsam unde eaque debitis.
          </p>

          {/* ITEMS */}
          <div className="flex items-center gap-10 flex-wrap mt-20">
            {preOrders.map((preOrder) => (
              <Link href="/pre-orders/organic-cotton" key={preOrder.id}>
                <a className="grow">
                  <div className="relative h-[24rem] md:h-[30rem] w-full">
                    <Image
                      src={preOrder.image}
                      objectFit="cover"
                      layout="fill"
                    />
                  </div>
                  <div className="flex items-stretch justify-between mt-6">
                    <div className="h-full">
                      <p className="font-light uppercase text-sm">
                        {preOrder.tag}
                      </p>
                      <h3 className="text-xl font-medium mt-2 mb-1">
                        {preOrder.title}
                      </h3>
                      <div className="flex items-center">
                        <StarReviews />
                        <p className="text-gray-500 text-xs ml-2">
                          123 reviews
                        </p>
                      </div>
                      <p className="text-coolBlack text-lg font-semibold mt-1">
                        ${preOrder.price}
                      </p>
                    </div>
                    <div className="min-h-full flex flex-col">
                      <button className="bg-coolDarkGreen text-white px-4 text-sm py-4 hover:bg-opacity-70 transition duration-150">
                        Share to join Waitlist
                      </button>
                      <p className="text-sm mt-auto self-end">
                        On waitlist:{" "}
                        <span className="text-red-400 font-medium">
                          {preOrder.onWaitlist}
                        </span>{" "}
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
