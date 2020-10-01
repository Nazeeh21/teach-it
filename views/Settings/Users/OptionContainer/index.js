import React from 'react'
import BackDrop from '../../../../components/Backdrop'

const OptionContainer = ({ show, clickHandler}) => (
  show && <div className='absolute '>
    <div className='p-1 bg-white '>
    <BackDrop show={show} clicked={clickHandler} />
    <div style={{zIndex: '500'}}>
      <p className='text-sm font-medium cursor-pointer px-1 py-1'>View Profile</p>
      <p className='text-sm font-medium cursor-pointer px-1 py-1'>Send message</p>
      <p className='text-sm font-medium cursor-pointer text-red px-1 py-1'>Delete user</p>
    </div>
    
  </div>
  </div>
)

export default OptionContainer