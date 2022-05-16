import { Box, Modal } from '@material-ui/core';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { Paypaldraw } from '../../atoms/popup';
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

const PaypalWithdraw = () => {

    const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);


const [open, setOpen] = useRecoilState(Paypaldraw)

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
 <div className='flex justify-center flex-col items-center'>
     <Image src={paypalImg} width={250} height={200} objectFit='contain' />
     <div className='space-y-1'>

     <button className='text-white w-[400px] py-2 mx-auto shadow-lg font-bold bg-[#327357] ' >Withdraw  $9,834 to your Paypal</button>
     <p className='text-[#327357] text-sm' >Note: This process may take up to 48 hours to complete</p>
     </div>
 </div>
     </Box>
   </Modal>
 </div>
  );
}

export default PaypalWithdraw;
