import React from 'react'
import LayoutProvider from '../../layout/LayoutProvider'
import InnerNav from '../../components/Nav/InnerNav'
import General from '../../views/Settings/General'
import { settings as navItems } from '../../constants/nav_items'

const Settings = () => {
  return (
    <LayoutProvider alternate rightContent={<InnerNav navItems={navItems} destructiveAction='Disable account' />}>
      <General />
    </LayoutProvider>
  )
}

export default Settings