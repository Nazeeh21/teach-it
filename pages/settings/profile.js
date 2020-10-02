import React from 'react'
import LayoutProvider from '../../layout/LayoutProvider'
import InnerNav from '../../components/Nav/InnerNav'
import Profile from '../../views/Settings/Profile'

const Settings = () => {
  return (
    <LayoutProvider alternate rightContent={<InnerNav />}>
      <Profile />
    </LayoutProvider>
  )
}

export default Settings