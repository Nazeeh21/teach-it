import React from 'react'
import LeftNavItem from './LeftNavItem'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

const basePath = 'nav_icons/'

const NavItems = () => {
  const router = useRouter()
  const userType = useSelector(state => state.userType)

  return (
    <div className='w-full p-4 bg-white rounded-lg shadow-md'>
      <LeftNavItem
        clickHandler={() => router.push('/dashboard')}
        icon={`${basePath}home.svg`}
        label='Home'
        userType={userType}
        isActive={router.pathname === '/dashboard'}
      />
      <LeftNavItem
        clickHandler={() => router.push('/categories')}
        icon={`${basePath}categories.svg`}
        label='Categories'
        userType={userType}
        isActive={router.pathname === '/categories'}
      />
      <LeftNavItem
        clickHandler={() => router.push('/messages')}
        icon={`${basePath}messages.svg`}
        label='Messages'
        userType={userType}
        isActive={router.pathname === '/messages'}
      />
      <LeftNavItem
        clickHandler={() => router.push('/services')}
        icon={`${basePath}services.svg`}
        label='Services'
        userType={userType}
        isActive={router.pathname === '/services'}
      />
      <LeftNavItem
        clickHandler={() => router.push('/payments')}
        icon={`${basePath}payments.svg`}
        label='Payments'
        userType={userType}
        isActive={router.pathname === '/payments'}
      />
      <LeftNavItem
        clickHandler={() => router.push('/support')}
        icon={`${basePath}support.svg`}
        label='Support'
        userType={userType}
        isActive={router.pathname === '/support'}
      />
      <LeftNavItem
        clickHandler={() => router.push('/settings')}
        icon={`${basePath}settings.svg`}
        label='Settings'
        userType={userType}
        isActive={router.pathname === '/settings'}
      />
    </div>
  )
}

export default NavItems
