import React from "react";
import DeliveryInputs from "./DeliveryInputs";
import ShippingInputs from "./ShippingInputs";
import PaymentInputs from "./PaymentInputs";
import ContactInformation from "./ContactInformation";
import JoinMailingInput from "./JoinMailingInput";
import Button from "../inputs/Button";
import { useRouter } from "next/router";

const CheckoutForm = ({ cartItems }) => {
  const router = useRouter();
  return (
    <form>
      <DeliveryInputs />
      <ShippingInputs />
      <PaymentInputs />
      <ContactInformation />
      <JoinMailingInput />
      <Button
        // TODO: NEEDS TO BE FIXED
        type="button"
        onClick={() => router.push("/confirmation")}
        text="Confrim & Purchase"
        color="bg-coolDarkGreen text-xl"
        margin="mt-10"
      />
      <p className="text-xs text-coolDarkGreen mt-4 font-light">
        By placing an order, you affirm you have read, understood and consent to
        our <span className="font-medium">Privacy Policies</span> and{" "}
        <span className="font-medium">Terms and Conditions</span>
      </p>
    </form>
  );
};

export default CheckoutForm;
