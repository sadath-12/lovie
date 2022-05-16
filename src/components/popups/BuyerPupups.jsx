import { Dialog } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil';
import Button from '../inputs/Button';
import { buyerPopup } from '../../atoms/popup'
const BuyerPupups = () => {
    const [data, setData] = useRecoilState(buyerPopup);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const { type, open } = data

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setData({ ...open, open: false });
    };


    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <div className="w-full  p-3 md:p-8">
                    {type === 'changePassword' ? <ChangePass oldPassword={oldPassword} setOldPassword={setOldPassword} newPassword={newPassword} setNewPassword={setNewPassword} confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword} /> : ''}
                    {type === 'changeCard' ? <ChangeCardNumber handleClose={handleClose} /> : ''}
                    {type === 'addCard' ? <AddCard handleClose={handleClose} /> : ''}
                    {type === 'editAddress' ? <EditAddress handleClose={handleClose} /> : ''}
                    {type === 'addShippingAddress' ? <AddAddress type='addShippingAddress' handleClose={handleClose} /> : type === 'addBillingAddress' ? <AddAddress type='addBillingAddress' handleClose={handleClose} /> : ''}
                </div>
            </Dialog>
        </>
    )
}

function ChangePass({ oldPassword, setOldPassword, newPassword, setNewPassword, confirmPassword, setConfirmPassword }) {

    const handleChangePassword = (e) => {
        e.preventDefault()
        if (newPassword === confirmPassword) {
        }
    }
    return (
        <div className='w-full max-w-[25rem] sm:min-w-[300px] md:min-w-[500px] '>
            <h1 className="mb-2 md:mb-4 text-xl md:text-2xl uppercase text-coolDarkerGreen font-cool font-semibold">
                change your password
            </h1>
            <form onSubmit={handleChangePassword}>
                <div className=" mx-auto  flex flex-col">
                    <div className="mb-5">
                        <label htmlFor="oldPass" className=' text-coolDarkerGreen'>Enter current password.</label>
                        <input
                            required
                            min={6}
                            id='oldPass'
                            className="rounded-md border border-coolBlack py-2 px-4 text-center uppercase text-gray-500 tracking-tight w-full"
                            type="password"
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                        />

                    </div>
                    <div className="mb-5">

                        <label htmlFor="newPass" className=' text-coolDarkerGreen'>Enter New password.</label>
                        <input
                            required
                            min={6}
                            id='newPass'
                            className={`${newPassword === confirmPassword ? 'border-coolBlack' : 'border-[red] border-2 outline-[red]'} rounded-md border py-2 px-4 text-center uppercase text-gray-500 tracking-tight w-full`}
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        {newPassword != confirmPassword && <p className="text-[red] font-md text-sm py-1">
                            Passwords do not match.
                        </p>}
                    </div>
                    <div className="mb-5">
                        <label htmlFor="confirmPass" className=' text-coolDarkerGreen'>Confirm New password.</label>
                        <input
                            required
                            min={6}
                            id='confirmPass'
                            className={`${newPassword === confirmPassword ? 'border-coolBlack' : 'border-[red] border-2 outline-[red]'} rounded-md border  py-2 px-4 text-center uppercase text-gray-500 tracking-tight w-full `}
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        {newPassword != confirmPassword && <p className="text-[red] font-md text-sm py-1">
                            Passwords do not match.
                        </p>}
                    </div>

                </div>
                <div className="flex flex-col items-center">
                    <Button text="Change Passoword" color="bg-coolDarkerGreen max-w-[28rem]" />
                </div>
            </form></div>)
}

