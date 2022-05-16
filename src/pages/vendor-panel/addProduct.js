import React, { useState } from 'react';
import VendorLayout from '../../components/layout/VendorLayout';
import { FiChevronDown } from 'react-icons/fi'
import { MdOutlineAddAPhoto } from 'react-icons/md'
import CheckButton from '../../components/CheckButton'

const AddProduct = () => {
    const [mainImage, setMainImage] = useState(null)

    const [productData, setProductData] = useState({
        mainImage: mainImage,

    })

    const handleChange = (e) => {
        setProductData({ ...productData, [e.target.name]: e.target.value })
        console.log(productData)
    }

    const handleReadImage = (file) => {
        if (file != undefined) {
            setProductData({ ...productData, [e.target.name]: file.name })
            const reader = new FileReader()
            reader.onload = () => {
                if (reader.readyState === 2) {
                    console.log(file)
                }
            }
            const readFile = reader.readAsDataURL(file)
            return readFile
        }
    }

    const handleAddProduct = () => {
        // clever stuff
    }

    const currencies = [
        'US $', 'US $', 'US $', 'US $', 'US $',
    ]

    return (
        <VendorLayout>
            <main className='mt-5 max-w-[1000px] space-y-5'>
                <div className='space-y-3'>
                    <h1 className='font-bold text-[#337357] text-2xl tracking-wide' >
                        Create Your Listing
                    </h1>
                    <p className='text-sm text-gray-500'>Lovie Aurora values listing and products quality over quantity, so we hand-pick all sellers&creators and products. This means before activating your product to list on Lovie Aurora, we need to evaluate the product and have scores as a common standard to pick products for our customers</p>
                </div>

                <div className='max-w-[700px] space-y-5'>
                    <div className='space-y-2'>
                        <h1 className='font-bold text-[#5A5A5A] text-lg' >Product Title * </h1>
                        <input name='title' onChange={handleChange} type="text" required className='w-full outline-none bg-transparent border-2 border-[#5A5A5A] p-1 rounded-lg' />
                    </div>
                    <div className='space-y-2'>
                        <h1 className='font-bold text-[#5A5A5A] text-lg'>Product Images</h1>
                        <div className='flex items-center space-x-4'>
                            <label htmlFor='mainImage'>
                                <div className='w-[150px] h-[130px] bg-[#E7E7E7] flex items-center rounded-md justify-center flex-col gap-1'>
                                    <MdOutlineAddAPhoto className='text-4xl' />
                                    <h2 className='text-[#6A6868] font-bold'>Main</h2>
                                    <input accept='image/*' onChange={(e) => handleReadImage(e.target.files[0])} name='mainImage' type='file' hidden id='mainImage' />
                                </div>
                            </label>
                            <div className='w-[150px] h-[130px] bg-[#E7E7E7] flex items-center rounded-md justify-center flex-col gap-1'>
                                <MdOutlineAddAPhoto className='text-4xl' />
                            </div>
                            <div className='w-[150px] h-[130px] bg-[#E7E7E7] flex items-center rounded-md justify-center flex-col gap-1'>
                                <MdOutlineAddAPhoto className='text-4xl' />

                            </div>
                        </div>
                    </div>
                    <div className='w-[400px] space-y-2'>
                        <h1 className='font-bold text-[#5A5A5A] text-lg'>Price</h1>
                        <p className='text-[#5A5A5A] text-xs'>Note: you set a price for Lovie Aurora purchasing from you as a wholesaler, Lovie Aurora then has the right to decide sale price for customer.</p>
                        <div className='max-w-[180px] border-2 border-coolBlack flex rounded-md'>
                            <select
                                required name='currency' onChange={handleChange} className='outline-none pr-2 flex-[0.3] rounded-md py-1 border-coolBlack ' id="birthday">
                                {currencies.map((currency, index) => (<option key={index} value={`${currency}`}>{currency}</option>))}
                            </select>
                            <input value={productData.price} onBlur={(e) => setProductData({ ...productData, [e.target.name]: e.target.value + '.00' })} onChange={handleChange} name='price' placeholder='00.00' type="number" className='outline-none bg-transparent flex-[0.7] border-l-2 border-[#5A5A5A] pl-2 p-1 ' />
                        </div>
                    </div>
                    <div className='space-y-2'>
                        <h1 className='font-bold text-[#5A5A5A] text-lg'>Category</h1>
                        <div className='p-1 border-2 flex items-center justify-between rounded-md border-[#5A5A5A] w-[150px]'>
                            <h2 className='px-2'>Home</h2>
                            <FiChevronDown className='font-bold text-xl text-[#5A5A5A]' />
                        </div>
                    </div>

                    <div className='flex items-center space-x-5'>
                        <div className='flex flex-col space-y-1'>
                            <h1 className='font-bold text-[#5A5A5A] text-md'>Weight</h1>
                            <input type="number" className='outline-none bg-transparent border-2 border-[#5A5A5A] w-[50px] p-1 rounded-lg' />
                        </div>

                        <div className='flex flex-col space-y-1'>
                            <h1 className='font-bold text-[#5A5A5A] text-md'>Material</h1>
                            <input type="text" className='outline-none bg-transparent border-2 border-[#5A5A5A] w-[50px] p-1 rounded-lg' />
                        </div>

                        <div className='flex flex-col space-y-1 items-center'>
                            <h1 className='font-bold text-[#5A5A5A] text-md'>Dimension</h1>
                            <div className='flex space-x-2'>
                                <p> L <span> <input type="text" className='outline-none bg-transparent border-2 border-[#5A5A5A] w-[50px] p-1 rounded-lg' /> </span> </p>
                                <p> L <span> <input type="text" className='outline-none bg-transparent border-2 border-[#5A5A5A] w-[50px] p-1 rounded-lg' /> </span> </p>
                                <p> L <span> <input type="text" className='outline-none bg-transparent border-2 border-[#5A5A5A] w-[50px] p-1 rounded-lg' /> </span> </p>
                            </div>
                        </div>
                    </div>


                    <div className='space-y-1'>
                        <h1 className='font-bold text-[#5A5A5A] text-lg'>Variations</h1>

                        <div className='flex items-center space-x-5'>

                            <div>
                                <h2 className=' text-[#5A5A5A] text-md'>Color</h2>
                                <input type="text" className='outline-none bg-transparent border-2 border-[#5A5A5A] w-[50px] p-1 rounded-lg' />
                                <p className='text-sm text-[#E54611] ml-1'>add</p>
                            </div>
                            <div>
                                <h2 className=' text-[#5A5A5A] text-md'>Style</h2>
                                <input type="text" className='outline-none bg-transparent border-2 border-[#5A5A5A] w-[50px] p-1 rounded-lg' />
                                <p className='text-sm text-[#E54611] ml-1'>add</p>
                            </div>
                            <div>
                                <h2 className='text-[#5A5A5A] text-md'>Size</h2>
                                <input type="number" className='outline-none bg-transparent border-2 border-[#5A5A5A] w-[50px] p-1 rounded-lg' />
                                <p className='text-sm text-[#E54611] ml-1'>add</p>
                            </div>

                        </div>
                    </div>


                    <div className='space-y-2'>
                        <h1 className='font-bold text-[#5A5A5A] text-lg' >Description</h1>
                        <input type="text" className='outline-none bg-transparent border-2 border-[#5A5A5A] w-[600px] p-1 rounded-lg' />
                        <input type="text" className='outline-none bg-transparent border-2 border-[#5A5A5A] w-[600px] p-1 rounded-lg' />
                        <input type="text" className='outline-none bg-transparent border-2 border-[#5A5A5A] w-[600px] p-1 rounded-lg' />
                        <input type="text" className='outline-none bg-transparent border-2 border-[#5A5A5A] w-[600px] p-1 rounded-lg' />
                        <input type="text" className='outline-none bg-transparent border-2 border-[#5A5A5A] w-[600px] p-1 rounded-lg' />

                    </div>

                    <div>
                        <h1 className='font-bold text-[#5A5A5A] text-lg' >Description Bullets</h1>
                        <textarea name="" id="" cols="67" rows="10" className='bg-transparent outline-none border-2 border-[#5A5A5A] rounded-lg'></textarea>

                    </div>

                    <div className='flex items-center'>
                        <CheckButton text='Customization' />
                    </div>

                    <div>
                        <h1 className='font-bold text-[#5A5A5A] text-lg' > Customization Description </h1>
                        <textarea name="" id="" cols="67" rows="5" className='bg-transparent outline-none border-2 border-[#5A5A5A] rounded-lg'></textarea>

                    </div>

                    <div className='space-y-2'>
                        <h1 className='font-bold text-[#5A5A5A] text-md'>Edit Customization Content</h1>
                        <div className='flex items-center space-x-3'>
                            <CheckButton text='Text Box' />
                            <CheckButton text='Text Color' />
                            <CheckButton text='Font Style' />
                            <CheckButton text='Note Box' />

                        </div>
                    </div>


                    <div className='space-y-2'>
                        <h1 className='font-bold text-[#5A5A5A] text-md'>Return/Refund/Exchange Policy</h1>
                        <div className='p-1 border-2 flex items-center justify-between rounded-md border-[#5A5A5A] w-[250px]'>
                            <h2 className='px-2 text-sm'>accept return and exchange</h2>
                            <FiChevronDown className='font-bold text-xl text-[#5A5A5A]' />
                        </div>

                    </div>

                    <div className='space-y-2'>
                        <h1 className='font-bold text-[#5A5A5A] text-md'>Shipping Terms</h1>
                        <p className='text-[#5A5A5A] text-sm'>How many business days to prepare?</p>
                        <input type="number" className='outline-none bg-transparent border-2 border-[#5A5A5A] w-[50px] p-1 rounded-lg' />


                    </div>

                    <div className='space-y-2'>
                        <button className='text-white font-bold bg-[#E54611] text-sm px-3 py-2 rounded-md'>Calculate Product Scores</button>
                        <p className='text-[#5A5A5A] text-sm'>Help Lovie Aurora to calculate your product score, it will be the only factor to decide whether Lovie Aurora lists this product.</p>
                    </div>


                    <div className='space-y-2'>
                        <h1 className='font-bold text-[#5A5A5A] text-md'>Define your product</h1>
                        <div className='flex items-center space-x-3'>
                            <CheckButton text='Handmade' />
                            <CheckButton text='Original Design' />
                            <CheckButton text='Premium Quality' />
                            <CheckButton text='Custom' />

                        </div>
                    </div>

                    <div className='space-y-1'>
                        <h1 className='font-bold text-[#5A5A5A] text-md'>Product Url, if applicable.( Etsy, Amazon, Taobao and etc)</h1>
                        <input type="text" className='outline-none bg-transparent border-2 border-[#5A5A5A] w-[450px] p-1 rounded-lg' />


                    </div>

                    <div className='space-y-2'>
                        <h1 className='font-bold text-[#5A5A5A] text-md'>Product manufacture</h1>
                        <div className='flex items-center space-x-3'>
                            <CheckButton text='100% productce by machine' />
                            <CheckButton text='productce by the combination of hands and machines' />


                        </div>
                    </div>

                    <div className='space-y-2'>
                        <h1 className='font-bold text-[#5A5A5A] text-md'>Have advanced manufacturing technology</h1>
                        <div className='flex items-center space-x-3'>
                            <CheckButton text='yes' />
                            <CheckButton text='no' />


                        </div>
                    </div>


                    <div className='space-y-2'>
                        <h1 className='font-bold text-[#5A5A5A] text-md'>How long it will last for usage?</h1>
                        <div className='flex items-center space-x-3'>
                            <CheckButton text='within 5 years' />
                            <CheckButton text='more than 5 years' />


                        </div>
                    </div>

                    <div className='space-y-2'>
                        <h1 className='font-bold text-[#5A5A5A] text-md'>Any potential issues to affect user exoerience</h1>
                        <div className='flex items-center space-x-3'>
                            <CheckButton text='yes' />
                            <CheckButton text='no' />


                        </div>
                    </div>

                    <div className='space-y-2'>
                        <input type="text" className='outline-none bg-transparent border-2 border-[#5A5A5A] w-[350px] p-1 rounded-lg' />
                        <p className='text-[#5A5A5A] text-xs'>Disclose the flaw of your product, this could help us market your product in a proper way and minimise customer dissatisfaction</p>
                    </div>

                    <button className='text-white font-bold bg-[#E54611] text-sm px-3 py-2 rounded-md'>Send a sample to Lovie Aurora Warehouse</button>

                    <div className='space-y-1'>
                        <h2 className='text-md text-[#5A5A5A]'>Sender Name</h2>
                        <input type="text" className='outline-none bg-transparent border-2 border-[#5A5A5A] w-[300px] p-1 rounded-lg' />

                    </div>
                    <div className='space-y-1'>
                        <h2 className='text-md text-[#5A5A5A]'>Sender Email</h2>
                        <input type="email" className='outline-none bg-transparent border-2 border-[#5A5A5A] w-[300px] p-1 rounded-lg' />

                    </div>
                    <div className='space-y-1'>
                        <h2 className='text-md text-[#5A5A5A]'>Sender Phone</h2>
                        <input type="number" className='outline-none bg-transparent border-2 border-[#5A5A5A] w-[300px] p-1 rounded-lg' />

                    </div>

                    <div className='space-y-1'>
                        <h2 className='text-md text-[#5A5A5A]'>Ship-from address</h2>
                        <textarea name="" id="" cols="40" rows="5" className='bg-transparent outline-none border-2 border-[#5A5A5A] rounded-lg'></textarea>

                    </div>

                    <div className='space-y-1'>
                        <h2 className='text-md text-[#5A5A5A]'>Ship-back address(Include Name, Phone# and Address)</h2>
                        <textarea name="" id="" cols="40" rows="5" className='bg-transparent outline-none border-2 border-[#5A5A5A] rounded-lg'></textarea>

                    </div>

                    <div className='space-y-1'>


                        <div className='flex items-center space-x-20'>

                            <div>
                                <h2 className=' text-[#5A5A5A] text-md'>Color</h2>
                                <input type="text" className='outline-none bg-transparent border-2 border-[#5A5A5A] w-[50px] p-1 rounded-lg' />
                            </div>

                            <div>
                                <h2 className='text-[#5A5A5A] text-md'>Size</h2>
                                <input type="number" className='outline-none bg-transparent border-2 border-[#5A5A5A] w-[50px] p-1 rounded-lg' />
                            </div>

                        </div>
                    </div>


                    <div className='space-y-1'>
                        <h2 className='text-md text-[#5A5A5A]'>Shipping Carrier</h2>
                        <input type="text" className='outline-none bg-transparent border-2 border-[#5A5A5A] w-[300px] p-1 rounded-lg' />

                    </div>

                    <div className='space-y-1'>
                        <h2 className='text-md text-[#5A5A5A]'>Shipping Date</h2>
                        <input type="text" className='outline-none bg-transparent border-2 border-[#5A5A5A] w-[300px] p-1 rounded-lg' />

                    </div>

                    <div className='space-y-1'>
                        <h2 className='text-md text-[#5A5A5A]'>Tracking #</h2>
                        <input type="text" className='outline-none bg-transparent border-2 border-[#5A5A5A] w-[300px] p-1 rounded-lg' />

                    </div>

                    <div>

                        <p className='text-sm text-[#5A5A5A]'>Note: if the product gains our approval, the listing would become active immediately, and the sample would become an invotory rather than shipping back to you.Only samples that failed to Lovie Aurora Listing Approval
                            would be returned back to sellers.</p>
                    </div>

                    <div className='flex space-x-5'>
                        <button className='text-white font-bold bg-[#E54611] text-sm px-3 py-2 rounded-md'>Confirm Product</button>
                        <button className='text-white font-bold bg-[#E54611] text-sm px-3 py-2 rounded-md'>Save for Later</button>

                    </div>
                </div>

            </main>
        </VendorLayout>
    );
}

export default AddProduct;
