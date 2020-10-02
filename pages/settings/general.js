import React from 'react'
import LayoutProvider from '../../layout/LayoutProvider'
import InnerNav from '../../components/Nav/InnerNav'
import General from '../../views/Settings/General'

const Settings = () => {
  return (
    <LayoutProvider alternate rightContent={<InnerNav />}>
      <General />
    </LayoutProvider>
  )
}

export default Settings