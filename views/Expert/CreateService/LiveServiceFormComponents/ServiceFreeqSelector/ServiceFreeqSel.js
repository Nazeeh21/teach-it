import React from 'react'
import Pills from '../../../../../components/Misc/3Pills/3Pills'

export default () => (
  <React.Fragment>
    <div className='w-full'>
      <p className='my-2 text-lg font-medium'>Service freequency</p>
      
      <Pills
        width='6/12'
        color='white'
        label1='Per day'
        label2='Per week'
        label3='Per month'
      />
    </div>
    
  </React.Fragment>
)