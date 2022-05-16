import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import Heading from "../../components/Typography/Heading";
import Button from "../../components/inputs/Button";
import MultiChoice from "../../components/inputs/MultiChoice";
import ImageUpload from "../../components/inputs/ImageUpload";
import UniqueInput from "../../components/inputs/UniqueInput";
import OperationChoice from "../../components/inputs/OperationChoice";
import CallInput from "../../components/inputs/CallInput";
import { Checkmark } from "react-ionicons";
import CheckButton from "../../components/CheckButton";

const application = ({ categories }) => {
  const [terms, setTerms] = useState(false);
  return (
    <Layout categories={categories}>
      <div className="text-center mb-24">
        <Heading h1 text="SELLER APPLICATION FORM" size="text-5xl" />
        <p className="font-semibold mt-8">
          Ready to start your journey with Lovie Aurora?
        </p>
        <p className="mt-2">
          Please fill out this application form and Lovie Aurora will get back
          to you soon.
        </p>
        <form className="max-w-[40rem] mx-auto mt-10">
          <h3 className="uppercase mt-10 font-semibold mb-6 text-2xl font-cool">
            About you
          </h3>
          <div className="flex w-full gap-4">
            <div className="flex flex-col items-start w-full mt-4">
              <label className="text-sm mb-1 font-bold">First name</label>
              <input
                className="border w-full border-coolBlack rounded-md p-2"
                type="text"
              />
            </div>
            <div className="flex flex-col items-start w-full mt-4">
              <label className="text-sm mb-1 font-bold">Surname</label>
              <input
                className="border w-full border-coolBlack rounded-md p-2"
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-col items-start w-full mt-4">
            <label className="text-sm mb-1 font-bold">Email Address</label>
            <input
              className="border w-full border-coolBlack rounded-md p-2"
              type="email"
            />
          </div>
          <div className="flex flex-col items-start w-full mt-4">
            <label className="text-sm mb-1 font-bold">Contact Number</label>
            <input
              className="border w-full border-coolBlack rounded-md p-2"
              type="number"
            />
          </div>
          <div className="flex flex-col items-start w-full mt-4">
            <label className="text-sm mb-1 font-bold">Country</label>
            <input
              className="border w-full border-coolBlack rounded-md p-2"
              type="text"
            />
          </div>
          <div className="flex flex-col items-start w-full mt-4">
            <label className="text-sm mb-1 font-bold">Address</label>
            <textarea
              className="border w-full border-coolBlack rounded-md p-2"
              type="text"
              rows="4"
            />
          </div>
          <h3 className="uppercase mt-10 font-semibold mb-6 text-2xl font-cool">
            Your Brand
          </h3>
          <div className="flex flex-col items-start w-full mt-4">
            <label className="text-sm mb-1 font-bold">Brand name</label>
            <input
              className="border w-full border-coolBlack rounded-md p-2"
              type="text"
            />
          </div>
          <div className="flex flex-col items-start w-full mt-4">
            <label className="text-sm mb-1 font-bold">
              Website (if applicable)
            </label>
            <input
              className="border w-full border-coolBlack rounded-md p-2"
              type="text"
            />
          </div>
          <div className="flex flex-col items-start w-full mt-8">
            <label className="text-sm mb-1 font-bold">
              What category would best describe your brand?
            </label>
            <MultiChoice />
          </div>
          {/* <div className="flex flex-col items-start w-full mt-8">
            <label className="text-sm mb-1 font-bold">Years experience</label>
            <input
              className="border w-full border-coolBlack rounded-md p-2"
              type="number"
            />
          </div> */}
          <div className="flex flex-col items-start w-full mt-8">
            <label className="text-sm mb-1 font-bold">
  Number of patents
            </label>
            <UniqueInput />
          </div>

          <div className="flex flex-col items-start w-full mt-8">
           <label htmlFor="">write the number if you have more than 10 patents</label>

           <input type="number" className="p-1 border-2 w-[60px] rounded-md border-orange-500" />
          </div>

          <div className="flex flex-col items-start w-full mt-8 space-y-2">

<p>Upload the patent info to prove the number you claimed</p>
          <label for="input" className="text-white bg-coolOrange font-semibold text-sm px-3 py-1 rounded-md cursor-pointer" >
{/* <button  className="text-white bg-coolOrange font-semibold text-sm px-3 py-1 rounded-md" >Upload Proof</button> */}
Upload Proof
<input type="file" name="input" id="input" hidden onChange={(e)=>e.target.files[0]} />
          </label>
          </div>


          <div className="space-y-5">

<div className="flex items-start mt-3 flex-col">
  <h2 className="text-sm mb-1 font-bold">Size of workshop and office</h2>



<div className="flex items-center space-x-4">
        <CheckButton text='within 200 square meters' />
        <CheckButton text='more than 200 square meters' />
</div>


</div>


<div className="flex items-start mt-3 flex-col">
  <h2 className="text-sm mb-1 font-bold">Number of R&D staff</h2>



<div className="flex items-center space-x-4">
        <CheckButton text='only 1 R&D staff' />
        <CheckButton text='more than 1 R&D staff' />
</div>


</div>
</div>


          <div className="flex flex-col items-start w-full mt-8">
            <label className="text-sm mb-1 font-bold">
              Upload some examples of your product
            </label>
            <ImageUpload />
          </div>
          <div className="flex flex-col items-start w-full mt-8">
            <label className="text-sm mb-1 font-bold">
              Out of 10, how unique are your products?
            </label>
            <UniqueInput />
          </div>
          <div className="flex flex-col items-start w-full mt-8">
            <label className="text-sm mb-1 font-bold">
              Which Lovie Aurora operation modes do you prefer?
            </label>
            <OperationChoice />
          </div>
          <div className="flex flex-col items-start w-full mt-8">
            <label className="text-sm mb-1 font-bold">
              Are you willing to accept a video call to verify yourself and your
              products?
            </label>
            <CallInput />
          </div>

          <div className="text-left">
            <Button
              type="submit"
              text="Submit Application"
              color="bg-coolDarkGreen"
              margin="mt-8"
              padding="py-1.5 px-14"
            />
          </div>
          <div className="flex items-center mb-2 mt-6">
            <button
              onClick={() => setTerms(!terms)}
              type="button"
              className={`${
                terms ? "bg-coolOrange" : "bg-white"
              }  border border-coolOrange rounded-md`}
            >
              <Checkmark color="white" />
            </button>
            <p className="ml-3 text-sm text-gray-500">
              I agree to the Terms and Conditions and Privacy Policy
            </p>
          </div>
          <p className="font-smeibold text-left mt-6 text-sm">
            Please be patient. A Lovie Aurora representative will contact you
            regarding your application as soon as possible.
          </p>
        </form>
      </div>
    </Layout>
  );
};

export default application;

export async function getStaticProps() {
  const api = process.env.NEXT_PUBLIC_API;
  const categoryRes = await fetch(`${api}/categories`);
  const categoryData = await categoryRes.json();
  return {
    props: { categories: categoryData },
  };
}
