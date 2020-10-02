import React from 'react'

const EarningsCard = () => {
  return (
    <div className='flex sm:flex-col xl:flex-row bg-white rounded-lg w-full items-center shadow p-6 gap-6'>
      <div className='flex flex-col text-center sm:w-full xl:w-1/2'>
        <p className='text-darkGrey text-sm'>Total earnings</p>
        <p className='text-xl text-primary font-semibold'>₹ 243.5k</p>
      </div>
      <div className='sm:w-full xl:w-1/2'>
        <button className='bg-none text-center text-green rounded-lg border-2 border-green pl-3 pr-3 pt-1 pb-1 w-full'>
          Withdraw
        </button>
      </div>
    </div>
  )
};

export default EarningsCard;
