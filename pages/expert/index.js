import React from 'react'
import LayoutProvider from '../../layout/LayoutProvider'
import Profile from '../../views/Common/Profile'
import ProfileOverview from '../../components/Profile/ProfileOverview'

const Index = () => {
  return (
    <LayoutProvider rightContent={<ProfileOverview />}>
      <Profile type='provider' id='1' />
    </LayoutProvider>
  )
}

export default Index
