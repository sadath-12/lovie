import React from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from '../../atoms/popup'
import ChatFooter from './ChatFooter'
import ChatTopBar from './ChatTopBar'
import Message from './Message'

const ChatBody = () => {

    const [open, setOpen] = useRecoilState(modalState)

    const messages = [
        {
            text: 'This is a test',
            userId: 1
        },
        {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia cupiditate asperiores expedita molestias beatae laboriosam eaque, sapiente aliquam quae animi quod tenetur blanditiis dolorem quam quaerat debitis quasi et quas.',
            userId: 2
        },

        {
            text: 'This is a test',
            userId: 1
        },
        {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia cupiditate asperiores expedita molestias beatae laboriosam eaque, sapiente aliquam quae animi quod tenetur blanditiis dolorem quam quaerat debitis quasi et quas.',
            userId: 2
        },

        {
            text: 'This is a test',
            userId: 1
        },
        {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia cupiditate asperiores expedita molestias beatae laboriosam eaque, sapiente aliquam quae animi quod tenetur blanditiis dolorem quam quaerat debitis quasi et quas.',
            userId: 2
        },

        {
            text: 'This is a test',
            userId: 1
        },
        {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia cupiditate asperiores expedita molestias beatae laboriosam eaque, sapiente aliquam quae animi quod tenetur blanditiis dolorem quam quaerat debitis quasi et quas.',
            userId: 2
        },

        {
            text: 'This is a test',
            userId: 1
        },
        {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia cupiditate asperiores expedita molestias beatae laboriosam eaque, sapiente aliquam quae animi quod tenetur blanditiis dolorem quam quaerat debitis quasi et quas.',
            userId: 2
        },

        {
            text: 'This is a test',
            userId: 1
        },
        {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia cupiditate asperiores expedita molestias beatae laboriosam eaque, sapiente aliquam quae animi quod tenetur blanditiis dolorem quam quaerat debitis quasi et quas.',
            userId: 2
        },
        {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia cupiditate asperiores expedita molestias beatae laboriosam eaque, sapiente aliquam quae animi quod tenetur blanditiis dolorem quam quaerat debitis quasi et quas.',
            userId: 2
        },

        {
            text: 'This is a test',
            userId: 1
        },
        {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia cupiditate asperiores expedita molestias beatae laboriosam eaque, sapiente aliquam quae animi quod tenetur blanditiis dolorem quam quaerat debitis quasi et quas.',
            userId: 2
        },

        {
            text: 'This is a test',
            userId: 1
        },
        {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia cupiditate asperiores expedita molestias beatae laboriosam eaque, sapiente aliquam quae animi quod tenetur blanditiis dolorem quam quaerat debitis quasi et quas.',
            userId: 2
        },
        {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia cupiditate asperiores expedita molestias beatae laboriosam eaque, sapiente aliquam quae animi quod tenetur blanditiis dolorem quam quaerat debitis quasi et quas.',
            userId: 2
        },

        {
            text: 'This is a test',
            userId: 1
        },
        {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia cupiditate asperiores expedita molestias beatae laboriosam eaque, sapiente aliquam quae animi quod tenetur blanditiis dolorem quam quaerat debitis quasi et quas.',
            userId: 2
        },

        {
            text: 'This is a test',
            userId: 1
        },
        {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia cupiditate asperiores expedita molestias beatae laboriosam eaque, sapiente aliquam quae animi quod tenetur blanditiis dolorem quam quaerat debitis quasi et quas.',
            userId: 2
        },
        {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia cupiditate asperiores expedita molestias beatae laboriosam eaque, sapiente aliquam quae animi quod tenetur blanditiis dolorem quam quaerat debitis quasi et quas.',
            userId: 2
        },

        {
            text: 'This is a test',
            userId: 1
        },
        {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia cupiditate asperiores expedita molestias beatae laboriosam eaque, sapiente aliquam quae animi quod tenetur blanditiis dolorem quam quaerat debitis quasi et quas.',
            userId: 2
        },

        {
            text: 'This is a test',
            userId: 1
        },
        {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia cupiditate asperiores expedita molestias beatae laboriosam eaque, sapiente aliquam quae animi quod tenetur blanditiis dolorem quam quaerat debitis quasi et quas.',
            userId: 2
        },
        {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia cupiditate asperiores expedita molestias beatae laboriosam eaque, sapiente aliquam quae animi quod tenetur blanditiis dolorem quam quaerat debitis quasi et quas.',
            userId: 2
        },

        {
            text: 'This is a test',
            userId: 1
        },
        {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia cupiditate asperiores expedita molestias beatae laboriosam eaque, sapiente aliquam quae animi quod tenetur blanditiis dolorem quam quaerat debitis quasi et quas.',
            userId: 2
        },

        {
            text: 'This is a test',
            userId: 1
        },
        {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia cupiditate asperiores expedita molestias beatae laboriosam eaque, sapiente aliquam quae animi quod tenetur blanditiis dolorem quam quaerat debitis quasi et quas.',
            userId: 2
        },
        {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia cupiditate asperiores expedita molestias beatae laboriosam eaque, sapiente aliquam quae animi quod tenetur blanditiis dolorem quam quaerat debitis quasi et quas.',
            userId: 2
        },

        {
            text: 'This is a test',
            userId: 1
        },
        {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia cupiditate asperiores expedita molestias beatae laboriosam eaque, sapiente aliquam quae animi quod tenetur blanditiis dolorem quam quaerat debitis quasi et quas.',
            userId: 2
        },

        {
            text: 'This is a test',
            userId: 1
        },
        {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia cupiditate asperiores expedita molestias beatae laboriosam eaque, sapiente aliquam quae animi quod tenetur blanditiis dolorem quam quaerat debitis quasi et quas.',
            userId: 2
        },

    ]
    return (
        <div style={{
            height: 'inherit',
        }} className='flex flex-col '>
            <ChatTopBar />
            {/* messages  */}
            <div className="messages px-8 ml-auto bg-white flex flex-1 flex-col overflow-y-scroll " style={{
                height: 'inherit',
                width: 'calc(100% - 180px)'
            }}>
                <Message messages={messages} />
            </div>
            <ChatFooter />
        </div>
    )
}

export default ChatBody