import { Dialog, IconButton } from '@material-ui/core'
import { Close, Person } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import Rating from '@mui/material/Rating';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { useRecoilState } from 'recoil';
import { reviewPopup } from '../../atoms/popup';

const ReviewPopup = () => {
    const [open, setOpen] = useRecoilState(reviewPopup);
    const [ext, setExt] = useState(null);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [file, setFile] = useState(null)
    const [showErr, setShowErr] = useState(false)

    const handleSelectImage = (e) => {
        if (e.target.files[0] != undefined) {
            const reader = new FileReader()
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setFile(reader.result)
                }
            }
            reader.readAsDataURL(e.target.files[0])

        }

    }



    const size = "50"

    const [rating, setRating] = useState(0) // initial rating value
    const [value, setValue] = useState(4)

    const imageFiles = [
        'png', 'jpg', 'jpeg', 'PSD'
    ]

    const videoFiles = [
        'mp4',
        'mp3',
        'mov',
        'wmv',
        'avi',
    ]

    useEffect(() => {
        if (file != null || undefined) {
            setExt(file.split('/')[1].split(';')[0])
        }
    }, [file])



    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <div className={`flex flex-col md:flex-row p-4 relative  lg:min-w-[650px] lg:py-8 `}>
                    <div className="max-w-[600px]  w-full mx-auto">
                        <div className="w-full my-1 lg:my-2 flex flex-col items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={size ? size : "60"}
                                height={size ? size : "60"}
                                viewBox="0 0 73.5 60.75"
                            >
                                <g
                                    id="Group_490"
                                    data-name="Group 490"
                                    transform="translate(-521.263 -39.906)"
                                >
                                    <g
                                        id="Group_228"
                                        data-name="Group 228"
                                        transform="translate(521.263 39.906)"
                                    >
                                        <g
                                            id="Artwork_5"
                                            data-name="Artwork 5"
                                            transform="translate(36.75 30.375)"
                                        >
                                            <path
                                                id="Path_220"
                                                data-name="Path 220"
                                                d="M64.33,24.751l-7.789,7.791L55.411,33.67H18.094l-1.132-1.132L9.174,24.751A11.015,11.015,0,0,1,24.751,9.174l7.787,7.789,4.212,4.212,4.212-4.212,7.787-7.789A11.016,11.016,0,0,1,64.33,24.751M36.75,52.33l-12.7-12.707H49.457ZM68.537,4.962a16.989,16.989,0,0,0-24,0L36.75,12.751,28.963,4.962a16.971,16.971,0,0,0-24,24L9.671,33.67H5.07v5.953H15.625L36.75,60.75,57.875,39.623H68.434V33.67h-4.6l4.707-4.708a16.988,16.988,0,0,0,0-24"
                                                transform="translate(-36.75 -30.375)"
                                                fill={"#363638"}
                                            />
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <h1 className="text-lg my-1 lg:my-2 md:text-2xl  uppercase text-left font-cool z-20 font-bold">
                                Leave Your review
                            </h1>
                            <div className="my-2">
                                <Rating
                                    name="simple-controlled"
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                />
                            </div>

                            <div className="flex flex-col my-2 md:my-6 lg:my-8">
                                <h1 className="text-lg my-1 lg:my-2 md:text-xl text-center z-20 font-md">
                                    Would you like to recommed Lovie Aurora?
                                </h1>
                                <div className="flex w-full my-2 justify-center space-x-5">
                                    <button className="bg-coolDarkerGreen py-2 rounded-sm text-white px-4 lg:px-6">Yes</button>
                                    <button className="bg-coolDarkerGreen py-2 rounded-sm text-white px-4 lg:px-6">No</button>
                                </div>
                            </div>



                            {file != null ?
                                <div className="flex mb-4">
                                    {imageFiles.find(file => (file === ext)) &&
                                        <img src={file === null ? '/deals.jpg' : file} className='max-h-[300px]  md:max-h-[540px] object-cover' />
                                    }
                                    {videoFiles.find(file => (file === ext)) &&
                                        <video src={file} controls></video>
                                    }
                                </div> : ''}
                            <div className="flex flex-col w-full my-2">
                                <h1 className="text-lg md:text-xl text-center z-20 font-md">
                                    How was your overall experience with Lovie Aurora?
                                </h1>
                                <div className="my-2">
                                    <TextareaAutosize
                                        className='outline-[#327357] transition duration-300 border-2 min-h-[140px] p-2'
                                        aria-label="empty textarea"
                                        placeholder="Empty"
                                        style={{ width: '100%' }}
                                    />
                                </div>
                            </div>
                            <div className="flex-col md:flex-row flex justify-between my-2 w-full ">
                                <form className='flex flex-col items-center justify-center'>
                                    <label htmlFor="file">
                                        <div className="py-2 cursor-pointer my-2 md:my-0 px-6 md:px-8 rounded-md bg-coolOrange text-sm lg:text-[17px] text-white">
                                            {file != undefined || null ? 'Choose another image / video' : 'Upload an image or video'}</div>
                                        <input id='file' type='file' hidden onChange={handleSelectImage} />
                                    </label>
                                </form>

                                <button className="py-2 my-2 md:my-0 px-6 md:px-8 rounded-md bg-[#327357] text-sm lg:text-[17px] text-white">
                                    Publish review
                                </button>
                            </div>



                        </div>
                    </div>



                </div>

            </Dialog>
        </>
    )
}

export default ReviewPopup
