import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { getProviderProfile } from '../../services/profile'
import LayoutProvider from '../../layout/LayoutProvider'
import Profile from '../../views/Common/Profile'
import ProfileOverview from '../../components/Profile/ProfileOverview'

const Index = () => {
  const router = useRouter()
  const id = router.query.id

  let token = useSelector((state) => state.auth.token)
  let profileId = useSelector((state) => state.app.currentProfile)

  const [profileData, setProfileData] = useState()

  useEffect(() => {
    getProviderProfile(id, profileId, token)
      .then((data) => setProfileData(data))
      .catch((e) => console.log('Error while setting profile data', e))
  }, [token, profileId, id])

  return (
    <LayoutProvider
      rightContent={<ProfileOverview profileData={profileData} />}
    >
      <Profile profileData={profileData} />
    </LayoutProvider>
  )
}

export default Index
