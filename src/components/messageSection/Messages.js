import React from 'react';
import LeftMessage from './LeftMessage';
import UserMessage from './UserMessage';

function Messages() {
  return (
    <div className='flex flex-col space-y-5 w-[300] lg:w-full'>
      
      <h1 className='font-bold text-gray-500  text-center mt-4 lg:ml-4 tracking-widest'>TODAY DEC 23</h1>
      <LeftMessage/>
      <UserMessage/>

    </div>
  );
}

export default Messages;
