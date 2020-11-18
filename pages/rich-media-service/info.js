import React from 'react'
import LayoutProvider from '../../layout/LayoutProvider'
import InnerNav from '../../components/Nav/InnerNav'
import ViewService from '../../views/Common/ViewService/ViewService'
import { richService as navItems } from '../../constants/nav_items'

const Settings = () => {
  return (
    <LayoutProvider
      alternate
      rightContent={
        <InnerNav navItems={navItems} destructiveAction="Unsubscribe" />
      }
    >
      <ViewService />
    </LayoutProvider>
  )
}

export default Settings
