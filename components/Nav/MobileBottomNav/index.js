import React from 'react'
import LeftNavItem from './NavItem'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

const basePath = '/nav_icons/'

const NavItems = () => {
  const router = useRouter()
  const userType = useSelector((state) => state.userType)

  return (
    <div
      style={{ zIndex: 2000 }}
      className='justify-center lg:hidden xl:hidden fixed bottom-0 left-0 w-full items-center gap-4 p-4 bg-white rounded-lg shadow-md flex'
    >
      <LeftNavItem
        clickHandler={() => router.push('/dashboard')}
        icon={`${basePath}home_grey.svg`}
        label='Home'
        userType={userType}
        isActive={router.pathname === '/dashboard'}
      />
      <LeftNavItem
        clickHandler={() => router.push('/categories')}
        icon={`${basePath}categories_grey.svg`}
        label='Categories'
        userType={userType}
        isActive={router.pathname === '/categories'}
      />
      <LeftNavItem
        clickHandler={() => router.push('/messages')}
        icon={`${basePath}messages_grey.svg`}
        label='Messages'
        userType={userType}
        isActive={router.pathname === '/messages'}
      />
      <LeftNavItem
        clickHandler={() => router.push('/services')}
        icon={`${basePath}services_grey.svg`}
        label='Services'
        userType={userType}
        isActive={router.pathname === '/services'}
      />
      {/* <LeftNavItem
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
      /> */}
    </div>
  )
}

export default NavItems
