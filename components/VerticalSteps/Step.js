import React from 'react'

const Step = ({ index, label, done = false, active = false, id }) => {
  const scrollToId = () => {
    document.getElementById(id).scrollIntoView()
  }

  return (
    <div className='flex items-center w-full mb-10 cursor-pointer'>
      {done ? (
        <div onClick={scrollToId} className='p-2 bg-secondary rounded-full w-auto'>
          <img className='w-4' src='tick.svg' />
        </div>
      ) : (
        <div onClick={scrollToId} className={`border-2 rounded-full border-${active ? 'secondary' : 'none'} bg-highlight p-1 px-3 w-auto cursor-pointer`}>
          {index}
        </div>
      )}
      <p className='ml-2 text-lg'>{label}</p>
    </div>
  )
};

export default Step;
