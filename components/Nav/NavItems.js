import React from 'react'
import LeftNavItem from './LeftNavItem'
import { useRouter } from 'next/router'

const basePath = 'nav_icons/'

const NavItems = () => {
  const router = useRouter()

  return (
    <div className='w-full p-4 bg-white rounded-lg shadow-md'>
      <LeftNavItem
        clickHandler={() => router.push('/dashboard')}
        icon={`${basePath}home.svg`}
        label='Home'
      />
      <LeftNavItem
        clickHandler={() => router.push('/categories')}
        icon={`${basePath}categories.svg`}
        label='Categories'
      />
      <LeftNavItem
        clickHandler={() => router.push('/messages')}
        icon={`${basePath}messages.svg`}
        label='Messages'
      />
      <LeftNavItem
        clickHandler={() => router.push('/services')}
        icon={`${basePath}services.svg`}
        label='Services'
      />
      <LeftNavItem
        clickHandler={() => router.push('/payments')}
        icon={`${basePath}payments.svg`}
        label='Payments'
      />
      <LeftNavItem
        clickHandler={() => router.push('/support')}
        icon={`${basePath}support.svg`}
        label='Support'
      />
      <LeftNavItem
        clickHandler={() => router.push('/settings')}
        icon={`${basePath}settings.svg`}
        label='Settings'
      />
    </div>
  )
}

export default NavItems
