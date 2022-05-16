import React, { useState } from "react";
import Button from "../../components/inputs/Button";
import TextInput from "../../components/inputs/TextInput";
import Layout from "../../components/layout/Layout";
import { Checkmark, LogoApple, LogoFacebook, LogoGoogle } from "react-ionicons";
import Link from "next/link";
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useRecoilState } from "recoil";
import { loginModal } from "../../atoms/popup";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '10px',
  p: 4,
};

const LoginPop = ({ categories, open, setOpen }) => {

  const [selected, setSelected] = useState(true);
  const [facebook, setFacebook] = useState(false);
  const [google, setGoogle] = useState(false);
  const [apple, setApple] = useState(false);
  const [email, setEmail] = useState("Email");
  const [password, setPassword] = useState("Password");


  const handleClose = () => setOpen(false);


  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Hi");
    // const res = await fetch("http://localhost:8000/api/login", {
    //   method: "GET",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email: email,
    //     password: password,
    //   }),
    // });
    // const data = await res.json();
    // console.log(data);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="w-full min-w-[80vw] md:min-w-[600px] text-center my-14">
            <div className="max-w-[40rem] mx-auto -mb-6">
              <h1 className="text-5xl uppercase text-coolBlack font-cool font-semibold">
                Sign in
              </h1>
              <p className="text-coolBlack antialiased text-md font-light max-w-[24.8rem] mx-auto mt-6 mb-10">
                Log into your account
              </p>
              <form onSubmit={handleLogin}>
                <div className="max-w-[35rem] mx-auto flex flex-col">
                  <input
                    className="rounded-md border border-coolBlack py-2 px-4 text-center uppercase text-gray-500 tracking-tight w-full mb-5"
                    type="email"
                    value={email}
                    onFocus={() => setEmail("")}
                    onBlur={() => setEmail("Email")}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    onFocus={() => setPassword("")}
                    onBlur={() => setPassword("Password")}
                    className="rounded-md border border-coolBlack py-2 px-4 text-center uppercase text-gray-500 tracking-tight w-full"
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-8 mt-8 flex items-center max-w-[28rem] mx-auto">
                  <button
                    onClick={() => setSelected(!selected)}
                    type="button"
                    className={`${selected
                      ? "bg-coolOrange border border-white"
                      : "border border-coolOrange"
                      } rounded h-9 px-1.5 mr-2.5`}
                  >
                    <Checkmark color="white" />
                  </button>
                  <p className="text-sm text-coolDarkGreen text-left">
                    By clicking "sign in", you agree to Lovie Aurora's terms of
                    conditions and privacy policy.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Button text="Sign In" color="bg-coolOrange max-w-[28rem]" />
                  <Link href="/auth/signup">
                    <a className="text-sm mt-6">
                      Don't have an account?{" "}
                      <span className="font-bold">Sign up</span>{" "}
                    </a>
                  </Link>
                </div>
              </form>

            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default LoginPop;


export async function getStaticProps() {
  const api = process.env.NEXT_PUBLIC_API;
  const categoryRes = await fetch(`${api}/categories`);
  const categoryData = await categoryRes.json();
  return {
    props: { categories: categoryData },
  };
}