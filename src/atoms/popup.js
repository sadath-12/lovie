import { atom } from "recoil";

export const modalState = atom({
  key: "modalState",
  default: false,
});

export const loginModal = atom({
  key: "loginState",
  default: false,
});


export const paypalpopup = atom({
  key: "paypal",
  default: false,
});

export const Paypaldraw = atom({
  key: "paypal withdraw",
  default: false,
});

export const bankWithdraw = atom({
  key: "bank withdraw",
  default: false,
});

export const createProfilePopup = atom({
  key: "createProfilePopup",
  default: {
    type: 'create',
    show: false
  },
});
export const OrderPopup = atom({
  key: "OrderPopup",
  default: {
    type: 'cancel',
    show: false
  },
});
export const reviewPopup = atom({
  key: "reviewPopup",
  default: false
});
export const sellership = atom({
  key: "sellership",
  default: false
});
export const buyerPopup = atom({
  key: "buyerPopup",
  default: {
    type: 'changePassword',
    open: false
  }
});
