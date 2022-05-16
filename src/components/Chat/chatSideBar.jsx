import React from 'react'
import SidebarListItem from './SidebarListItem'
const chatSideBar = () => {
    return (
        <div style={{
            height: 'inherit',
        }} className=' h-full w-full  overflow-y-scroll'>
            <h1 className='text-lg text-gray-500 uppercase sticky bg-[#fff] inset-0 p-2 md:p-4 border-b w-full'>friends</h1>
            {/* sidebar list  */}
            <div className="flex flex-col pb-2" >
                <SidebarListItem />
                <SidebarListItem />
                <SidebarListItem />
                <SidebarListItem />
                <SidebarListItem />
                <SidebarListItem />
                <SidebarListItem />
                <SidebarListItem />
                <SidebarListItem />
                <SidebarListItem />
                <SidebarListItem />
                <SidebarListItem />
                <SidebarListItem />
                <SidebarListItem />
                <SidebarListItem />
                <SidebarListItem />
                <SidebarListItem />
                <SidebarListItem />
                <SidebarListItem />
                <SidebarListItem />
            </div>
        </div >
    )
}

export default chatSideBar