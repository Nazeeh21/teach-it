import React from 'react'
import LayoutProvider from '../../layout/LayoutProvider'
import InnerNav from '../../components/Nav/InnerNav'
import App from '../../views/Settings/App'
import { settings as navItems } from '../../constants/nav_items'

const Settings = () => {
  return (
    <LayoutProvider alternate rightContent={<InnerNav navItems={navItems} destructiveAction='Disable account' />}>
      <App />
    </LayoutProvider>
  )
}

export default Settings