function ChangeCardNumber({ handleClose }) {

    const [cardData, setCardData] = useState({
        cardNumber: null, cardName: null, expiry: null, CVC: null
    })



    const cardInfo = {
        cardName: 'Aman pandey',
        cardNumber: '1887267634445334',
        expiry: '2014-02-09',
        CVC: '276'
    }

    useEffect(() => {
        setCardData({
            cardNumber: cardInfo?.cardNumber, cardName: cardInfo?.cardName, expiry: cardInfo?.expiry, CVC: cardInfo?.CVC
        })
    }, [])

    const handleChange = (e) => {
        setCardData({ ...cardData, [e.target.name]: e.target.value })
    }

    const handleChangeCardNumber = (e) => {
        e.preventDefault()
        if (cardData.cardNumber) {
            console.log(cardData)
        }
    }
    return (
        <div className='w-full max-w-[25rem] sm:min-w-[300px] md:min-w-[500px] '>
            <h1 className="mb-2 md:mb-4 text-xl md:text-2xl uppercase text-coolBlack font-cool font-semibold">
                Edit Card
            </h1>
            <form onSubmit={handleChangeCardNumber}>
                <div className=" mx-auto  flex flex-col">
                    <div className="mb-5">
                        <label htmlFor="cardNum" className='mb-2'>Change Card Number</label>
                        <input
                            required
                            minLength={16}
                            maxLength={16}
                            id='cardNum'
                            className="rounded-md border border-coolBlack py-2 px-4 uppercase text-gray-500 tracking-tight w-full"
                            type="number"
                            name='cardNumber'
                            defaultValue={cardData.cardNumber}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="nameOncard" className='mb-2'>Name on card</label>
                        <input
                            required
                            id='nameOncard'
                            className="rounded-md border border-coolBlack py-2 px-4   text-gray-500 tracking-tight w-full"
                            type="text"
                            defaultValue={cardData.cardName}
                            name='cardName'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="CVC" className='mb-2'>CVC number</label>
                        <input
                            required
                            minLength={3}
                            maxLength={3}
                            id='CVC'
                            className="rounded-md border border-coolBlack py-2 px-4 uppercase text-gray-500 tracking-tight w-full"
                            type="number"
                            defaultValue={cardData.CVC}
                            name='CVC'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="date" className='mb-2'>CVC number</label>
                        <input
                            required
                            id='date'
                            className="rounded-md border border-coolBlack py-2 px-4 uppercase text-gray-500 tracking-tight w-full"
                            type="date"
                            defaultValue={cardData.expiry}
                            name='expiry'
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="flex items-left">
                    <Button text="Edit card" color="bg-coolDarkerGreen max-w-[28rem]" />
                    <div onClick={handleClose} className="ml-2 cursor-pointer py-2 px-8 rounded-md text-sm lg:text-[17px] bg-coolOrange text-white mr-4">
                        Cancel
                    </div>
                </div>
            </form></div>)
}

