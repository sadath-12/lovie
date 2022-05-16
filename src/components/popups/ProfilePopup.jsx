import { Dialog, IconButton } from '@material-ui/core'
import { Close, Person } from '@material-ui/icons';
import Image from 'next/image';
import React, { useState } from 'react'
import { useRecoilState } from 'recoil';
import { createProfilePopup } from '../../atoms/popup';
import Button from "../inputs/Button";

const CreateProfile = () => {
    const [open, setOpen] = useRecoilState(createProfilePopup);

    const handleClose = () => {
        setOpen({ ...open, show: false });
    };

    const [profileImage, setProfileImage] = useState(null)

    const handleSelectImage = (e) => {
        if (e.target.files[0] != undefined) {
            const reader = new FileReader()
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setProfileImage(reader.result)
                }
            }
            reader.readAsDataURL(e.target.files[0])
        }
    }

    const data = {
        name: 'Aman pandey',
        date: '18',
        month: '07',
        year: '2005'
    }
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    const year = new Date().getFullYear()
    return (
        <>
            <Dialog
                open={open.show}
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <div className='flex flex-col md:flex-row p-4 relative w-full lg:min-w-[900px] max-w-[1000px] '>
                    <div className="image flex-1 h-inherit justify-center flex flex-col relative overflow-hidden w-full md:w-[50vw] ">

                        <img src={profileImage === null ? '/deals.jpg' : profileImage} className='max-h-[300px] w-full md:max-h-[540px] object-cover	' />
                        {/* <div className="flex-1 bg-gray-600 " ></div> */}
                        <form className='flex flex-col items-center justify-center'>
                            <label htmlFor="file">
                                <div className="py-2 w-fit my-3 px-8 rounded-md bg-coolOrange text-white mr-4">
                                    {open.type === 'create' ? 'Choose' : 'Change'} profile image</div>
                                <input accept='image/*' id='file' type='file' hidden onChange={handleSelectImage} />
                            </label>

                        </form>
                    </div>
                    <div className="flex-1 flex flex-col w-full">
                        <div className="hidden md:flex ml-auto">
                            <IconButton onClick={handleClose} className=' self-end w-fit border'>
                                <Close />
                            </IconButton>
                        </div>
                        <form className='flex flex-col md:p-8'>
                            <h1 className="text-lg my-2 md:text-2xl  uppercase text-left font-cool z-20 font-bold">
                                {open.type === 'create' ? 'Create' : 'Edit'} Your Profile
                            </h1>
                            <div className="flex flex-col my-2">
                                <label htmlFor="username" className='my-2 font-semibold text-[#333]'>{open.type === 'create' ? 'Username' : `Username: ${data.name}`}</label>
                                <div className="flex text-gray-600  border-2 rounded-sm items-center w-full px-2">
                                    <Person />
                                    <input type='text' required placeholder={open.type === 'create' ? 'Enter Username' : `Enter new Username`} id='username' className='outline-none p-2' />
                                </div>
                            </div>
                            <div className="flex flex-col ">
                                <label htmlFor="birthday" className='my-2 font-semibold text-[#333]'>Birthday</label>
                                <div className="flex items-center flex-1 w-full">
                                    <div className="flex text-gray-600 flex-1 border-2 rounded-sm items-center w-full ">
                                        <select required className='outline-none px-4 py-2 w-full' name="London" id="birthday">
                                            {monthNames.map(monthName => (<option key={monthName} value="Los Angeles">{monthName}</option>))}
                                        </select>
                                    </div>
                                    <div className="flex text-gray-600 border-2 rounded-sm items-center w-full flex-1">
                                        <input type='number' max={31} min={1} required className='outline-none px-4 py-2 w-full' placeholder={`${open.type === 'create' ? 'Day' : `${data.date}`}`} />
                                    </div>
                                    <div className="flex text-gray-600 border-2 rounded-sm items-center w-full flex-1">
                                        <input type='number' max={year} min={1900} required className='outline-none px-4 py-2 w-full' placeholder={`${open.type === 'create' ? 'Year' : `${data.year}`}`} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col my-2">
                                <label htmlFor="country" className='my-2 font-semibold text-[#333]'>Country</label>
                                <div className="flex text-gray-600  border-2 rounded-sm items-center w-full ">
                                    <select required className='outline-none px-4 py-2 w-full' name="United Kingdom" id="country">
                                        <option value="India">India</option>
                                        <option value="China">China</option>
                                        <option value="United States">United States</option>
                                        <option value="France">France</option>
                                        <option value="Germany">Germany</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex my-4">
                                <button className="py-2 px-6 md:px-8 rounded-md bg-coolOrange text-sm lg:text-[17px] text-white mr-2 lg:mr-4">
                                    Save
                                </button>
                                <div onClick={handleClose} className="cursor-pointer py-2 px-8 rounded-md text-sm lg:text-[17px] bg-coolOrange text-white mr-4">
                                    {open.type === 'create' ? `I'll do this Later` : 'Cancel'}
                                </div>
                            </div>

                        </form>
                    </div>

                </div>
            </Dialog>
        </>
    )
}

export default CreateProfile