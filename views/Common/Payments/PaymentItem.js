import React from 'react'

const PaymentItem = ({ label, pending = false, amount, days }) => {
  return (
    <div className='w-full pb-6 pt-6 border-b-2 border-highlight grid grid-cols-2 gap-4'>
      <div className='flex flex-row'>
        <div className='bg-highlight rounded-lg w-2/12 p-4 h-12'>
          <img alt='Payment' src='payment_icons/outwards.svg' className='w-full' />
        </div>
        <div className='flex flex-col ml-4'>
          <p className='text-md'>Payment received</p>
          <p className='text-darkGrey text-sm'>3 days ago</p>
        </div>
        <div className='text-darkGrey text-xs pl-4 pr-4 pt-1 pb-1 rounded-lg bg-highlight h-6 ml-2'>
          <p>Pending</p>
        </div>
      </div>
      <div className='justify-self-end'>
        <p className='text-3xl text-darkGrey justify-self-end'>₹ 480</p>
      </div>
    </div>
  )
};

export default PaymentItem;
