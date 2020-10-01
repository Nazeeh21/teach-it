import React from 'react'
import EgImages from './EgImages/EgImages'
import Text from './Text/Text'

const EnablingVideoEntrep = () => (
  <div className='bg-white py-20 flex flex-col md:flex-row items-center md:p-3 xl:p-5 xl:py-24'>
    <div className='w-full md:w-7/12'>
      <EgImages /> 
    </div>
    <div className=' w-full md:w-5/12'>
      <Text />
    </div>
  </div>
)

export default EnablingVideoEntrep
