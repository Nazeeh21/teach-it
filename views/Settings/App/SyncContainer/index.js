import React, { useState } from 'react'

const SyncContainer = ({ text }) => {
  const [active, setActive] = useState(true)

  const ContainerClickHandler = () => setActive((prevState) => !prevState)

  return (
    <div
      className={`py-4 pl-5 cursor-pointer w-full rounded-lg border-2 border-${
        active ? 'secondary' : 'lightGrey'
      } border-l-${active ? 4 : 2}`} onClick={ContainerClickHandler}>
      <p className='text-lg font-medium'>{text}</p>
      <div className=''>
        {active ? (
          <div className='flex items-center'>
            <div className='mr-1'>
              <img src='/sync-icon.svg' alt='sync-icon' />
            </div>
            <p className='text-darkGrey text-sm'>Synced</p>
          </div>
        ) : (
          <p className='text-darkGrey text-sm'>Not synced</p>
        )}
      </div>
    </div>
  )
}

export default SyncContainer
