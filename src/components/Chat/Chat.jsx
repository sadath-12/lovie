import React from 'react'
import ChatBody from './ChatBody'
import ChatSideBar from './ChatSideBar'

const Chat = () => {
    return (
        <div className='flex border shadow-md rounded-md ' style={{ height: 'calc(100vh - 100px)' }}>
            <div className="flex-[0.35] border-r" style={{
                height: 'inherit',
            }}>
                <ChatSideBar />
            </div>
            <div className="flex-1"
                style={{
                    height: 'inherit',
                }}>
                <ChatBody />
            </div>
        </div>
    )
}

export default Chat