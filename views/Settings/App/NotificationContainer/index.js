import React from 'react'
import CheckboxContainer from './CheckboxContainer'
import {v4 as uuid} from 'uuid'

const notificationFrequency = ['Daily', 'Weekly', 'Monthly', 'Never']

const NotificationContainer = ({notificationMethod}) => (
  <div className='w-full bg-lightGrey py-4 pl-4 text-darkGrey md:grid md:grid-cols-3 md:grid-rows-1 items-center'>
    <p className='mb-3 md:mb-0 text-black text-lg font-medium'>{notificationMethod}</p>
    <div className='flex flex-col md:flex-row md:justify-self-end md:col-span-2'>
      {notificationFrequency.map(frequency => (
        <div key={() => uuid()} className='mb-5 md:mb-0 mr-6'>
          <CheckboxContainer label={frequency} />
        </div>
      ))}
    </div>
  </div>
)

export default NotificationContainer