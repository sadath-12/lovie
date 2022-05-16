import Image from "next/image";
import React from "react";
import Filters from "../components/Filters/Filters";
import Layout from "../components/layout/Layout";
import ItemDescription from "../components/DataDisplay/ItemDescription";
import { newArrivals } from "../data";
import WishListButton from "../components/utils/WishListButton";

const index = ({ categories, items }) => {
  return (
    <Layout categories={categories}>
      <div className="w-full h-[450px] relative">
        <Image src="/sale-hero-image.png" objectFit="cover" layout="fill" />
      </div>
      <div className="flex flex-col md:flex-row mt-20 mb-10 gap-20">
        {/* Filters */}
        <div className="w-[16rem] hidden md:block mt-[7.1rem]">
          {/* <h3 className="uppercase text-gray-500 text-2xl font-semibold w-[12rem]">
            Sale
          </h3> */}
          <Filters />
        </div>
        <div className="flex-1">
          <h1 className="text-4xl text-center uppercase text-coolBlack font-cool font-bold">
            Sale
          </h1>
          <p className="text-gray-400 text-md max-w-[48rem] text-center mx-auto mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            labore maxime nobis ipsam unde eaque debitis.
          </p>

          {/* ITEMS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
            {items.map((item) => (
              <div key={item.id} className="mb-10">
                <div className="relative aspect-[8/10] group cursor-pointer">
                  <Image
                    src={item.supporting_images[0].url}
                    objectFit="cover"
                    layout="fill"
                  />

                  <p className="h-full w-full bg-black absolute hover:opacity-100 opacity-0 bg-opacity-20 transition duration-200 left-0 top-0"></p>

                  <WishListButton item={item} />
                </div>
                <ItemDescription
                  store_name={item.store.store_name}
                  name={item.name}
                  reviews={`${item.reviews.length} reviews`}
                  price={`$${item.price}`}
                  slug={item.store.slug}
                  remaining={item.remaining}
                  sale
                />{" "}
              </div>
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

  const res = await fetch(`${api}/items`);
  const data = await res.json();

  return {
    props: { categories: categoryData, items: data },
  };
}
