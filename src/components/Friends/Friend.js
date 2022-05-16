import React from 'react';
import Image from 'next/image'

const Friend = ({friend}) => {

    const time =true;

  return (
    <div className='flex items-center justify-between space-x-10 hover:bg-gray-200 transition-all ease-in-out p-2 rounded-xl'>

    <div className='flex items-center space-x-3'>
      <Image src={friend.image} width={30} height={30} className='rounded-full' />
    <h1 className='text-sm font-medium'>{friend.name}</h1>
    </div>

<div className='flex '>
{time ? <p className='font-semibold text-xs text-gray-500'>11min</p> : 
<div className='w-2 h-2 rounded-full bg-green-500' />
 }
</div>

    </div>
  );
}

export default Friend;
