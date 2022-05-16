import React, { useState } from 'react';
import Image from 'next/image'
import sellerImage from "../../../public/sellerstore.png";
import Button from '../inputs/Button';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useRecoilState } from 'recoil';
import { modalState } from '../../atoms/popup';
import { TextareaAutosize } from '@material-ui/core';

const style = {
  // position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '5px',
  p: 4,
};

const OrderPopup = () => {

  // const [open, setOpen] = React.useState(false);
  const [open, setOpen] = useRecoilState(modalState)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [orderData, setOrderData] = useState({
  })

  const products = [
    { productName: `Men's Denim jackets` },
    { productName: `Men's Denim jackets` },
    { productName: `Men's Denim jackets` },
    { productName: `Men's Denim jackets` },
    { productName: `Men's Denim jackets` },
    { productName: `Men's Denim jackets` },
    { productName: `Men's Denim jackets` },
  ]
  const colors = [
    'red', 'blue', 'green', 'white', 'black'
  ]
  const sizes = [
    'small', 'medium', 'large', 'X large', 'XX large'
  ]
  const styles = [
    'Cotton', 'Silk', 'Denim'
  ]
  const quantities = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  ]

  const handleChange = (e) => {
    setOrderData({ ...orderData, [e.target.name]: e.target.value })
    console.log(orderData)
  }

  const handleCreateOrder = (e) => {
    e.preventDefault()
    console.log(orderData)
  }
  return (
    <div>
      <Modal

        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='fixed max-w-[500px] w-full overflow-y-scroll lg:max-w-[800px] '>
          <h1 className='text-3xl text-center font-cool border-b py-4 border-gray-300 '>CREATE ORDER</h1>
          <form onSubmit={handleCreateOrder}>
            <div className="flex  flex-col my-3">
              <label className='text-coolDarkerGreen my-2 ' htmlFor="product">Select Product</label>
              <select
                required name='productName' onChange={handleChange} className='border outline-none px-4 rounded-md py-3 border-coolBlack w-full' id="birthday">
                {products.map((productName, index) => (<option key={index} value={`${productName.productName}`}>{productName.productName}</option>))}
              </select>
            </div>
            <div className="grid space-x-3 grid-cols-1 md:grid-cols-3">
              <div className="flex  flex-col my-3">
                <label className='text-coolDarkerGreen my-2 ' htmlFor="product">Select Size</label>
                <select
                  required name='size' onChange={handleChange} className='border outline-none px-4 rounded-md py-3 border-coolBlack w-full' id="birthday">
                  {sizes.map(size => (<option key={size} value={`${size}`}>{size}</option>))}
                </select>
              </div>
              <div className="flex  flex-col my-3">
                <label className='text-coolDarkerGreen my-2 ' htmlFor="product">Select Color</label>
                <select name='color' onChange={handleChange} required className='border outline-none px-4 rounded-md py-3 border-coolBlack w-full' id="birthday">
                  {colors.map(color => (<option key={color} value={`${color}`}>{color}</option>))}
                </select>
              </div>
              <div className="flex  flex-col my-3">
                <label className='text-coolDarkerGreen my-2 ' htmlFor="product">Select Style</label>
                <select
                  required name='style' onChange={handleChange} className='border outline-none px-4 rounded-md py-3 border-coolBlack w-full' id="birthday">
                  {styles.map(style => (<option key={style} value={`${style}`}>{style}</option>))}
                </select>
              </div>
            </div>

            <div className="grid space-x-3 grid-cols-1 md:grid-cols-3">
              <div className="flex  flex-col my-3">
                <label className='text-coolDarkerGreen my-2 ' htmlFor="product">Select Quantity</label>
                <select
                  required name='qty' onChange={handleChange} className='border outline-none px-4 rounded-md py-3 border-coolBlack w-full' id="birthday">
                  {quantities.map(qty => (<option key={qty} value={`${qty}`}>{qty}</option>))}
                </select>
              </div>
              <div className="flex  flex-col my-3">
                <label className='text-coolDarkerGreen my-2 ' htmlFor="product">Recipent Name</label>
                <input
                  required name='recipent' onChange={handleChange} type='text' className='border outline-none px-4 rounded-md py-3 border-coolBlack w-full' />
              </div>
              <div className="flex  flex-col my-3">
                <label className='text-coolDarkerGreen my-2 ' htmlFor="product">Mobile Number</label>
                <input
                  required
                  onChange={handleChange}
                  name='mobile'
                  type='number' className='border outline-none px-4 rounded-md py-3 border-coolBlack w-full' />
              </div>
            </div>
            <div className="my-2">
              <label className='text-coolDarkerGreen my-2' htmlFor='textarea'>Shipping address</label>
              <div className='mt-2'>
                <TextareaAutosize
                  required
                  onChange={handleChange}
                  name='shippingAddress'
                  className='outline-[none] transition duration-300 border rounded-md border-coolBlack min-h-[140px] p-2'
                  aria-label="empty textarea"
                  style={{ width: '100%' }}
                />
              </div>
            </div>
            <div className='flex items-center my-4 space-x-2 md:spacex-x-4'>
              <Button text="Save" color="bg-coolDarkerGreen max-w-[28rem]" />
              <div onClick={handleClose} className="ml-2 cursor-pointer py-2 px-8 rounded-md text-sm lg:text-[17px] bg-coolDarkerGreen text-white mr-4">
                Cancel
              </div></div>

          </form>

        </Box>
      </Modal>
    </div>
  );
}

export default OrderPopup;
