import { useRouter } from "next/router";
import React, { useState } from "react";
import DeliveryDetails from "../components/Confirmation/DeliveryDetails";
import PaymentDetails from "../components/Confirmation/PaymentDetails";
import Summary from "../components/Confirmation/Summary";
import WhatHappens from "../components/Confirmation/WhatHappens";
import Button from "../components/inputs/Button";
import TextInput from "../components/inputs/TextInput";
import Layout from "../components/layout/Layout";
import { Checkmark, ChevronBack } from "react-ionicons";

const confirmation = ({ categories }) => {
  const router = useRouter();
  const [selected, setSelected] = useState(true);
  return (
    <Layout categories={categories}>
      <div className="flex flex-col items-center my-14">
        <h1 className="uppercase text-center tracking-[-2.4px] font-cool text-4xl mb-8 font-semibold">
          Thank you for your purchase!
        </h1>
        <Button color="bg-coolDarkGreen" text="Print Order" />
        <p className="mt-6">
          <span className="font-semibold">Order number:</span> 012345678
        </p>
        <p className="mt-2 text-center">
          You should receive an confirmation order to{" "}
          <span className="font-semibold">
            yourname@email.com - be sure to check your spam!
          </span>
        </p>
        <div className="mt-10 flex flex-col items-center">
          <h2 className="text-2xl font-semibold">
            Save your details for a faster checkout
          </h2>
          <label className="text-center mb-1 mt-4">Choose a password</label>
          <TextInput width="w-full" type="password" placeholder="*******" />
          <div className="flex items-center my-8">
            <button
              type="button"
              className={`${
                selected
                  ? "bg-coolDarkGreen border border-white"
                  : "border border-coolDarkGreen"
              } rounded-md`}
            >
              <Checkmark color="white" />
            </button>
            <p className="text-sm text-coolDarkGreen ml-3">
              Save payment details
            </p>
          </div>

          <Button text="Create Account" color="bg-coolDarkGreen text-xl" />
          <p className="text-xs text-gray-500 decoration-dotted  underline mt-4">
            We respect your privacy
          </p>
        </div>
        <div className="max-w-[40rem] mx-auto">
          <DeliveryDetails />
          <WhatHappens />
          <Summary />
          <PaymentDetails />

          <button
            onClick={() => router.push("/")}
            className="bg-coolDarkGreen py-2 px-4 uppercase rounded-lg text-white text-md flex items-center mt-10"
          >
            <ChevronBack color="white" height="18px" width="18px" />
            <span className="ml-2">Continue Shopping</span>
          </button>
          <div className="border-t border-coolBlack mt-10 pt-4">
            <p className="font-medium mb-4">Please note:</p>
            <p className="text-xs">
              This acknowledges that your order has been received but not
              confirmed. Confirmation is subject to stock, payment, description
              and price verification and validation. Once this is complete,
              payment will be taken and your order will be dispatched. If there
              are any problems, you will be contacted by our Customer Service
              team.{" "}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default confirmation;

export async function getStaticProps() {
  const api = process.env.NEXT_PUBLIC_API;
  const categoryRes = await fetch(`${api}/categories`);
  const categoryData = await categoryRes.json();
  return {
    props: { categories: categoryData },
  };
}
