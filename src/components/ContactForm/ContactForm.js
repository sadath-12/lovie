import React from "react";
import Button from "../inputs/Button";
import { Messenger } from "../icons/SocialIcons";

const ContactForm = ({ source }) => {
  return (
    <form>
      <div className="flex flex-col sm:flex-row items-center justify-between mt-4">
        <div className="flex flex-col w-full sm:mr-3">
          <label className="text-xs mb-1">First Name</label>
          <input
            className="border border-coolBlack rounded-md px-2 py-1.5 text-sm"
            type="text"
          />
        </div>
        <div className="flex flex-col w-full sm:ml-3">
          <label className="text-xs mb-1">Last Name</label>
          <input
            className="border border-coolBlack rounded-md px-2 py-1.5 text-sm"
            type="text"
          />
        </div>
      </div>
      <div className="flex flex-col w-full mt-4">
        <label className="text-xs mb-1">Email</label>
        <input
          className="border border-coolBlack rounded-md px-2 py-1.5 text-sm"
          type="email"
        />
      </div>
      <div className="flex flex-col w-full mt-4">
        <label className="text-xs mb-1">{source && source === 'ipPage' ? 'Product LAID (Find it on product page)' : 'Subject'}</label>
        <input
          className="border border-coolBlack rounded-md px-2 py-1.5 text-sm"
          type="email"
        />
      </div>

      <div className="flex flex-col w-full mt-4">
        <label className="text-xs mb-1">Message</label>
        <textarea className="border border-coolBlack rounded-md px-2 py-1.5 text-sm" />
      </div>
      <div className="flex items-center justify-between">
        <Button
          text="Submit"
          color="bg-coolDarkGreen"
          margin="mt-4"
          padding="py-2 px-14"
        />
        <button className="flex items-center bg-white border border-[#B7B7B7] rounded-md px-2 lg:px-2.5 py-1.5 lg:py-1.5 text-xs mt-4 self-end">
          <Messenger size="30" />
          <div className="flex flex-col ml-4 items-start">
            <span>Need help?</span>
            <span className="underline hidden lg:block self-end text-[0.7rem] text-gray-400">
              Live chat or message us!
            </span>
          </div>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
