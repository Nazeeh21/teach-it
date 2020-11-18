import React from 'react'
import LayoutProvider from '../../layout/LayoutProvider'
import InnerNav from '../../components/Nav/InnerNav'
import Profile from '../../views/Settings/Profile'
import { settings as navItems } from '../../constants/nav_items'

const Settings = () => {
  return (
    <LayoutProvider
      alternate
      rightContent={
        <InnerNav navItems={navItems} destructiveAction="Disable account" />
      }
    >
      <Profile />
    </LayoutProvider>
  )
}

export default Settings
