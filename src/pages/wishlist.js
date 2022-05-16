import React, { useContext, useEffect } from "react";
import Layout from "../components/layout/Layout";
import Filters from "../components/Filters/Filters";
import Image from "next/image";
import SuperTitle from "../components/Typography/SuperTitle";
import Paragraph from "../components/Typography/Paragraph";
import StarReviews from "../components/DataDisplay/StarReviews";
import Heading from "../components/Typography/Heading";
import WishListButton from "../components/utils/WishListButton";
import { wishlistContext } from "../contexts/wishlistContext";

const wishlist = ({ categories }) => {
  const { wishListItems } = useContext(wishlistContext);

  return (
    <Layout categories={categories}>
      <div className="flex mt-20 mb-10 gap-20">
        {/* Filters */}
        <div className="w-[16rem] hidden md:block mt-[7.1rem]">
          {/* <h3 className="uppercase text-gray-500 text-2xl font-semibold w-[12rem]">
            WISHLIST
          </h3> */}
          <Filters />
        </div>
        <div className="flex-1 text-center">
          <h1 className="text-4xl uppercase font-bold text-coolBlack font-cool">
            Wishlist
          </h1>
          <p className="text-gray-400 text-md max-w-[48rem] mx-auto mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            labore maxime nobis ipsam unde eaque debitis.
          </p>

          {/* ITEMS */}
          <div className="grid grid-cols-3 gap-6 mt-10">
            {wishListItems.length
              ? wishListItems.map((item) => (
                  <div key={item.id}>
                    <div className="relative aspect-[8/10] group cursor-pointer">
                      <Image
                        src={item.supporting_images[0].url}
                        objectFit="cover"
                        layout="fill"
                      />
                      <WishListButton item={item} />
                    </div>
                    <div className="mt-2 text-left text-gray-600">
                      <div className="flex items-center justify-between gap-3 ">
                        <SuperTitle text={item.store.store_name} />
                      </div>

                      <Heading h3 text={item.name} size="text-lg" />
                      <div className="flex md:items-center flex-row sm:flex-col md:flex-row ">
                        <StarReviews />
                        <Paragraph
                          margin="ml-2 mt-0.5 sm:ml-0 md:ml-2"
                          text="387 reviews"
                          size="text-[0.7rem]"
                        />
                      </div>
                      <Heading
                        margin="mt-1 mb-4"
                        h3
                        text={`$${item.price}`}
                        size="text-base"
                      />
                      <div className="flex flex-col sm:flex-row item-start sm:items-center justify-between gap-2">
                        <button className="bg-coolOrange uppercase px-3 py-2 text-white rounded-md text-[0.6rem] flex-1">
                          Buy It Now
                        </button>
                        <button className="bg-coolOrange uppercase px-3 py-2 text-white rounded-md text-[0.6rem] flex-1">
                          Add to cart
                        </button>
                        <button className="bg-coolDarkGreen uppercase px-3 py-2 text-white rounded-md text-[0.6rem] flex-1">
                          Share
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default wishlist;

export async function getStaticProps() {
  const api = process.env.NEXT_PUBLIC_API;
  const categoryRes = await fetch(`${api}/categories`);
  const categoryData = await categoryRes.json();
  return {
    props: { categories: categoryData },
  };
}
