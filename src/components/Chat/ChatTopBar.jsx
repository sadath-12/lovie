import Image from 'next/image'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from '../../atoms/popup'

const ChatTopBar = () => {
    const [open, setOpen] = useRecoilState(modalState)
    const [type, setType] = useState('conversation')
    const handleClick = (text) => {
        setType(text)
    }
    return (
        <div className=' bg-[#fff] border-b   flex '>
            <div className="w-[8rem] h-[8rem] m-4 mr-8 relative rounded-full overflow-hidden cursor-pointer" onClick={() => setOpen(true)} >
                <Image src='https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg' layout='fill' objectFit='cover' />
            </div>
            <div className="flex-1 flex flex-col justify-center relative h-inherit ">
                <h1 className='text-2xl font-bold text-[#333]'>Someone Name</h1>
                <div className="flex items-center py-2 mb-2">
                    <p className='text-md text-gray-500'>someone@gmail.com</p>
                    <div className="bg-gray-200 rounded-full p-1 h-[1px] w-[1px] mx-4"></div>
                    <p className='text-md text-gray-500'>twillo</p>
                    <div className="bg-gray-200 rounded-full p-1 h-[1px] w-[1px] mx-4"></div>
                    <p className='text-md text-gray-500'>twillo.com</p>
                </div>
                <div className=" flex bottom-0 left-0 absolute bottom-0 " >
                    <button onClick={() => handleClick('conversation')} className={`${type === 'conversation' ? 'py-3 text-[#24a4c2] border-[#24a4c2] border-b-2 font-semibold' : 'py-3 text-[#333]  border-[#fff] border-b-2  font-semibold'} transition duration-500`}>Conversation</button>
                    <button onClick={() => handleClick('profile')} className={`${type === 'profile' ? 'py-3 px-5 text-[#24a4c2] border-[#24a4c2] border-b-2 font-semibold' : 'py-3 text-[#333] px-5   border-[#fff] border-b-2   font-semibold'} transition duration-500`}>Profile</button>
                    <button onClick={() => handleClick('history')} className={`${type === 'history' ? 'py-3 px-5  text-[#24a4c2] border-[#24a4c2] border-b-2 font-semibold' : 'py-3 text-[#333]  px-5  border-[#fff] border-b-2 font-semibold'} transition duration-500`}>History</button>
                </div>
            </div>

        </div>
    )
}

export default ChatTopBar