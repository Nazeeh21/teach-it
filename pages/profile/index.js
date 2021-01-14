import React, { useEffect, useState } from 'react'
import LayoutProvider from '../../layout/LayoutProvider'
import Profile from '../../views/Common/Profile'
import ProfileOverview from '../../components/Profile/ProfileOverview'
import { useSelector } from 'react-redux'
import { fetchCurrentProfile } from '../../services/profile'
import CurrentProfileServices from '../../components/Profile/CurrentProfileServices'

const Index = () => {
  const token = useSelector((state) => state.auth.token)
  const currentProfileId = useSelector((state) => state.app.currentProfile)

  const [currentProfileData, setCurrentProfileData] = useState(null)

  useEffect(() => {
    if (token && currentProfileId) {
      fetchCurrentProfile(token, currentProfileId)
        .then((res) => {
          setCurrentProfileData(res[0])
          // console.log(res)
        })
        .catch((e) => console.log(e))
    }
  }, [token, currentProfileId])
  return (
    <LayoutProvider
      rightContent={<ProfileOverview profileData={currentProfileData} />}
    >
      <div>
        {currentProfileData && <Profile profileData={currentProfileData} />}
        <CurrentProfileServices />
      </div>
    </LayoutProvider>
  )
}

export default Index
