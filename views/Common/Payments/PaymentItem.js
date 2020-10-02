import React from "react";

const PaymentItem = ({ label = 'Payment done', pending = false, amount = '480', days = 3}) => {
  return (
    <div className="w-full pb-6 pt-6 border-b-2 border-highlight grid grid-cols-2 gap-4">
      <div className="flex flex-row">
        <div className="bg-highlight rounded-lg w-2/12 p-4">
          <img
            alt="Payment"
            src="payment_icons/outwards.svg"
            className="w-full"
          />
        </div>
        <div className="flex flex-col ml-4">
          <p className="text-md">{label}</p>
          <p className="text-darkGrey text-sm">{days} days ago</p>
        </div>
        {pending && (
          <div className="text-darkGrey text-xs pl-4 pr-4 pt-1 pb-1 rounded-lg bg-highlight h-6 ml-2">
            <p>Pending</p>
          </div>
        )}
      </div>
      <div className="justify-self-end">
        <p className="text-3xl text-darkGrey justify-self-end">₹ {amount}</p>
      </div>
    </div>
  );
};

export default PaymentItem;
