"use client";

import { useState } from "react";
import Heading from "../display/HeadingComponent";
import Button from "../forms/Button";
import Input from "../forms/Input";

export default function PaymentDetails() {
  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    cardholderName: "",
    expiryDate: "",
    cvv: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentData({ ...paymentData, [name]: value });
  };

  return (
    <div className="space-y-8 my-10">
      <Heading
        content="Payment Details"
        subtitle="Manage your payment methods and billing information."
      />
      <p className="text-gray-400">
        Currently, no payment methods are linked. Please add a payment method to
        proceed with rentals.
      </p>
      <form action="">
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Card Number"
            value={paymentData.cardNumber}
            placeholder="1234 5678 9012 3456"
            onChange={handleInputChange}
          />
          <Input
            label="Cardholder Name"
            value={paymentData.cardholderName}
            placeholder="Chinedu Maxwell Emeka"
            onChange={handleInputChange}
          />
          <Input
            label="Expiry Date"
            value={paymentData.expiryDate}
            placeholder="MM/YY"
            onChange={handleInputChange}
          />
          <Input
            label="CVV"
            value={paymentData.cvv}
            placeholder="123"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex justify-between items-end w-full mt-5">
        <p className="text-gray-400">
            You can manage your payment methods here. If you have any issues, please
            contact <a href="#" className="text-white underline">support</a>.
        </p>
          <div className="w-[250px]">
            <Button content="Add Payment Method" />
          </div>
        </div>
      </form>
    </div>
  );
}
