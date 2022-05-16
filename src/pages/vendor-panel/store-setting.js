import React from 'react';
import VendorLayout from '../../components/layout/VendorLayout';
import VendorStore from '../../components/layout/VendorStore';
import VendorBar from '../../components/navigation/VendorBar/VendorBar';
import Image from 'next/image'
import image from '../../../public/imagefirst.png'
import { BsFacebook } from 'react-icons/bs'
import { FaInstagram } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'


const StoreProfile = () => {
    return (
        <div className='flex'>
            <VendorBar />
            <div className='w-full'>

                <section className='grid grid-cols-2 space-x-8 m-8 ' >
                    {/* store profile  */}
                    <div className='flex flex-col shadow-lg border space-y-5 p-1 lg:p-5 h-[430px] '>

                        <div>
                            <h2 className='font-bold text-[#5B8B76]'>Store Profile</h2>
                        </div>


                        <div className='flex justify-around space-x-10 items-center px-4 '>



                            <div className='flex-0.5 flex justify-center items-center flex-col space-y-4'>
                                <Image src={image} />
                                <button className='font-bold bg-[#5B8B76] text-white text-xs px-3 py-2 rounded-lg'>Upload a Store Image</button>
                            </div>

                            <div className='flex-0.5 space-y-6'>

                                <div className='flex flex-col space-y-2'>
                                    <h2 className='font-bold text-gray-500'>Store Name: MOMOSTALK </h2>
                                    <button className='px-1 w-[120px] text-md py-1 rounded-lg bg-gray-200 text-gray-500'>Change</button>
                                </div>
                                <div className='flex flex-col space-y-2'>
                                    <h2 className='font-bold text-gray-500'>Country: Japan </h2>
                                    <button className='px-1 w-[120px] text-md py-1 rounded-lg bg-gray-200 text-gray-500'>Change</button>
                                </div>

                                <div className='space-y-1'>
                                    <h2 className='font-bold text-sm text-gray-500' >Bio</h2>
                                    <p className='text-gray-500 text-sm'>Clients Meeting</p>
                                    <p className='text-gray-500 text-sm'>Saturday, May 7
                                    </p>
                                    <p className='text-gray-500 text-sm'>Google Meet joining info</p>
                                    <p className='text-gray-500 text-sm'>Video call link: https://meet.google.com/snu-ycoc-dnj</p>
                                    <button className='px-1 w-[120px] text-md py-1 rounded-lg bg-gray-200 text-gray-500 my-2'>Change</button>

                                </div>

                            </div>

                        </div>
                    </div>

                    {/* login info  */}
                    <div className='flex flex-col shadow-lg border space-y-5 p-1 lg:p-5 h-[430px] '>

                        <div className='p-2'>
                            <h2 className='font-bold text-[#5B8B76]'>Login Information</h2>
                        </div>




                        <div className='p-2'>



                            <div className='flex flex-col space-y-6'>

                                <div className='flex  space-x-2'>
                                    <h2 className='font-bold text-gray-500'>Email :  </h2>
                                    <h2 className='font-bold text-gray-500'>lovie@gmail.com <span className='text-xs cursor-pointer  text-[#327357]'>{` `} edit</span> </h2>

                                </div>

                                <div className='flex  space-x-2'>
                                    <h2 className='font-bold text-gray-500'>Password :  </h2>
                                    <h2 className='font-bold text-gray-500 items-center'>******* <span className='text-xs cursor-pointer  text-[#327357]'>{` `} edit</span> </h2>

                                </div>


                                <div className='flex flex-col space-y-2'>
                                    <h2 className='font-bold text-gray-500 items-center'>Social Links {` `} <span className=' cursor-pointer text-xs text-[#327357] '>edit</span> </h2>
                                    <div className='flex space-x-3 items-center p-1'>
                                        <BsFacebook className='text-2xl text-blue-800' />
                                        <BsTwitter className='text-2xl text-blue-700' />
                                        <FaInstagram className='text-2xl text-pink-800' />
                                    </div>

                                </div>



                            </div>

                        </div>
                    </div>

                </section>


                <section className='grid grid-cols-2 space-x-8 m-8' >

                    <div className='flex flex-col shadow-lg border space-y-5 p-1 lg:p-5 h-[430px] '>

                        <div className='p-2'>
                            <h2 className='font-bold text-[#5B8B76]'>Address</h2>
                        </div>




                        <div className='p-2'>



                            <div className='flex flex-col space-y-6 items-start'>

                                <div className='flex flex-col space-y-2'>
                                    <h2 className='font-bold text-gray-500'>Store Managar Address </h2>
                                    <h2 className=' text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, odio. <span className='text-xs cursor-pointer  text-[#327357]'>{` `} edit</span> </h2>

                                </div>

                                <div className='flex flex-col space-y-2'>
                                    <h2 className='font-bold text-gray-500'>Send-in-from Address  </h2>
                                    <h2 className=' text-gray-500 items-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, molestiae. <span className='text-xs cursor-pointer  text-[#327357]'>{` `} edit</span> </h2>

                                </div>

                                <div className='flex flex-col  space-y-2'>
                                    <h2 className='font-bold text-gray-500'>Ship-back-to-Address </h2>
                                    <h2 className=' text-gray-500 items-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, molestiae. <span className='text-xs cursor-pointer  text-[#327357]'>{` `} edit</span> </h2>

                                </div>








                            </div>

                        </div>

                    </div>

                    {/* login info  */}
                    <div className='flex flex-col shadow-lg border space-y-5 p-1 lg:p-5 h-[430px] '>

                        <div>
                            <h2 className='font-bold text-[#5B8B76]'>Payment</h2>
                        </div>



                        <h1 className='text-xl font-bold text-gray-500' >Credit Card(Pay)</h1>

                        <div className='flex justify-around space-x-10 items-center px-4 '>

                            <div className='flex-0.5' >
                                <div className='flex flex-col items-center text-sm space-y-2'>
                                    <p>Name on card</p>
                                    <p>Name on card</p>
                                    <p>Name on card</p>
                                    <p>Name on card</p>
                                </div>
                            </div>

                            <div className='flex-0.5 space-y-6'>
                                <div className='flex flex-col items-center text-sm space-y-2'>
                                    <p>Name on card</p>
                                    <p>Name on card</p>
                                    <p>Name on card</p>
                                    <p>Name on card</p>
                                </div>

                            </div>


                        </div>
                        <a href="" className='text-sm text-red-500 font-bold underline' >Edit or Add a new card </a>

                        <h1 className='text-xl font-bold text-gray-500' >Bank Account(Receive)</h1>

                        <div className='flex justify-around space-x-10 items-center px-4 '>



                            <div className='flex-0.5' >
                                <div className='flex flex-col items-center text-sm space-y-2'>
                                    <p>Name on card</p>
                                    <p>Name on card</p>
                                    <p>Name on card</p>
                                    <p>Name on card</p>
                                </div>
                            </div>

                            <div className='flex-0.5 space-y-6'>
                                <div className='flex flex-col items-center text-sm space-y-2'>
                                    <p>Name on card</p>
                                    <p>Name on card</p>
                                    <p>Name on card</p>
                                    <p>Name on card</p>
                                </div>

                            </div>


                        </div>



                    </div>

                </section>

            </div>


        </div>
    );
}

export default StoreProfile;
