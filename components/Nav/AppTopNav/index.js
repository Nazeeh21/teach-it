import React, { useEffect, useState } from 'react'
import { Icon } from '../../Images/Icon'
import NavSwitch from '../../NavSwitch'
import ProfileSwitch from '../../ProfileSwitch'
import { useRouter } from 'next/router'
import Notifications from '../../Notifications'
import MobileBottomNav from '../MobileBottomNav'
import { fetchAllProfiles } from '../../../services/profile'
import { useDispatch, useSelector } from 'react-redux'
import { logout, switchProfile } from '../../../store/actions/appActions'

const Index = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const [showNotifications, setShowNotifications] = useState(false)

  const [otherProfiles, setOtherProfiles] = useState(null)
  const [currentProfile, setCurrentProfile] = useState(null)

  const [showAllProfiles, setShowAllProfiles] = useState(false)
  const token = useSelector((state) => state.auth.token)

  useEffect(() => {
    fetchAllProfiles()
      .then((res) => {
        console.log('ALl profiles data : ', res)
        const currentProfileData = res.filter(
          (profile) =>
            profile.id == window.localStorage.getItem('currentProfile')
        )
        setCurrentProfile(currentProfileData[0])
        console.log('Current profile data : ', currentProfileData[0])

        const otherProfilesData = res.filter(
          (profile) =>
            profile.id != window.localStorage.getItem('currentProfile')
        )
        setOtherProfiles(otherProfilesData)
        console.log('Other profile data : ', otherProfilesData)
      })
      .catch((e) => console.log(e))
  }, [])

  const notificationOpenHandler = () => setShowNotifications(true)

  const notificationCloseHandler = () => setShowNotifications(false)

  return (
    <div>
      {token && (
        // && currentProfile
        <div>
          {showNotifications && (
            <Notifications
              show={showNotifications}
              clickHandler={notificationCloseHandler}
            />
          )}
          <div className="justify-items-center bg-white w-full grid sm:grid-cols-1 lg:grid-cols-2 gap-4 px-2 xs:px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16 py-2 items-center">
            <img
              onClick={() => router.push('/dashboard')}
              src="/logos/blue.svg"
              alt="Videowork"
              className="hidden sm:hidden lg:block cursor-pointer justify-self-start"
            />
            <div className="lg:justify-self-end flex items-center">
              <div className="md:mr-24">
                <NavSwitch
                  label1="Expert"
                  color1="expert"
                  label2="Learner"
                  color2="learner"
                />
              </div>

              <div
                className="w-full md:mr-24"
                onClick={notificationOpenHandler}
              >
                <Icon
                  src="/misc/notifications.svg"
                  alt="Notifications"
                  onClick={notificationOpenHandler}
                />
              </div>
              <div className="flex flex-col right-0 mr-10 mt-2 absolute justify-self-end">
                {currentProfile && !showAllProfiles && (
                  <div className="flex flex-row">
                    <ProfileSwitch
                      name={currentProfile.name}
                      clickHandler={() => router.push('/profile')}
                    />
                    <img
                      src="/arrows/down.svg"
                      alt="Switch profile"
                      className="cursor-pointer"
                      onClick={(e) =>
                        setShowAllProfiles((prevState) => !prevState)
                      }
                    />
                  </div>
                )}
              </div>
              {otherProfiles && showAllProfiles && (
                <div className="flex flex-col right-0 top-0 mr-8 mt-4 absolute justify-self-end bg-white px-2 border-gray-500 border-solid border-b-2 shadow-xl rounded-b">
                  <div className="flex flex-row">
                    <ProfileSwitch
                      name={currentProfile.name}
                      clickHandler={() => router.push('/profile')}
                    />
                    <img
                      src="/angle-arrow-up.svg"
                      alt="Switch profile"
                      className="cursor-pointer w-3"
                      onClick={(e) =>
                        setShowAllProfiles((prevState) => !prevState)
                      }
                    />
                  </div>
                  {otherProfiles.map((profile) => (
                    <div className="mt-2">
                      <ProfileSwitch
                        key={profile.name}
                        id={profile.id}
                        name={profile.name}
                        clickHandler={(id) => {
                          dispatch(switchProfile(id))
                          setShowAllProfiles((prevState) => !prevState)
                          router.push('/dashboard')
                        }}
                      />
                    </div>
                  ))}
                  <div
                    onClick={() => {
                      dispatch(logout())
                      router.push('/login')
                    }}
                    className="font-medium text-center my-2 cursor-pointer"
                  >
                    Log out
                  </div>
                </div>
              )}
            </div>
          </div>
          <MobileBottomNav />
        </div>
      )}
    </div>
  )
}

export default Index
