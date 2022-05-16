import React from 'react';
import MessageHeader from './MessageHeader';
import Messages from './Messages';

const MessageSection = () => {
  return (
    <div className='flex flex-col   lg:px-10 lg:ml-10'>
      <MessageHeader/>
      <Messages/>
    </div>
  );
}

export default MessageSection;
