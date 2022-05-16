import React, { useState } from 'react';
import { Checkmark } from 'react-ionicons';
import personImg from '../../../public/woman-dress.jpg'
import CheckButton from '../../components/CheckButton';
import VendorLayout from '../../components/layout/VendorLayout';
import VendorBar from '../../components/navigation/VendorBar/VendorBar';
import Image from 'next/image'

const SendInventory = () => {

    const [otherInput,setOtherInput]=useState(false)


  return (
      <VendorLayout>

<div className='space-y-7 flex flex-col'>


<div className='mt-10'>
    <h1 className='text-3xl text-[#327357] font-bold text-center'>Create Your Shipping Plan</h1>
</div>

<div className='space-y-2'>
<h2 className='text-[#327357] font-bold text-md'>Ship-from Address</h2>
<input type="text" className='bg-transparent outline-none px-3 py-1 border-[1px] border-gray-400 rounded-md' />
<div>

</div>

<div className='flex flex-col space-y-3'>
<h2 className='text-[#327357] font-bold text-md'>Product Information</h2>



<table className='space-y-3'>
<thead className=''>
    <tr className='text-sm text-red-500 '>
        <td>Item</td>
        <td className=''>Quantity</td>
        <td>Product Information</td>
        <td>Box Size</td>
        <td>Shipper</td>
        <td>Estimate Date to Ship-out</td>
    </tr>
</thead>

<tbody>
    <tr>
        <td>
        <div className='flex space-x-2 items-center'>

<div>
<button
    type="button"
    onClick={() => setOtherInput(!otherInput)}
    className={`${
      otherInput === true
        ?  "bg-[#327357] border border-white"
        : "border border-[#327357]"
    } mt-1`}
  >
    <Checkmark color="white" />
  </button>

</div>

<div className='flex items-center space-x-3'>
    <Image src={personImg} width={35} height={35}  className='rounded-full' alt='' />
    <h3 className='font-medium text-muted '>David Buttler</h3>
</div>

</div> 
        </td>

        <td>
            12
        </td>
        <td>
        5 size L red socks
        </td>
        <td>L*20 W*12 H*12 cm</td>
        <td>USPS</td>
        <td>06/09/2022</td>
    </tr>
</tbody>

</table>



</div>

<div className='space-y-3'>
<h2 className='text-[#327357] font-bold text-md'>Ship-from Address</h2>
<input type="text" className='bg-transparent outline-none px-3 py-1 border-[1px] border-gray-400 rounded-md' />

<div className='flex items-center space-x-4'>
    <button className='font-bold text-sm bg-[#327357] text-white rounded-md px-3 py-2'>Confirm Your Plan</button>
    <button className='font-bold text-sm bg-[#327357] text-white rounded-md px-3 py-2'>Save For Later</button>
    <button className='font-bold text-sm bg-[#327357] text-white rounded-md px-3 py-2'>Cancel</button>
</div>
</div>

</div>

</div>

      </VendorLayout>
  );
}

export default SendInventory;
