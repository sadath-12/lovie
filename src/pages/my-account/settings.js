import React, { useState } from "react";
import AppLayout from "../../components/layout/AppLayout";
import { Checkmark } from "react-ionicons";
import { useRecoilState } from 'recoil';
import BuyerPupups from "../../components/popups/BuyerPupups";
import { buyerPopup, createProfilePopup } from "../../atoms/popup";
import CreateProfile from "../../components/popups/ProfilePopup";

const AccountSettings = () => {
  const [selected, setSelected] = useState("");
  const [billingAd, setBillingAd] = useState(false);
  const [shippingAd, setShippingAd] = useState(false);
  const [terms, setTerms] = useState(false);
  const [data, setData] = useRecoilState(buyerPopup);
  const [open, setOpen] = useRecoilState(createProfilePopup);

  const handleOpenPopup = (text) => {
    setData({ ...data, open: true, type: text })
  }
  const handleChangeUserData = () => {
    setOpen({ ...data, show: true, type: 'edit' })
  }
  return (
    <AppLayout>
      <BuyerPupups />
      <CreateProfile />
      <div className="flex flex-col mt-6">
        <h1 className="text-4xl text-center font-semibold text-coolDarkerGreen">
          Your Account
        </h1>
        {/* ITEMS */}
        <div className="rounded-lg shadow-xl bg-[#FDFDFD] py-20 px-20 mt-10">
          <div className="flex gap-10 justify-between">
            <div className="flex-1">
              <div className="border-b border-coolDarkerGreen pb-2">
                <h3 className="uppercase font-cool font-semibold text-lg">
                  Personal Details
                </h3>
              </div>
              <div className="flex justify-between mt-4 ">
                <div>
                  <p className="mb-1 text-textColor">Name:</p>
                  <p className="mb-1 text-textColor">Customer No.:</p>
                  <p className="mb-1 text-textColor">Email:</p>
                  <p className="text-textColor">Date of Birth:</p>
                </div>
                <div className="flex flex-col items-start">
                  <input
                    className="mb-1 text-textColor bg-[#FDFDFD] focus:outline-none"
                    placeholder="Suzy Butler"
                    defaultValue="Suzy Butler"
                  />
                  <input
                    className="mb-1 text-textColor bg-[#FDFDFD] focus:outline-none"
                    placeholder="012345"
                    defaultValue="012345"
                  />
                  <input
                    className="mb-1 text-textColor bg-[#FDFDFD] focus:outline-none"
                    placeholder="suzybutler@gmail.com"
                    defaultValue="suzybutler@gmail.com"
                  />
                  <input
                    className="text-textColor bg-[#FDFDFD] focus:outline-none"
                    placeholder="02 / 12 / 1981"
                    defaultValue="02 / 12 / 1981"
                  />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button onClick={handleChangeUserData} className="text-coolOrange text-sm mt-6 underline">
                  edit
                </button>
                <button onClick={() => handleOpenPopup('changePassword')} className="text-coolOrange text-sm mt-6 underline">
                  change password
                </button>
              </div>
            </div>
            <div className="flex-1">
              <div className="border-b border-coolDarkerGreen pb-2">
                <h3 className="uppercase font-cool font-semibold text-lg">
                  Payment Methods
                </h3>
              </div>
              <div className="flex justify-between mt-4">
                <div className="font-semubild">
                  <p className="mb-1 text-textColor">Name on card:</p>
                  <p className="mb-1 text-textColor">Card Number:</p>
                  <p className="mb-1 text-textColor">Expiry Date:</p>
                  <p className="text-textColor">CVC:</p>
                </div>
                <div className="flex flex-col items-start">
                  <p className="mb-1 text-textColor">Suzy Butler</p>
                  <p className="mb-1 text-textColor">XXXX XXXX XXXX 1234</p>
                  <p className="mb-1 text-textColor">01/20</p>
                  <p className="text-textColor">123</p>
                </div>
              </div>
              <div className="flex items-center">
                <button onClick={() => handleOpenPopup('changeCard')} className="text-coolOrange text-sm mt-6 underline mr-4">
                  edit
                </button>
                <button onClick={() => handleOpenPopup('addCard')} className="text-coolOrange text-sm mt-6 underline">
                  add new card
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-10 justify-between mt-20">
            <div className="flex-1">
              <div className="border-b border-coolDarkerGreen pb-2">
                <h3 className="uppercase font-cool font-semibold text-lg">
                  Addresses
                </h3>
              </div>
              <div className="mt-4">
                <p className="mb-1 text-textColor">26 Jamway Road</p>
                <p className="mb-1 text-textColor">Twearlsodn</p>
                <p className="mb-1 text-textColor">Convetry,</p>
                <p className="mb-1 text-textColor">Warwickshire</p>
                <p className="text-textColor mb-7">CV1 678</p>
                <div className="flex">
                  <button
                    type="button"
                    onClick={() => setBillingAd(!billingAd)}
                    className={`${billingAd
                      ? "bg-coolDarkerGreen border border-white"
                      : "border border-coolDarkGreen"
                      } rounded-md`}
                  >
                    <Checkmark color="white" />
                  </button>
                  <p className="text-coolDarkerGreen ml-2">
                    Default billing address
                  </p>
                </div>
                <div className="flex mt-4">
                  <button
                    type="button"
                    onClick={() => setShippingAd(!shippingAd)}
                    className={`${shippingAd
                      ? "bg-coolDarkerGreen border border-white"
                      : "border border-coolDarkGreen"
                      } rounded-md`}
                  >
                    <Checkmark color="white" />
                  </button>
                  <p className="text-coolDarkerGreen ml-2">
                    Default shipping address
                  </p>
                </div>
                <button onClick={() => handleOpenPopup('editAddress')} className="text-coolOrange text-sm mt-6 underline mr-2">
                  edit
                </button>
              </div>
            </div>
            <div className="flex-1">
              <div className="border-b border-coolDarkerGreen pb-2">
                <h3 className="uppercase font-cool font-semibold text-lg">
                  Order History
                </h3>
              </div>
              <table className="w-full mt-4">
                <thead>
                  <tr className="text-left text-sm my-2">
                    <th className="pb-1 font-bold">Order Date:</th>
                    <th className="pb-1 font-bold">Order No:</th>
                    <th className="pb-1 font-bold">Tracking No:</th>
                    <th className="pb-1 font-bold">Status</th>
                    <th className="pb-1 font-bold">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-sm text-textColor pt-4">12/09/2021</td>
                    <td className="text-sm text-textColor pt-4">#12345</td>
                    <td className="text-sm text-textColor pt-4">#54321</td>
                    <td className="text-sm text-textColor pt-4">Delivered</td>
                    <td className="text-sm text-textColor pt-4">$123.00</td>
                  </tr>

                  <tr>
                    <td className="text-sm text-textColor pt-4">12/09/2021</td>
                    <td className="text-sm text-textColor pt-4">#12345</td>
                    <td className="text-sm text-textColor pt-4">#54321</td>
                    <td className="text-sm text-textColor pt-4">Delivered</td>
                    <td className="text-sm text-textColor pt-4">$123.00</td>
                  </tr>

                  <tr>
                    <td className="text-sm text-textColor pt-4">12/09/2021</td>
                    <td className="text-sm text-textColor pt-4">#12345</td>
                    <td className="text-sm text-textColor pt-4">#54321</td>
                    <td className="text-sm text-textColor pt-4">Delivered</td>
                    <td className="text-sm text-textColor pt-4">$123.00</td>
                  </tr>

                  <tr>
                    <td className="text-sm text-textColor pt-4">12/09/2021</td>
                    <td className="text-sm text-textColor pt-4">#12345</td>
                    <td className="text-sm text-textColor pt-4">#54321</td>
                    <td className="text-sm text-textColor pt-4">Delivered</td>
                    <td className="text-sm text-textColor pt-4">$123.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex gap-10 justify-between mt-20">
            <div className="flex-1">
              <div className="border-b border-gray-200 pb-2">
                <h3 className="uppercase font-cool font-semibold text-lg">
                  Contact Preferences
                </h3>
              </div>
              <div className="flex items-center mt-4">
                <button
                  type="button"
                  onClick={() => setTerms(!terms)}
                  className={`${terms
                    ? "bg-coolDarkGreen border border-white"
                    : "border border-coolDarkGreen"
                    } rounded-md`}
                >
                  <Checkmark color="white" />
                </button>
                <p className="text-coolDarkGreen ml-2 text-xs">
                  Yes, I want to receive the LOVIE AURORA newsletter, as well as
                  hear about special offers, events, news and updates
                </p>
              </div>
              <button className="text-white bg-coolDarkGreen py-2 px-4 uppercase text-sm mt-6 rounded-lg">
                Update preferences
              </button>
            </div>
            <div className="flex-1"></div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default AccountSettings;
