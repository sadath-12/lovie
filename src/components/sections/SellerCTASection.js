import React from "react";
import Image from "next/image";
import Button from "../inputs/Button";
import Logo from "../utils/Logo";
import { useRouter } from "next/router";

const SellerCTASection = () => {
  const router = useRouter();
  return (
    <div className="mt-32 mb-32 text-center flex flex-col items-center  mx-auto">
      <Logo />
      <h2 className="font-cool mb-8 text-3xl mt-10 uppercase text-coolBlack font-bold">
        Ready to Start <br /> Selling on lovie aurora?
      </h2>

      <Button
        onClick={() => router.push("/join-as-seller/application")}
        padding="py-5 px-9"
        text="Apply today"
        color="bg-coolDarkGreen text-xl"
      />
    </div>
  );
};

export default SellerCTASection;
