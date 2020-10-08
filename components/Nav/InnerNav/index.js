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
      {
        navItems.map(item => <NavItem link={item.link} label={item.label} active={router.pathname === item.link} />)
      }
      <p className='text-red text-sm cursor-pointer text-right pr-12 pb-2 pt-2'>{destructiveAction}</p>
    </div>
  )
};

export default Index;