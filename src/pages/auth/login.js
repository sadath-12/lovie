import React, { useEffect, useState } from "react";
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
import LoginPop from "../../components/popups/LoginPop";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Login = () => {



  const [open, setOpen] = useRecoilState(loginModal);


  useEffect(() => {
    setOpen(true)
  }, [])

  open && console.log("true")

  return (
    <div>


      {/* <Layout categories={categories}> */}
      {open && <LoginPop />}

    </div>


  );
}

export default Login;



