import React, { useState } from "react";
import Link from "next/link";
import Button from "../inputs/Button";
import Heading from "../Typography/Heading";
import Logo from "../utils/Logo";

const MailingListSection = () => {
  const [email, setEmail] = useState("Email");
  const [password, setPassword] = useState("Password");
  return (
    <section className="border-t border-borderColor py-10">
      <div className="flex flex-col items-center justify-center text-center">
        <Logo />
        <Heading
          h2
          text="Sign Up To Our Mailing List"
          margin="mb-8 mt-5 font-bold"
          size="text-[40px]"
        />
        <p className="text-gray-500 text-sm">
          Get exclusive access to discounts,new items and more.
        </p>
      </div>
      <form className="flex flex-col items-center justify-center mt-10">
        <input
          className="rounded-md border border-coolBlack py-2 px-4 text-center  text-gray-500 tracking-tight  mb-5 w-[25rem]"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="rounded-md border border-coolBlack py-2 px-4 text-center  text-gray-500 tracking-tight w-[25rem]"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button margin="mt-6" text="Sign up" padding="px-12 py-1.5 text-md" />
        <Link href="/auth/signin">
          <a className="text-sm mt-6">
            Already have an account? <span className="font-bold">Sign in</span>{" "}
          </a>
        </Link>
        <Link href="/">
          <a
            className="text-xs underline mt-5 underline-offset-4 decoration-dashed dec text-gray-500"
            href=""
          >
            We respect your privacy
          </a>
        </Link>
      </form>
    </section>
  );
};

export default MailingListSection;
