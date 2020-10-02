import React from 'react'
import CheckboxContainer from './CheckboxContainer'

const notificationFrequency = ['Daily', 'Weekly', 'Monthly', 'Never']

const NotificationContainer = ({notificationMethod}) => (
  <div className='w-full bg-lightGrey py-4 pl-4 text-darkGrey grid grid-cols-3 grid-rows-1 items-center'>
    <p className='text-black text-lg font-medium'>{notificationMethod}</p>
    <div className='flex justify-self-end col-span-2'>
      {notificationFrequency.map(frequency => (
        <div className='mr-6'>
          <CheckboxContainer label={frequency} />
        </div>
      ))}
    </div>
  </div>
)

export default NotificationContainer