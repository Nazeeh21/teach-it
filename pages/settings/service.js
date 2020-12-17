import React from 'react'
import LayoutProvider from '../../layout/LayoutProvider'
import InnerNav from '../../components/Nav/InnerNav'
import Service from '../../views/Settings/Service'
import { settings as navItems } from '../../constants/nav_items'

const Settings = () => {
  return (
    <LayoutProvider
      alternate
      rightContent={
        <InnerNav navItems={navItems} destructiveAction="Disable account" />
      }
    >
      <Service />
    </LayoutProvider>
  )
}

export default Settings
