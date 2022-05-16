import { Box, Modal } from '@material-ui/core';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { Paypaldraw, sellership } from '../../atoms/popup';
import paypalImg from '../../../public/PayPal-Logo.png'
import Image from 'next/image'
import Button from '../inputs/Button';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 300,
  bgcolor: 'background.paper',
  border: '',
  transition: "",

  boxShadow: 24,
  p: 4,
};

const SellerShip = () => {

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const [open, setOpen] = useRecoilState(sellership)

  return (
    <div>
      <Modal
        className='transition-all ease-in-out duration-100'
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='rounded-lg shadow-lg ' >
          <div className='flex items-center flex-col space-y-8  p-4'>
            <h1 className='text-xl md:text-2xl lg:text-3xl font-sans text-[#327357] font-semibold '>Tracking Number</h1>
            <input type="text" className='bg-transparent w-full outline-none border-[2px] border-gray-400 px-4 rounded-lg py-1.5  border-gray-500' />
            <div className='space-y-1 flex items-center justify-between space-x-5'>

              <Button text='Shipped' color='bg-coolDarkerGreen' />
              <Button onClick={() => setOpen(false)} text='Cancel' color='bg-coolDarkerGreen' />

            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default SellerShip;
