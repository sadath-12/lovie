import React from "react";
import Layout from "../components/layout/Layout";
import Image from "next/image";
import ContactForm from "../components/ContactForm/ContactForm";
import {
  Brand,
  Income,
  Platform,
  Products,
} from "../components/icons/SocialIcons";

const HelpCreatorsGrow = ({ categories }) => {
  return (
    <Layout categories={categories}>
      <div className="relative w-full h-[30rem] object-top">
        <Image
          src="/help-creators-grow.png"
          objectFit="cover"
          layout="fill"
          className="object-top"
        />
        <div className="bg-coolBlack absolute w-full h-full bg-opacity-10 flex items-center justify-center flex-col">
          <h1 className="text-3xl md:text-4xl lg:text-5xl uppercase text-white font-semibold font-cool z-20 ">
            HELP CREATORS GROW
          </h1>
        </div>
      </div>
      <div className="mb-14 mt-40">
        <div className="text-center">
          <h1 className="uppercase tracking-[-2.4px] font-cool text-5xl font-semibold  mb-6 text-center">
            SUPPORT CREATORS TO GROW
          </h1>
          <p className="text-gray-500 text-lg">
            Lovie Aurora: a hassle-free shopping platform for both customers and
            creators
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 mt-20 mb-36">
          <div className="place-self-center mb-20 flex flex-col items-center">
            <Income />
            <p className="text-gray-500 mt-6">Reliable income stream</p>
          </div>
          <div className="place-self-center mb-20 flex flex-col items-center">
            <Platform />
            <p className="text-gray-500 mt-6">All-in-one selling platform</p>
          </div>
          <div className="place-self-center flex flex-col items-center">
            <Brand />
            <p className="text-gray-500 mt-6">Increase brand awareness</p>
          </div>
          <div className="place-self-center flex flex-col items-center">
            <Products />
            <p className="text-gray-500 mt-6">Develop your products</p>
          </div>
        </div>
        {/* CONTACT FORM */}
        <div className="max-w-[40rem] mx-auto">
          <h3 className="font-cool uppercase text-center font-semibold text-4xl mt-14 mb-10">
            Get in touch
          </h3>
          <ContactForm />
        </div>
      </div>
    </Layout>
  );
};

export default HelpCreatorsGrow;

export async function getStaticProps() {
  const api = process.env.NEXT_PUBLIC_API;
  const categoryRes = await fetch(`${api}/categories`);
  const categoryData = await categoryRes.json();
  return {
    props: { categories: categoryData },
  };
}
