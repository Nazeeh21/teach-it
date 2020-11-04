import React, { useState } from 'react'
import Pills from '../../../../../components/Misc/3Pills/3Pills'

const ServiceFreeqSel = ({ activeLabel, setLabel}) => {

  return (
  <React.Fragment>
    <div className='w-full'>
      <p className='my-2 text-lg font-medium'>Service frequency</p>

      <Pills
        activeLabel={activeLabel}
        setLabel={setLabel}
        width='6/12'
        color='white'
        label1='Per day'
        label2='Per week'
        label3='Per month'
      />
    </div>

  </React.Fragment>)
}

export default ServiceFreeqSel