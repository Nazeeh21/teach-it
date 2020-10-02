import React from 'react'
import NavItem from './NavItem'
import { useRouter } from 'next/router'

const Index = ({ navItems, destructiveAction = 'Unsubscribe' }) => {
  const router = useRouter()
  
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
      <NavItem link='/settings/service' label='Service' active={router.pathname === '/settings/service'} />
      <NavItem link='/settings/general' label='General' active={router.pathname === '/settings/general'} />
      <NavItem link='/settings/app' label='App' active={router.pathname === '/settings/app'} />
      <NavItem link='/settings/payments' label='Payments' active={router.pathname === '/settings/payments'} />
      <NavItem link='/settings/profile' label='Profile' active={router.pathname === '/settings/profile'} />
      <p className='text-red text-sm cursor-pointer text-right pr-12 pb-2 pt-2'>Disable account</p>
    </div>
  )
};

export default Index;