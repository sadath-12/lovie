import { Dialog, IconButton } from '@material-ui/core'
import { Close, Person } from '@material-ui/icons';
import Image from 'next/image';
import React, { useState } from 'react'
import Button from "../inputs/Button";
import Chip from '@mui/material/Chip';
import { useRecoilState } from 'recoil';
import { OrderPopup } from '../../atoms/popup';

const BuyerOrderPopups = () => {
    const [open, setOpen] = useRecoilState(OrderPopup);

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Dialog
                open={open.show}
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <div className="p-4 lg:p-8">
                    {open.type === 'BuyerCancelOrder' ? <CancelOrder handleClose={handleClose} /> : ''}
                    {open.type === 'confirmOrder' ? <ConfirmOrder handleClose={handleClose} /> : ''}
                </div>
            </Dialog>
        </>
    )
}

function CancelOrder({ handleClose }) {
    const size = "50"
    const orderId = '#FAFG4MRGH56788'
    return (
        <div className='!text-coolDarkerGreen flex flex-col items-center'>

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
                                fill={"#337357"}
                            />
                        </g>
                    </g>
                </g>
            </svg>
            <h1 className="my-4 text-xl md:text-2xl uppercase text-center  font-semibold">
                Do you want to Cance the order?
            </h1>
            <div className="flex items-center">
                <Chip label={`ORDER ID ${orderId}`} variant="outlined" />
            </div>
            <div className="flex my-4 lg:my-8 items-center space-x-3">
                <Button text="Yes" color="bg-coolDarkerGreen max-w-[28rem]" />
                <div onClick={handleClose} className="ml-2 cursor-pointer py-2 px-8 rounded-md text-sm lg:text-[17px] bg-coolDarkerGreen text-white mr-4">
                    No
                </div>
            </div>
        </div>
    )
}

function ConfirmOrder({ handleClose }) {
    const [size, setSize] = useState("50")

    const orderId = '#FAFG4MRGH56788'

    const [phase, setPhase] = useState('confirm')
    const handleChangePhase = (e) => {
        e.preventDefault()
        setPhase('reviewTheProduct')
        setSize('65')
    }
    return (
        <div className='!text-coolDarkerGreen flex flex-col items-center'>

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
                                fill={"#337357"}
                            />
                        </g>
                    </g>
                </g>
            </svg>
            {phase === 'confirm' ? <><h1 className="my-4 text-xl md:text-2xl uppercase max-w-[570px] text-center font-semibold">
                Do you want to confirm your delivery and purchase?
            </h1>
                <div className="flex items-center">
                    <Chip label={`ORDER ID ${orderId}`} variant="outlined" />
                </div>
                <div className="flex my-4 lg:my-8 items-center space-x-3">
                    <Button text="Yes" color="bg-coolDarkerGreen max-w-[28rem]" onClick={handleChangePhase} />
                    <div onClick={handleClose} className="ml-2 cursor-pointer py-2 px-8 rounded-md text-sm lg:text-[17px] bg-coolDarkerGreen text-white mr-4">
                        No
                    </div>
                </div></> : <div className='my-8'>
                <Button text="Please giva a review to the product" color="bg-coolDarkerGreen max-w-[28rem]" onClick={handleChangePhase} /></div>
            }
        </div>
    )
}

export default BuyerOrderPopups