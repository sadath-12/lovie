import React from 'react';
import  Image  from 'next/image';

const LeftMessage = () => {

    const image ="https://i0.wp.com/www.mocamboo.com/wp-content/uploads/2021/11/avatar-1637060521pnc2i.png?resize=300%2C300&ssl=1"
const name="elon"

  return (
    <div className='flex space-x-4 flex-col space-y-2'>
    <h2 className='text-gray-500 font-semibold tracking-wider text-sm ml-4'>{name} 12:30PM </h2>
    <div className='flex items-center space-x-2'>

      <Image src={image} width={40} height={40} objectFit='contain' className='rounded-full' />
      <div className='bg-gray-200 p-3 rounded-lg'>
          <h3>Hey Pinky ,How are you</h3>
      </div>
    </div>
    </div>
  );
}

export default LeftMessage;
