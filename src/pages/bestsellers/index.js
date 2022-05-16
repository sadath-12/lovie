import React from "react";
import Layout from "../../components/layout/Layout";
import Image from "next/image";
import Heading from "../../components/Typography/Heading";
import Logo from "../../components/utils/Logo";
import Link from "next/link";

const index = ({ categories }) => {
  return (
    <Layout categories={categories}>
      <div className="text-center mb-24">
        <div className="w-full h-[450px] relative">
          <Image src="/bestsellers.png" objectFit="cover" layout="fill" />
          <div className="absolute z-30  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center justify-center mb-4">
              <Logo color />
            </div>
            <h1 className="text-white text-center text-4xl font-cool uppercase">
              OUR BEST, CHOSEN BY YOU
            </h1>
          </div>
        </div>
        <div className="mt-16">
          <Heading h1 text="Our Bestsellers" size="text-4xl" />
          <p className="text-gray-400 text-md max-w-[38rem] mx-auto mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            labore maxime nobis ipsam unde eaque debitis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-24">
          {categories.map((category) => (
            <Link
              href="/bestsellers/[category]"
              as={`/bestsellers/${category.slug}`}
            >
              <a>
                <div
                  key={category.id}
                  className="relative h-[467px] group cursor-pointer"
                >
                  <Image src={category.image} objectFit="cover" layout="fill" />
                  <div className="group-hover:bg-opacity-60 transition duration-150 absolute h-full w-full bg-coolBlack bg-opacity-0"></div>
                  <h1 className="font-cool font-medium text-white text-3xl uppercase absolute right-4 bottom-4">
                    {category.name}
                  </h1>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default index;

export async function getStaticProps(ctx) {
  const api = process.env.NEXT_PUBLIC_API;

  const res = await fetch(`${api}/categories`);
  const data = await res.json();

  return {
    props: { categories: data },
    revalidate: 200,
  };
}