function AddCard({ handleClose }) {

    const [cardData, setCardData] = useState({
        cardNumber: null, cardName: null, expiry: null, CVC: null
    })

    const handleAddCardNumber = (e) => {
        e.preventDefault()
        if (cardData.cardNumber && cardData.cardName && cardData.expiry && cardData.CVC) {
            console.log(cardData)

        }
    }

    const handleChange = (e) => {
        setCardData({ ...cardData, [e.target.name]: e.target.value })
    }

    return (
        <div className='w-full max-w-[25rem] sm:min-w-[300px] md:min-w-[500px] '>
            <h1 className="mb-2 md:mb-4 text-xl md:text-2xl uppercase text-coolBlack font-cool font-semibold">
                Add  Card
            </h1>
            <form onSubmit={handleAddCardNumber}>
                <div className=" mx-auto  flex flex-col">
                    <div className="mb-5">
                        <label htmlFor="cardNum" className='mb-2'>Add card Number</label>
                        <input
                            required
                            minLength={16}
                            maxLength={16}
                            id='cardNum'
                            className="rounded-md border border-coolBlack py-2 px-4 uppercase text-gray-500 tracking-tight w-full"
                            type="number"
                            name='cardNumber'
                            defaultValue={cardData.cardNumber}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="nameOncard" className='mb-2'>Name on card</label>
                        <input
                            required
                            id='nameOncard'
                            className="rounded-md border border-coolBlack py-2 px-4   text-gray-500 tracking-tight w-full"
                            type="text"
                            name='cardName'
                            defaultValue={cardData.cardName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="CVC" className='mb-2'>CVC number</label>
                        <input
                            required
                            minLength={3}
                            maxLength={3}
                            id='CVC'
                            className="rounded-md border border-coolBlack py-2 px-4 uppercase text-gray-500 tracking-tight w-full"
                            name='CVC'
                            type="number"
                            defaultValue={cardData.CVC}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="date" className='mb-2'>CVC number</label>
                        <input
                            required
                            id='date'
                            className="rounded-md border border-coolBlack py-2 px-4 uppercase text-gray-500 tracking-tight w-full"
                            name='expiry'
                            type="date"
                            defaultValue={cardData.expiry}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="flex items-left">
                    <Button text="Change Passoword" color="bg-coolDarkerGreen max-w-[28rem]" />
                    <div onClick={handleClose} className="ml-2 cursor-pointer py-2 px-8 rounded-md text-sm lg:text-[17px] bg-coolOrange text-white mr-4">
                        Cancel
                    </div>
                </div>
            </form></div>)
}

function EditAddress({ handleClose }) {

    const [addresses, setAddresses] = useState({
        billingAddress: null, shippingAddress: null
    })
    const addressData = {
        billingAddress: '971 Sherman Brock Cir, Newmarket, ON, CANADA, L3X 0G7', shippingAddress: '971 Sherman Brock Cir, Newmarket, ON, CANADA, L3X 0G7'
    }



    const handleChangeAddress = (e) => {
        e.preventDefault()
        if (addresses.billingAddress && addresses.shippingAddress) {
            console.log(addresses)

            //proceed
        }
    }

    const handleChange = (e) => {
        setAddresses({ ...addresses, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        setAddresses({
            billingAddress: addressData?.billingAddress, shippingAddress: addressData?.shippingAddress
        })
    }, [])
    return (
        <div className='w-full max-w-[25rem] sm:min-w-[300px] md:min-w-[500px] '>
            <h1 className="mb-2 md:mb-4 text-xl md:text-2xl uppercase text-coolBlack font-cool font-semibold">
                Edit  Address
            </h1>
            <form onSubmit={handleChangeAddress}>
                <div className=" mx-auto  flex flex-col">
                    <div className="mb-5">
                        <label htmlFor="billingAddress" className='mb-2'>Billing Address</label>
                        <textarea
                            required
                            minLength={16}
                            maxLength={16}
                            id='billingAddress'
                            className="min-h-[120px] mt-2 max-w-[100%] rounded-md border border-coolBlack py-2 px-4 uppercase text-gray-500 tracking-tight w-full"
                            name='billingAddress'
                            defaultValue={addresses.billingAddress}
                            onChange={handleChange}
                        />
                        <div className="flex items-left">
                            <Button text="Add billing address" color="bg-coolOrange max-w-[28rem]" />
                            <div className="ml-2">
                                <Button text="delete" color="bg-coolOrange max-w-[28rem]" />
                            </div>
                        </div>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="shippingAddress" className='mb-2'>Shipping Address</label>
                        <textarea
                            required
                            minLength={16}
                            maxLength={16}
                            id='shippingAddress'
                            className="min-h-[120px] mt-2 max-w-[100%] rounded-md border border-coolBlack py-2 px-4 uppercase text-gray-500 tracking-tight w-full"
                            name='shippingAddress'
                            defaultValue={addresses.shippingAddress}
                            onChange={handleChange}
                        />
                        <div className="flex items-left">
                            <Button text="Add shipping address" color="bg-coolOrange max-w-[28rem]" />
                            <div className="ml-2">
                                <Button text="delete" color="bg-coolOrange max-w-[28rem]" />

                            </div>
                        </div>
                    </div>
                </div>


            </form></div>)
}

function AddAddress({ handleClose, type }) {

    const [addresses, setAddresses] = useState({
        billingAddress: null, shippingAddress: null
    })
    const addressData = {
        billingAddress: '971 Sherman Brock Cir, Newmarket, ON, CANADA, L3X 0G7', shippingAddress: '971 Sherman Brock Cir, Newmarket, ON, CANADA, L3X 0G7'
    }



    const handleChangeAddress = (e) => {
        e.preventDefault()
        if (addresses.billingAddress && addresses.shippingAddress) {
            console.log(addresses)

            //proceed
        }
    }

    const handleChange = (e) => {
        setAddresses({ ...addresses, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        setAddresses({
            billingAddress: addressData?.billingAddress, shippingAddress: addressData?.shippingAddress
        })
    }, [])
    return (
        <div className='w-full max-w-[25rem] sm:min-w-[300px] md:min-w-[500px] '>
            <h1 className="mb-2 md:mb-4 text-xl md:text-2xl uppercase text-coolBlack font-cool font-semibold">
                Add {type === 'addShippingAddress' ? 'Shipping' : 'Billing'} Address
            </h1>
            <form onSubmit={handleChangeAddress}>
                <div className=" mx-auto  flex flex-col">
                    <div className="mb-5">
                        <label htmlFor="houseOrAptNo" className='mb-2'>House / Apt No. <span className='text-coolOrange'>*</span></label>
                        <input
                            required
                            minLength={16}
                            maxLength={16}
                            id='houseOrAptNo'
                            className=" mt-2 rounded-md border border-coolBlack py-2 px-4 uppercase text-gray-500 tracking-tight w-full"
                            name='houseOrAptNo'
                            onChange={handleChange}
                        />

                    </div>
                    <div className="mb-5">
                        <label htmlFor="streetAddress" className='mb-2'>Street Address <span className='text-coolOrange'>*</span></label>
                        <textarea
                            required
                            minLength={16}
                            maxLength={16}
                            id='streetAddress'
                            className="min-h-[80px] mt-2 max-w-[100%] rounded-md border border-coolBlack py-2 px-4 uppercase text-gray-500 tracking-tight w-full"
                            name='streetAddress'
                            onChange={handleChange}
                        />

                    </div>

                    <div className="flex space-x-2">
                        <div className="mb-5 flex-1">
                            <label htmlFor="City" className='mb-2'>City <span className='text-coolOrange'>*</span></label>
                            <input
                                required
                                minLength={16}
                                maxLength={16}
                                id='City'
                                className=" mt-2 rounded-md border border-coolBlack py-2 px-4 uppercase text-gray-500 tracking-tight w-full"
                                name='city'
                                onChange={handleChange}
                            />

                        </div>
                        <div className="mb-5 flex-1">
                            <label htmlFor="state" className='mb-2'>State / Province <span className='text-coolOrange'>*</span></label>
                            <input
                                required
                                minLength={16}
                                maxLength={16}
                                id='state'
                                className=" mt-2 rounded-md border border-coolBlack py-2 px-4 uppercase text-gray-500 tracking-tight w-full"
                                name='state'
                                onChange={handleChange}
                            />

                        </div>
                    </div>
                    <div className="flex space-x-2">
                        <div className="mb-5 flex-1">
                            <label htmlFor="country" className='mb-2'>Country <span className='text-coolOrange'>*</span></label>
                            <input
                                required
                                minLength={16}
                                maxLength={16}
                                id='country'
                                className=" mt-2 rounded-md border border-coolBlack py-2 px-4 uppercase text-gray-500 tracking-tight w-full"
                                name='country'
                                onChange={handleChange}
                            />

                        </div>
                        <div className="mb-5 flex-1">
                            <label htmlFor="postcode" className='mb-2'>Post Code <span className='text-coolOrange'>*</span></label>
                            <input
                                required
                                minLength={16}
                                maxLength={16}
                                id='postcode'
                                className=" mt-2 rounded-md border border-coolBlack py-2 px-4 uppercase text-gray-500 tracking-tight w-full"
                                name='postcode'
                                onChange={handleChange}
                            />

                        </div>
                    </div>
                    <div className="mb-8 mt-4 flex items-center space-x-2">
                        <input type="checkbox" name="checked" id="checkbox" />
                        <label htmlFor="checkbox">is {type === 'addShippingAddress' ? 'Billing' : 'Shipping'} Address same as {type === 'addShippingAddress' ? 'Shipping' : 'Billing'} Address?</label>
                    </div>
                </div>
                <div className="flex items-left">
                    <Button text="Save" color="bg-coolOrange max-w-[28rem]" />
                    <div onClick={handleClose} className="ml-2 cursor-pointer py-2 px-8 rounded-md text-sm lg:text-[17px] bg-coolOrange text-white mr-4">
                        Cancel
                    </div>
                </div>


            </form></div>)
}
export default BuyerPupups