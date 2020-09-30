import React from 'react'
import LayoutProvider from '../../layout/LayoutProvider'
import Profile from '../../views/Common/Profile'
import ProfileOverview from '../../components/Profile/ProfileOverview'

const Index = () => {
  return (
    <LayoutProvider rightContent={<ProfileOverview />}>
      <Profile />
    </LayoutProvider>
  )
}

export default Index
