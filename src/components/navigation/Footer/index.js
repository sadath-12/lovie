import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  LogoInstagram,
  LogoTwitter,
  LogoFacebook,
  LogoTiktok,
  ChatbubblesOutline,
  GlobeOutline,
  ChevronDown,
} from "react-ionicons";
import TextLogo from "../../utils/TextLogo";
import {
  Chat,
  FacebookIcon,
  InstagramIcon,
  Messenger,
  TikTok,
  TwitterIcon,
} from "../../icons/SocialIcons";

const Footer = () => {
  return (
    <div className="bg-[#F2F2F2] w-full pt-16 pb-6">
      <div className="max-w-[1320px] px-4 md:px-8 mx-auto">
        <div className="flex items-start gap-10 lg:flex-nowrap flex-wrap justify-between">
          <div className="w-full mr-2">
            <div className="-mt-1.5">
              <TextLogo size1="280" size2="50" />
              <div className="flex items-center gap-3">
                <div className="border border-coolBlack bg-white px-1 py-0.5 flex items-center max-w-[9rem] rounded-md justify-end mt-3">
                  <GlobeOutline height="16px" width="16px" />
                  <span className="ml-2 mr-auto text-xs pr-3">English</span>
                  <ChevronDown height="16px" width="16px" />
                </div>
                <div className="border border-coolBlack bg-white px-1 py-0.5 flex items-center max-w-[13rem] rounded-md justify-end mt-3">
                  <span className="uppercase font-semibold text-xs">CAD</span>
                  <span className="ml-2 mr-2 truncate elipsses text-xs">
                    {" "}
                    - Canadian Dollar
                  </span>
                  <ChevronDown height="16px" width="16px" />
                </div>
              </div>
            </div>

            <div className="flex flex-col mt-5">
              <Link href="/about-us">
                <a className="text-sm mb-4 text-gray-500 underline hover:text-gray-800 decoration-dashed underline-offset-2 transition duration-150">
                  About us
                </a>
              </Link>
              <Link href="/career">
                <a className="text-sm mb-4 text-gray-500 underline hover:text-gray-800 decoration-dashed underline-offset-2 transition duration-150">
                  Career
                </a>
              </Link>
              <Link href="/blog">
                <a className="text-sm text-gray-500 underline hover:text-gray-800 decoration-dashed underline-offset-2 transition duration-150">
                  The blog
                </a>
              </Link>
              <Link href="/privacy-policy">
                <a className="text-sm mt-10 text-gray-300 hover:text-gray-800 decoration-dashed underline-offset-2 transition duration-150">
                  Privacy Policy
                </a>
              </Link>
            </div>
          </div>
          <div className="w-full mr-2">
            <h1 className="font-cool uppercase font-bold text-xl">
              Customer Service
            </h1>
            <div className="flex flex-col mt-[4.5rem]">
              <Link href="/returns-refunds">
                <a className="text-sm mb-4 text-gray-500 underline hover:text-gray-800 decoration-dashed underline-offset-2 transition duration-150">
                  Return / Refund / Exchange
                </a>
              </Link>
              <Link href="/shipping-and-delivery">
                <a className="text-sm text-gray-500 underline hover:text-gray-800 decoration-dashed underline-offset-2 transition duration-150 mb-10">
                  Shipping & Delivery
                </a>
              </Link>
              <Link href="/terms-and-conditions">
                <a className="text-sm mt-8 text-gray-300 hover:text-gray-800 decoration-dashed underline-offset-2 transition duration-150">
                  Terms and Conditions
                </a>
              </Link>
            </div>
          </div>
          <div className="w-full mr-2">
            <h1 className="font-cool uppercase font-bold text-xl">
              Opportunities
            </h1>
            <div className="flex flex-col mt-[4.5rem]">
              <Link href="/join-as-seller">
                <a className="text-sm mb-4 text-gray-500 underline hover:text-gray-800 decoration-dashed underline-offset-2 transition duration-150">
                  Sell on Lovie Aurora
                </a>
              </Link>

              <Link href="/help-creators-grow">
                <a className="text-sm text-gray-500 underline hover:text-gray-800 decoration-dashed underline-offset-2 transition duration-150 mb-4">
                  Help Creators Grow
                </a>
              </Link>
              <Link href="/we-protect-sellers-ip">
                <a className="text-sm text-gray-500 underline hover:text-gray-800 decoration-dashed underline-offset-2 transition duration-150 mb-1.5">
                  We protect Sellers IP
                </a>
              </Link>

              <Link href="/cookie-policy">
                <a className="text-sm mt-8 text-gray-300 hover:text-gray-800 decoration-dashed underline-offset-2 transition duration-150">
                  Cookie Policy
                </a>
              </Link>
            </div>
          </div>
          <div className="w-full mr-2">
            <h1 className="font-cool uppercase font-bold text-xl">
              Contact Us
            </h1>
            <div className="mt-[4.5rem] mb-4">
              <div className="flex items-center mb-4">
                <Link href="/contact">
                  <a>
                    <Chat size="40" />
                  </a>
                </Link>
                <Link href="/contact">
                  <a className="flex items-center border border-[#B7B7B7] rounded-md px-2 py-1 ml-3 text-xs self-end">
                    <Messenger size="30" />
                    <div className="flex flex-col ml-4 items-start">
                      <span>Need help?</span>
                      <span className="underline self-end text-[0.6rem] text-gray-400">
                        Live chat or message us!
                      </span>
                    </div>
                  </a>
                </Link>
                {/* <button className="flex items-center border border-[#B7B7B7] rounded-md px-2 py-1 ml-3 text-xs self-end">
                  <Messenger size="30" />
                  <div className="flex flex-col ml-4 items-start">
                    <span>Need help?</span>
                    <span className="underline self-end text-[0.6rem] text-gray-400">
                      Live chat or message us!
                    </span>
                  </div>
                </button> */}
              </div>
              <div className="flex items-center gap-3">
                <InstagramIcon size="35" />
                <FacebookIcon size="35" />
                <TikTok size="35" />
                <TwitterIcon size="35" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <p className="text-xs text-coolBlack">Copyright LOVIE AURORA, 2021</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
