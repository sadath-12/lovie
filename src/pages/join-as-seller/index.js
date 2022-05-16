import React from "react";
import HeroSection from "../../components/sections/HeroSection";
import Layout from "../../components/layout/Layout";
import FeaturesSection from "../../components/sections/FeaturesSection";
import OperationMethods from "../../components/sections/OperationMethods";
import SellerCTASection from "../../components/sections/SellerCTASection";

const JoinAsSeller = ({ categories }) => {
  return (
    <Layout categories={categories}>
      <HeroSection
        light
        imageUrl="/seller-hero.png"
        text={
          <p className="ml-20">
            READY TO EMBRACE <br /> THE WORLD?
          </p>
        }
        paragraph={
          <p className="ml-24">
            Sell directly to the whole world with Lovie Aurora
          </p>
        }
      />
      <div className="my-32 text-center max-w-[45rem] mx-auto">
        <h2 className="font-cool font-semibold text-5xl text-coolBlack">
          WHAT IS LOVIE AURORA?
        </h2>
        <p className="text-md font-semibold mt-8">
          Lovie Aurora is a multivendor eCommerce marketplace for creators from
          all over the world.
        </p>
        <p className="text-sm mt-6 leading-relaxed">
          We aim to craft a hassle-free shopping platform for customers and
          creators. How can Lovie Aurora achieve this goal? Firstly, we have the
          strict screen system to evaluate creators and their products to make
          sure they meet our standards such as authenticity, creativity and
          safety of raw material.
        </p>
        <p className="text-sm mt-4 leading-relaxed">
          Meanwhile, we design an all-in commission fee to charge creators
          rather than a complicated fee system. This would guarantee the
          creators are able to focus on their profession and production and not
          to be bothered by store operation, etc.
        </p>
      </div>
      <FeaturesSection />
      <OperationMethods />
      <SellerCTASection />
    </Layout>
  );
};

export default JoinAsSeller;

export async function getStaticProps() {
  const api = process.env.NEXT_PUBLIC_API;
  const categoryRes = await fetch(`${api}/categories`);
  const categoryData = await categoryRes.json();
  return {
    props: { categories: categoryData },
  };
}
