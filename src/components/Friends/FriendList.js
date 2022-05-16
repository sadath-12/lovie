import React from 'react';
import Friend from './Friend';

const friends =[
   {
       "image":"https://i0.wp.com/www.mocamboo.com/wp-content/uploads/2021/11/avatar-1637060521pnc2i.png?resize=300%2C300&ssl=1",
       "name":"Elon musk"
       
   },
   {
       "image":"https://i0.wp.com/www.mocamboo.com/wp-content/uploads/2021/11/avatar-1637060521pnc2i.png?resize=300%2C300&ssl=1",
       "name":"elon musk"
       
   },
   {
       "image":"https://i0.wp.com/www.mocamboo.com/wp-content/uploads/2021/11/avatar-1637060521pnc2i.png?resize=300%2C300&ssl=1",
       "name":"elon musk"
       
   },
   {
       "image":"https://i0.wp.com/www.mocamboo.com/wp-content/uploads/2021/11/avatar-1637060521pnc2i.png?resize=300%2C300&ssl=1",
       "name":"elon musk"
       
   },
   {
       "image":"https://i0.wp.com/www.mocamboo.com/wp-content/uploads/2021/11/avatar-1637060521pnc2i.png?resize=300%2C300&ssl=1",
       "name":"elon musk"
       
   },
   {
       "image":"https://i0.wp.com/www.mocamboo.com/wp-content/uploads/2021/11/avatar-1637060521pnc2i.png?resize=300%2C300&ssl=1",
       "name":"elon musk"
       
   },
   {
       "image":"https://i0.wp.com/www.mocamboo.com/wp-content/uploads/2021/11/avatar-1637060521pnc2i.png?resize=300%2C300&ssl=1",
       "name":"elon musk"
       
   },
   {
       "image":"https://i0.wp.com/www.mocamboo.com/wp-content/uploads/2021/11/avatar-1637060521pnc2i.png?resize=300%2C300&ssl=1",
       "name":"elon musk"
       
   },
   {
       "image":"https://i0.wp.com/www.mocamboo.com/wp-content/uploads/2021/11/avatar-1637060521pnc2i.png?resize=300%2C300&ssl=1",
       "name":"elon musk"
       
   },
   {
       "image":"https://i0.wp.com/www.mocamboo.com/wp-content/uploads/2021/11/avatar-1637060521pnc2i.png?resize=300%2C300&ssl=1",
       "name":"elon musk"
       
   },
   {
       "image":"https://i0.wp.com/www.mocamboo.com/wp-content/uploads/2021/11/avatar-1637060521pnc2i.png?resize=300%2C300&ssl=1",
       "name":"Elon musk"
       
   },
]

const FriendList = () => {
  return (
    <div className='flex flex-col items-start p-2'>
<h2 className='text-xl text-gray-500 font-bold px-3 tracking-wider'>SELLERS</h2>

<div className='flex flex-col space-y-6 mt-10 '>
{friends.map((friend)=>(
    <Friend friend={friend} />
))}
</div>
      
    </div>
  );
}

export default FriendList;
