import Image from 'next/image';
import React,{useState} from 'react';


const MessageHeader = () => {

    const [activeLink, setLink]=useState('Conversation')

    const image ="https://i0.wp.com/www.mocamboo.com/wp-content/uploads/2021/11/avatar-1637060521pnc2i.png?resize=300%2C300&ssl=1"

  return (
    <div className='flex relative items-start space-y-4 md:space-y-1 flex-col border-b-1 '>
      {/* image  */}
      <div className='flex space-x-2 md:space-x-10 lg:space-x-14 items-center'>

    
      <div>
<Image src={image} width={120} height={120} objectFit='contain' className='rounded-full' />
      </div>

{/* name  */}
<div className='space-y-2'>
<h1 className='md:text-2xl lg:text-3xl font-semibold'>Elon Musk</h1>
<div className='text-lg text-gray-500 flex space-x-4 '>
    <h3 >abc@twilio.com</h3>
    <h3>Twilio</h3>
    <h3>twilio.com</h3>

</div>
</div>

</div>

<div className='font-semibold flex space-x-3 text-md ml-32 lg:ml-40'>
    <h4 className={` cursor-pointer  ${activeLink=='Conversation' ? "text-blue-500 border-b-4 border-blue-500" : "text-gray-500" } `} onClick={()=>setLink("Conversation")} >Conversation</h4>
    <h4 className={` cursor-pointer  ${activeLink=='Profile' ? "text-blue-500 border-b-4 border-blue-500" : "text-gray-500" } `} onClick={()=>setLink("Profile")} >Profile</h4>
    <h4 className={` cursor-pointer  ${activeLink=='History' ? "text-blue-500 border-b-4 border-blue-500" : "text-gray-500" } `} onClick={()=>setLink("History")}>History</h4>

</div>

<div className='absolute w-[500px] h-[0.5px] text-black bottom-0 bg-gray-400 ml-4' />


    </div>
  );
}

export default MessageHeader;
