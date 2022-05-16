import React from 'react'
import Image from 'next/image'

const SidebarListItem = () => {
    const message = 'This is a test message'
    return (
        <div className='w-full cursor-pointer p-2 md:p-2 hover:bg-[#efefef] flex items-center'>
            <div className="w-[3rem] h-[3rem]  rounded-full overflow-hidden">
                <img className='cursor-pointer' src='https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg' />
            </div>
            <div className="flex flex-col pl-3">
                <h1 className='text-md font-semibold text-[#333]'>Someone Name</h1>
                <h1 className='text-sm  text-[#666]'>{message}</h1>
            </div>
            <div className="flex items-center justify-center bg-[#24a4c2] text-[11px] text-white ml-auto rounded-full w-[20px] h-[20px]">2</div>
        </div>
    )
}

export default SidebarListItem