import React from 'react'
import LayoutProvider from '../../layout/LayoutProvider'
import InnerNav from '../../components/Nav/InnerNav'
import Service from '../../views/Settings/Service'

const Settings = () => {
  return (
    <LayoutProvider alternate rightContent={<InnerNav />}>
      <Service />
    </LayoutProvider>
  )
}

export default Settings