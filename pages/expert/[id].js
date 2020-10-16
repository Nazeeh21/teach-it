import React from 'react'
import LayoutProvider from '../../layout/LayoutProvider'
import Profile from '../../views/Common/Profile'
import ProfileOverview from '../../components/Profile/ProfileOverview'
import { useRouter } from 'next/router'

const Index = () => {
  const router = useRouter()
  const id = router.query.id
  console.log(id)
  return (
    <LayoutProvider rightContent={<ProfileOverview />}>
      <Profile type='provider' id={id} />
    </LayoutProvider>
  )
}

export default Index
