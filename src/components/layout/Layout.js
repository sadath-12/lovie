import React from "react";
import Navbar from "../navigation/Navbar";
import Footer from "../navigation/Footer";
import MailingListSection from "../sections/MailingListSection";
import { useRouter } from "next/router";
import Head from "next/head";
import CreateProfile from "../popups/ProfilePopup";
const Layout = ({ children, categories }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Lovie Aurora: Original, Handmade and Quality Products</title>
        <meta
          name="description"
          content="LOVIE AURORA was founded on the very simple idea that online shopping should be a stress-free, enjoyable experience, where 1000’s of high-quality products from an international roster of businesses are quickly and expertly organised to showcase to an active social community of buyers."
        />
      </Head>
      {router.pathname === "/" && (
        <div className="max-w-[1320px] mx-auto mb-3.5">
          <div className="bg-gray-100 mx-4 md:mx-8 flex items-center justify-center text-sm py-3.5 text-coolBlack">
            International Free Shipping
          </div>
        </div>
      )}
      <CreateProfile />

      <Navbar categories={categories} />
      <div className="max-w-[1320px] mt-6 px-4 md:px-8 w-full mx-auto">
        {children}
        {router.pathname !== "/auth/signup" &&
          router.pathname !== "/auth/signin" && <MailingListSection />}
      </div>

      <Footer />
    </>
  );
};

export default Layout;
