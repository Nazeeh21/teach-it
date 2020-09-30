import React from 'react'
import EgImages from './EgImages/EgImages'
import Text from './Text/Text'

const EnablingVideoEntrep = () => (
  <div className='bg-white py-20 flex flex-col lg:flex-row items-center lg:p-5 lg:py-24'>
    <div className='w-full lg:w-7/12'>
      <EgImages /> 
    </div>
    <div className=' w-full lg:w-5/12'>
      <Text />
    </div>
  </div>
)

export default EnablingVideoEntrep
