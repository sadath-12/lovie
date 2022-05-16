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
import SellerCTASection from "../components/sections/SellerCTASection";

const AboutUs = ({ categories }) => {
  return (
    <Layout categories={categories}>
      <div className="relative w-full h-[30rem] object-top">
        <Image
          src="/about-us.png"
          objectFit="cover"
          layout="fill"
          className="object-top"
        />
        <div className="bg-coolBlack absolute w-full h-full bg-opacity-10 flex items-center justify-center flex-col">
          <h1 className="text-3xl md:text-4xl lg:text-5xl uppercase text-white font-semibold font-cool z-20 ">
            ABOUT US
          </h1>
        </div>
      </div>
      <div className="mb-14 mt-40">
        <div className="text-center">
          <h1 className="uppercase tracking-[-2.4px] font-cool text-5xl font-semibold  mb-6 text-center">
            What is Lovie Aurora
          </h1>
          <p className="text-gray-500 text-lg">
            Lovie Aurora: a hassle-free shopping platform for both customers and
            creators
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 mt-20 mb-36">
          <div className="place-self-center mb-20 flex flex-col items-center">
            <Income />
            <p className="text-gray-500 mt-6">
              All of our products are uniquely designed with practicality
            </p>
          </div>
          <div className="place-self-center mb-20 flex flex-col items-center">
            <Platform />
            <p className="text-gray-500 mt-6">
              Almost all of our products are partly or completely handmade
            </p>
          </div>
          <div className="place-self-center flex flex-col items-center">
            <Brand />
            <p className="text-gray-500 mt-6">
              Most of our products are eco-friendly and bio-degradable
            </p>
          </div>
          <div className="place-self-center flex flex-col items-center">
            <Products />
            <p className="text-gray-500 mt-6">
              Our products are sold directly by their creators - no middlemen
            </p>
          </div>
        </div>
        {/* CONTACT FORM */}
        <div className="relative w-full h-[20rem] object-top">
          <Image
            src="/features-about-us.png"
            objectFit="cover"
            layout="fill"
            className="object-top"
          />
          <div className="bg-coolBlack absolute w-full h-full bg-opacity-10 flex items-center justify-center flex-col">
            <h1 className="text-3xl md:text-4xl lg:text-5xl uppercase text-white font-semibold font-cool z-20 ">
              Features
            </h1>
          </div>
        </div>

        <div className="flex items-start justify-center gap-10 mt-20">
          <div className="flex flex-col items-center flex-1">
            <h3 className="text-[150px] md:text-[230px] font-cool font-medium">
              1
            </h3>
            <div className="border-t-4 border-gray-300 mb-10 h-1 w-[10rem]"></div>
            <div>
              <h4 className="font-medium text-sm text-center md:text-left md:text-lg mt-2">
                Uniquely designed products
              </h4>
            </div>
          </div>

          <div className="flex flex-col items-center flex-1">
            <h3 className="text-[150px] md:text-[230px] font-cool font-medium">
              2
            </h3>
            <div className="border-t-4 border-gray-300 mb-10 h-1 w-[10rem]"></div>
            <div>
              <h4 className="font-medium text-sm text-center md:text-left md:text-lg mt-2">
                Free international shipping
              </h4>
            </div>
          </div>
        </div>
        <div className="flex items-start jsutify-center mt-10">
          <div className="flex flex-col items-center flex-1">
            <h3 className="text-[150px] md:text-[230px] font-cool font-medium">
              3
            </h3>
            <div className="border-t-4 border-gray-300 mb-10 h-1 w-[10rem]"></div>
            <div>
              <h4 className="font-medium text-sm text-center md:text-left md:text-lg mt-2">
                Pre-order discounts for customers
              </h4>
            </div>
          </div>

          <div className="flex flex-col items-center flex-1">
            <h3 className="text-[150px] md:text-[230px] font-cool font-medium">
              4
            </h3>
            <div className="border-t-4 border-gray-300 mb-10 h-1 w-[10rem]"></div>
            <div>
              <h4 className="font-medium text-sm text-center md:text-center md:text-lg mt-2">
                Open to customers and creators from all countries
              </h4>
            </div>
          </div>

          <div className="flex flex-col items-center flex-1">
            <h3 className="text-[150px] md:text-[230px] font-cool font-medium">
              5
            </h3>
            <div className="border-t-4 border-gray-300 mb-10 h-1 w-[10rem]"></div>
            <div>
              <h4 className="font-medium text-sm text-center md:text-left md:text-lg mt-2">
                Eco-friendly and recycled packaging
              </h4>
            </div>
          </div>
        </div>
        <SellerCTASection />
      </div>
    </Layout>
  );
};

export default AboutUs;

export async function getStaticProps() {
  const api = process.env.NEXT_PUBLIC_API;
  const categoryRes = await fetch(`${api}/categories`);
  const categoryData = await categoryRes.json();
  return {
    props: { categories: categoryData },
  };
}
