import { Dialog, IconButton } from '@material-ui/core'
import { Close, DragHandle, Person } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'

const ScorePopup = ({ type, open, setOpen }) => {
    const [score, setScore] = useState({})
    const data = [
        {
            heading: 'Handmade (HS)',
            type: 'handmade',
            description: `Lovie Aurora hand-picked this product and calculate HS (Handmade Score) based on 34 factors and the product sample sent to us before activating this listing on our website. Stores only get HS badge when the HS is among top 5% of all handmade related products. `
        },
        {
            heading: 'Original Design (OS)',
            type: 'original',
            description: `Lovie Aurora hand-picked this product and calculate OS (Original Design Score) based on 34 factors and the product sample sent to us before activating this listing on our website. Stores only get OS badge when the OS is among top 5% of all handmade related products. `
        },
        {
            heading: 'Custom (CS)',
            type: 'custom',
            description: `Lovie Aurora hand-picked this product and calculate CS (Custom Score) based on 36 factors and the product sample sent to us before activating this listing on our website. Stores only get CS badge when the CS is among top 1%-5% of all custom related products. `
        },
        {
            heading: 'Merchant (MS)',
            type: 'merchant',
            description: `Lovie Aurora hand-picked this store and calculate MS (Merchant Score) based on 16 factors and major product samples sent to us before approving its selling application.`
        },
        {
            heading: 'Quality Score (QS)',
            type: 'qualityScore',
            description: `Lovie Aurora hand-picked this product and
calculate QS (Quality Score) based on 33   factors and the product sample sent to us before activating this listing on our website. QS will be displayed on every handmade product page to guide customer purchase.`
        },

    ]

    useEffect(() => {
        setScore(data.find(dataItem => (dataItem.type === type)))

    }, [type])


    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                {score != undefined ? (
                    <div className="flex flex-col p-4 max-w-[500px]">
                        <div className="flex w-full items-center justify-space">
                            <h1 className='flex-1 text-xl font-semibold '>{score.heading}</h1>
                            <IconButton onClick={handleClose}>
                                <Close />
                            </IconButton>
                        </div>
                        <p className='text-md font-md text-gray-700'>{score.description}</p>
                    </div>
                ) : ''}
            </Dialog>
        </>
    )
}

export default ScorePopup