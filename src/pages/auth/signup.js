import React, { useState } from "react";
import Button from "../../components/inputs/Button";
import TextInput from "../../components/inputs/TextInput";
import Layout from "../../components/layout/Layout";
import { Checkmark, LogoApple, LogoFacebook, LogoGoogle } from "react-ionicons";
import Link from "next/link";
import { createProfilePopup } from "../../atoms/popup";
import { useRecoilState } from "recoil";
const signup = ({ categories }) => {
  const [selected, setSelected] = useState(true);
  const [facebook, setFacebook] = useState(false);
  const [google, setGoogle] = useState(false);
  const [apple, setApple] = useState(false);
  const [email, setEmail] = useState("Email");
  const [password, setPassword] = useState("Password");
  const [consifrmPassword, setConfirmPassword] = useState("Confirm Password");
  const [open, setOpen] = useRecoilState(createProfilePopup);


  const handleLogin = (e) => {
    e.preventDefault()
    if (selected && email === 'lovie@gmail.com' && password === 'aurora') {
      setOpen({ ...open, show: true, type: 'create' })
    }
  }
  return (
    <Layout categories={categories}>
      <div className="text-center my-14 ">
        <div className="max-w-[40rem] mx-auto -mb-6">
          <h1 className="text-5xl uppercase text-coolBlack font-cool font-semibold">
            Join the club
          </h1>
          <p className="text-coolBlack antialiased text-md font-light max-w-[24.8rem] mx-auto mt-6 mb-10">
            Sign up to LOVIE AURORA today for exclusive access to special
            offers, discounts, events and more
          </p>
          <form onSubmit={handleLogin} className="max-w-[35rem] mx-auto flex flex-col">
            <input
              className="rounded-md border border-coolBlack py-2 px-4 text-center uppercase text-gray-500 tracking-tight w-full mb-5"
              type="email"
              placeholder={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="rounded-md border border-coolBlack py-2 px-4 text-center uppercase text-gray-500 tracking-tight w-full mb-5"
              type="text"
              placeholder={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className="rounded-md border border-coolBlack py-2 px-4 text-center uppercase text-gray-500 tracking-tight w-full"
              type="text"
              placeholder={consifrmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className="flex my-4 flex-col items-center">
              <Button text="Sign Up" color="bg-coolDarkGreen max-w-[28rem]" /></div>
          </form>
          <div className="mb-8 mt-8 flex items-center max-w-[28rem] mx-auto">
            <button
              onClick={() => setSelected(!selected)}
              type="button"
              className={`${selected
                ? "bg-coolDarkGreen border border-white"
                : "border border-coolDarkGreen"
                } rounded h-9 px-1.5 mr-2.5`}
            >
              <Checkmark color="white" />
            </button>
            <p className="text-sm text-coolDarkGreen text-left">
              Yes, I want to receive the LOVIE AURORA newsletter, as well as
              hear about special offers, events, news and updates
            </p>
          </div>
          <div className="flex flex-col items-center">

            <Link href="/auth/signin">
              <a className="text-sm mt-6">
                Already have an account?{" "}
                <span className="font-bold">Sign in</span>{" "}
              </a>
            </Link>
          </div>
          <div className="w-[28rem] mx-auto border-b mb-8 mt-6 border-borderColor"></div>
          <p className="text-sm text-coolBlack">
            Or continue using your social media:
          </p>
          <div className="max-w-[28rem] mx-auto my-6">
            <button
              onMouseOver={() => setFacebook(true)}
              onMouseLeave={() => setFacebook(false)}
              className="relative flex border border-borderColor w-full rounded-full py-1.5 pl-2 hover:bg-coolOrange transition duration-150 group"
            >
              <LogoFacebook
                color={facebook ? "white" : "black"}
                height="29px"
                width="29px"
              />
              <span className="absolute left-1/2 top-1/2 -translate-y-1/2 transform -translate-x-1/2 group-hover:text-white">
                Continue with Facebook
              </span>
            </button>
            <button
              onMouseOver={() => setGoogle(true)}
              onMouseLeave={() => setGoogle(false)}
              className="relative flex border border-borderColor w-full rounded-full mt-3 py-1.5 pl-2 hover:bg-coolOrange transition duration-150 group"
            >
              <LogoGoogle
                color={google ? "white" : "black"}
                height="29px"
                width="29px"
              />
              <span className="absolute left-1/2 top-1/2 -translate-y-1/2 transform -translate-x-1/2 group-hover:text-white">
                Continue with Google
              </span>
            </button>
            <button
              onMouseOver={() => setApple(true)}
              onMouseLeave={() => setApple(false)}
              className="relative flex border border-borderColor w-full rounded-full mt-3 py-1.5 pl-2 hover:bg-coolOrange transition duration-150 group"
            >
              <LogoApple
                color={apple ? "white" : "black"}
                height="29px"
                width="29px"
              />
              <span className="absolute left-1/2 top-1/2 -translate-y-1/2 transform -translate-x-1/2 group-hover:text-white">
                Continue with Apple
              </span>
            </button>
          </div>
          <p className="text-sm text-coolBlack">
            We’ll never post without permission
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default signup;

export async function getStaticProps() {
  const api = process.env.NEXT_PUBLIC_API;
  const categoryRes = await fetch(`${api}/categories`);
  const categoryData = await categoryRes.json();
  return {
    props: { categories: categoryData },
  };
}
