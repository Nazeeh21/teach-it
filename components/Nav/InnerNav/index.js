import React from 'react'
import NavItem from './NavItem'

const Index = ({ navItems, destructiveAction = 'Unsubscribe' }) => {
  // return (
  //   <div className='bg-white rounded-lg pt-4 pb-4'>
  //     <NavItem label='Service' active />
  //     <NavItem label='Service information' />
  //     <NavItem label='Questions' />
  //     <p className='text-red text-sm cursor-pointer text-right pr-12 pb-2 pt-2'>Unsubscribe</p>
  //   </div>
  // )

  return (
    <div className='bg-white rounded-lg pt-4 pb-4'>
      <NavItem label='Service' active />
      <NavItem label='General' />
      <NavItem label='App' />
      <NavItem label='Payments' />
      <NavItem label='Profile' />
      <p className='text-red text-sm cursor-pointer text-right pr-12 pb-2 pt-2'>Disable account</p>
    </div>
  )
};

export default Index;