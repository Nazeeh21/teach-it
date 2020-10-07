import { useRouter } from 'next/router'
import React from 'react'
import NavItem from '../../../components/Nav/InnerNav/NavItem'

const SupportTickets = () => { 
  const router = useRouter()
   return (
  <div className='bg-white text-lg font-medium rounded-lg pt-4 pb-4'>
    <NavItem link='/support' label='Support tickets' active={router.pathname === '/support'} />
    <NavItem link='/support/new-ticket' label='New tickets' active={router.pathname === '/support/new-ticket'} />

  </div>
)}

export default SupportTickets