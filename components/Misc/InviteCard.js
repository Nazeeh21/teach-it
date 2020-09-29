import React from 'react'

const InviteCard = () => {
  return (
    <div className='h-auto w-full flex flex-col'>
      <div
        style={{
          backgroundImage: 'url("nazeeh_profile.jpg")',
          backgroundSize: 'cover',
        }}
        className='cursor-pointer rounded-tl-lg rounded-tr-lg w-full h-40'
      ></div>
      <div className='bg-white pt-2 pb-4 pl-8 pr-8 m-auto w-full rounded-bl-lg rounded-br-lg'>
        <h3 className='text-2xl mb-3 mt-3'>Invite an expert</h3>
        <p className='text-sm leading-4 mt-3'>
          Couldn't find what you were looking for? Invite your own experts &
          earn 5% of their earnings for 3 months!
        </p>
        <div className='w-2/3 mt-6'>
          <button className='bg-white text-secondary border-secondary border-2 rounded-lg pt-2 pb-2 pl-6 pr-6'>Invite</button>
        </div>
      </div>
    </div>
  )
};

export default InviteCard;
