import React, { useContext, useEffect, useState } from "react";
import CheckoutForm from "../components/Checkout/CheckoutForm";
import Button from "../components/inputs/Button";
import Layout from "../components/layout/Layout";
import Heading from "../components/Typography/Heading";
import { cartContext } from "../contexts/cartContext";
import { cartContextTwo } from "../contexts/cartContextTwo";
import Image from "next/image";
import StarReviews from "../components/DataDisplay/StarReviews";
import SuperTitle from "../components/Typography/SuperTitle";
import { useRecoilState } from "recoil";
import { loginModal } from "../atoms/popup";
import LoginPop from "../components/popups/LoginPop";

const checkout = ({ categories }) => {
  // const { total } = useContext(cartContext);
  const { cartItems } = useContext(cartContextTwo);
  let total =
    cartItems !== null &&
    cartItems.reduce((a, b) => a + b.price * b.options.quantity, 0).toFixed(2);

  const [open, setOpen] = useRecoilState(loginModal)
  const handleSignIn = () => {
    setOpen(true)
  }

  return (
    <Layout categories={categories}>
      <LoginPop open={open} setOpen={setOpen} />

      <div className="my-14">
        <h1 className="uppercase tracking-[-2.4px] font-cool text-5xl font-medium w-[12rem] mb-8">
          Checkout
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-10 md:gap-40">
          {/* FIRST SECTION */}
          <div className="col-span-1">
            <div className="flex justify-between items-center">
              <Heading h4 size="text-sm" text="Already have an account?" />
              <Button onClick={handleSignIn} text="Sign in" color="bg-coolDarkGreen" />
            </div>
            <CheckoutForm cartItems={cartItems} />
          </div>

          {/* SECOND SECTION */}
          <div className="col-span-1 mt-[2.3rem]">
            <div className="border-b border-coolBlack mt-10 pb-4 flex justify-between items-center">
              <h2 className="uppercase tracking-[-1.5px] font-cool text-2xl font-medium ">
                Order Summary
              </h2>
            </div>
            <div className="">
              {cartItems !== null &&
                cartItems.map((item) => {
                  console.log(item);
                  return (
                    <div className="flex items-start gap-2 mt-3">
                      <div className="relative h-[200px] min-w-[125px]">
                        <Image
                          src={item.supporting_images[0].url}
                          objectFit="cover"
                          layout="fill"
                        />
                      </div>
                      <div className="-mt-[3px] ml-4">
                        <SuperTitle
                          size="text-md"
                          text={item.store.store_name}
                        />
                        <h3 className="text-[20px] lg:text-[20px] tracking-[-0.05em] font-medium antialiased">
                          {item.name}
                        </h3>
                        <div className="flex items-center gap-2 mt-0.5 mb-2">
                          <StarReviews />
                          <p className="text-xs text-textColor">321 reviews</p>
                        </div>
                        <p className="font-semibold text-xl text-md">{`$${item.price}`}</p>
                        <div className="flex items-center gap-2 mt-1.5">
                          <p className="font-normal text-sm text-coolBlack">
                            Style: {item.options.style}
                          </p>
                          <p className="capitalize text-sm text-coolBlack">
                            Color: {item.options.colours}
                          </p>
                          <p className=" text-sm text-coolBlack">
                            Size: {item.options.sizes.toUpperCase()}
                          </p>
                          <p className=" text-sm text-coolBlack">
                            Quantity: {item.options.quantity}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="mt-6 flex justify-between items-center">
              <p className="text-md text-coolBlack font-medium">
                Item(s) total:
              </p>
              <p className="text-md text-coolBlack">{`$${total}`}</p>
            </div>
            <div className="mt-2 flex justify-between items-center">
              <p className="text-md text-coolBlack font-medium">Shipping:</p>
              <p className="text-md text-coolBlack font-medium">$0.00</p>
            </div>
            <div className="flex flex-col items-end border-t border-coolBlack mt-6 pt-4 ">
              <h4 className="text-2xl">{`TOTAL: $${total}`}</h4>
              <div className="flex flex-col items-end mt-3">
                <p className="text-sm text-coolDarkGreen underline mb-4">
                  Got a Promo Code?
                </p>
                <input
                  type="text"
                  className="rounded-md border border-coolBlack px-2 py-1.5 text-sm"
                  placeholder=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default checkout;

export async function getStaticProps() {
  const api = process.env.NEXT_PUBLIC_API;
  const categoryRes = await fetch(`${api}/categories`);
  const categoryData = await categoryRes.json();
  return {
    props: { categories: categoryData },
  };
}
