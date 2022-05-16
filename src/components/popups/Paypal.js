import { Box, Modal } from '@material-ui/core';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { Paypaldraw, paypalpopup } from '../../atoms/popup';
import paypalImg from '../../../public/PayPal-Logo.png'
import Image from 'next/image'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height:400,
    bgcolor: 'background.paper',
    border: '',
    transition:"",
   
    boxShadow: 24,
    p: 4,
  };

const PaypalPop = () => {

    const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);



const [open, setOpen] = useRecoilState(paypalpopup)
const [withdraw,setWithdraw]=useRecoilState(Paypaldraw)


const withdrawPaypal=()=>{
setOpen(false)
setWithdraw(true)
}
  return (
    <div>
    <Modal
    className='transition-all ease-in-out duration-100'
     open={open}
     onClose={handleClose}
     aria-labelledby="modal-modal-title"
     aria-describedby="modal-modal-description"
   >
     <Box sx={style} className='rounded-lg shadow-lg' >
   <div className='flex flex-col items-center'>
       <h1 className='text-[#327357] font-bold text-md   tracking-wider  text-center uppercase' >Connect your Paypal Account to Receive Payment from Lovie Aurora</h1>
      

<Image src={paypalImg} width={200} height={200} objectFit='contain' className='' />
      

<div className='flex justify-between space-x-20 items-center'>
    <button className='text-white bg-[#327357] font-bold py-2 px-4 text-md rounded-sm shadow-md hover:scale-90 transition ease-in-out ' onClick={withdrawPaypal} >Connect</button>
    <button className='text-white bg-[#327357] font-bold py-2 px-4 text-md rounded-sm shadow-md hover:scale-90 transition ease-in-out ' onClick={()=>setOpen(false)} >Cancel</button>
</div>

   </div>
     </Box>
   </Modal>
 </div>
  );
}

export default PaypalPop;
