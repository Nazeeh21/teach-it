import React from 'react'
import LayoutProvider from '../../layout/LayoutProvider'
import InnerNav from '../../components/Nav/InnerNav'
import Payments from '../../views/Settings/Payments'

const Settings = () => {
  return (
    <LayoutProvider alternate rightContent={<InnerNav />}>
      <Payments />
    </LayoutProvider>
  )
}

export default Settings