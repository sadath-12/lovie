import { useRouter } from "next/router";
import React, { useContext } from "react";
import CartItems from "../components/Cart/CartItems";
import Button from "../components/inputs/Button";
import Layout from "../components/layout/Layout";
import BigCartIcon from "../components/icons/BigCartIcon";
import { cartContextTwo } from "../contexts/cartContextTwo";

const cart = ({ categories }) => {
  const { cartItems } = useContext(cartContextTwo);
  const router = useRouter();
  return (
    <Layout categories={categories}>
      {cartItems.length !== 0 ? (
        <div className="my-14">
          <h1 className="uppercase tracking-[-2.4px] font-cool text-5xl font-bold w-[12rem]">
            Cart
          </h1>
          <CartItems cartItems={cartItems} />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center my-24">
          <h1 className="text-5xl uppercase text-coolBlack font-cool font-semibold mb-12">
            Cart
          </h1>
          <BigCartIcon />
          <p className="text-coolBlack antialiased text-md md:text-lg font-light max-w-[38rem] mx-auto mb-4 mt-10">
            Your cart seems to be empty. Let’s change that.
          </p>
          <Button
            onClick={() => router.push("/")}
            text="Start Shopping"
            color="bg-coolDarkGreen max-w-[26rem]"
            padding="py-1.5 px-16"
          />
        </div>
      )}
    </Layout>
  );
};

export default cart;

export async function getStaticProps() {
  const api = process.env.NEXT_PUBLIC_API;
  const categoryRes = await fetch(`${api}/categories`);
  const categoryData = await categoryRes.json();
  return {
    props: { categories: categoryData },
  };
}
