import React, { useEffect, useState } from 'react'
import { Icon } from '../../Images/Icon'
import NavSwitch from '../../NavSwitch'
import ProfileSwitch from '../../ProfileSwitch'
import { useRouter } from 'next/router'
import Notifications from '../../Notifications'
import MobileBottomNav from '../MobileBottomNav'
import { fetchAllProfiles } from '../../../services/profile'
import { useDispatch, useSelector } from 'react-redux'
import {
  logout,
  setProviderId,
  switchProfile,
} from '../../../store/actions/appActions'
import Toolbar from '../../Navigation/Toolbar/Index'
import SideDrawer from '../../Navigation/SideDrawer/Index'

const placeholderAvi = '/avis/ana.png'

const Index = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const [showNotifications, setShowNotifications] = useState(false)

  const [otherProfiles, setOtherProfiles] = useState(null)
  const [currentProfile, setCurrentProfile] = useState(null)

  const [showAllProfiles, setShowAllProfiles] = useState(false)
  const token = useSelector((state) => state.auth.token)
  const currentProfileID = useSelector((state) => state.app.currentProfile)

  const logoutHandler = () => {
    dispatch(logout())
    router.push('/login')
  }

  const [showSideDrawer, setShowSideDrawer] = useState(false)

  useEffect(() => {
    if (token && currentProfileID) {
      fetchAllProfiles(logoutHandler, token, currentProfileID)
        .then((res) => {
          console.log('All profiles data: ', res)
          const currentProfileData = res.filter(
            (profile) => profile.id == currentProfileID
          )
          console.log('CurrentProfileData', currentProfileData[0])
          setCurrentProfile(currentProfileData[0])

          if (currentProfileData[0].provider) {
            console.log(
              'logging currentProfile providerPk',
              currentProfileData[0].provider.pk
            )
            dispatch(setProviderId(currentProfileData[0].provider.pk))
          }

          console.log('Current profile data : ', currentProfileData[0])

          const otherProfilesData = res.filter(
            (profile) => profile.id != currentProfileID
          )
          setOtherProfiles(otherProfilesData)
          console.log('Other profile data : ', otherProfilesData)
        })
        .catch((e) => console.log(e))
    }
  }, [currentProfileID, token])

  const notificationOpenHandler = () => setShowNotifications(true)

  const notificationCloseHandler = () => setShowNotifications(false)

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false)
  }

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer((prevState) => !prevState)
  }

  if (!token || !currentProfile) {
    return <div className="h-16 bg-white w-full"></div>
  }

  return (
    <div>
      {token && currentProfile && (
        <div>
          {showNotifications && (
            <Notifications
              show={showNotifications}
              clickHandler={notificationCloseHandler}
            />
          )}
          {/* SideDrawer */}
          <div className="lg:hidden">
            <Toolbar
              drawerToggleClicked={sideDrawerToggleHandler}
              notificationDiv={
                <div
                  className=" w-full lg:mr-24 "
                  onClick={notificationOpenHandler}
                >
                  <Icon
                    src="/misc/notifications.svg"
                    alt="Notifications"
                    onClick={notificationOpenHandler}
                  />
                </div>
              }
            />
            <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler}>
              <div className="mb-4 w-full sm:w-6/12 mx-auto ">
                <div style={{ marginTop: '1vh' }} className="flex flex-col ">
                  {currentProfile && !showAllProfiles && (
                    <div className="flex flex-row w-auto mx-auto p-2 border-2 border-darkGrey rounded">
                      <div className="mr-2 w-full">
                        <ProfileSwitch
                          forSideDrawer="true"
                          name={currentProfile.name}
                          profileSrc={currentProfile.avatar_url}
                          clickHandler={() => router.push('/profile')}
                        />
                      </div>

                      <img
                        src="/arrows/down.svg"
                        // alt="Switch profile"
                        className="cursor-pointer ml-2"
                        onClick={(e) =>
                          setShowAllProfiles((prevState) => !prevState)
                        }
                      />
                    </div>
                  )}
                </div>
                {showAllProfiles && (
                  <div
                    style={{ marginTop: '1.25vh' }}
                    className=" flex flex-col bg-white px-2 w-full border-gray-500 border-solid border-b-2 m-auto shadow-xl rounded-b"
                  >
                    <div className="flex flex-row">
                      <div className=" w-full">
                        <ProfileSwitch
                          forSideDrawer="true"
                          profileSrc={currentProfile.avatar_url}
                          name={currentProfile.name}
                          clickHandler={() => router.push('/profile')}
                        />
                      </div>
                      <img
                        src="/angle-arrow-up.svg"
                        // alt="Switch profile"
                        className="mr-2 cursor-pointer w-3"
                        onClick={(e) =>
                          setShowAllProfiles((prevState) => !prevState)
                        }
                      />
                    </div>
                    {otherProfiles &&
                      otherProfiles.map((profile, index) => (
                        <div className="mt-2 " key={index}>
                          <ProfileSwitch
                            forSideDrawer="true"
                            key={profile.name}
                            id={profile.id}
                            profileSrc={profile.avatar_url}
                            name={profile.name}
                            clickHandler={(id) => {
                              dispatch(switchProfile(id))
                              setShowAllProfiles((prevState) => !prevState)
                              // router.push('/dashboard')
                            }}
                          />
                        </div>
                      ))}
                    <div
                      onClick={() => {
                        dispatch(logout())
                        router.push('/login')
                      }}
                      className="font-medium text-center text-lg my-2 cursor-pointer"
                    >
                      Log out
                    </div>
                  </div>
                )}
              </div>
              <NavSwitch
                label1="Expert"
                color1="expert"
                label2="Learner"
                color2="learner"
              />
            </SideDrawer>
          </div>
          <div className="justify-items-center bg-white w-full grid sm:grid-cols-1 lg:grid-cols-2 gap-4 px-2 xs:px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16 py-2 items-center">
            <img
              onClick={() => router.push('/dashboard')}
              src="/logos/blue.svg"
              alt="Videowork"
              className="hidden sm:hidden lg:block cursor-pointer justify-self-start"
            />
            <div className="justify-self-end lg:justify-self-end flex sm:items-center">
              <div className="hidden lg:flex md:mr-24">
                <NavSwitch
                  label1="Expert"
                  color1="expert"
                  label2="Learner"
                  color2="learner"
                />
              </div>

              <div
                className=" w-full lg:mr-24"
                onClick={notificationOpenHandler}
              >
                <Icon
                  src="/misc/notifications.svg"
                  alt="Notifications"
                  onClick={notificationOpenHandler}
                />
              </div>
              {/* <div> */}
              <div
                style={{ marginTop: '1.3vh' }}
                className="hidden lg:flex flex-col right-0 mr-10 absolute justify-self-end"
              >
                {currentProfile && !showAllProfiles && (
                  <div className="flex flex-row">
                    <div className="mr-2">
                      <ProfileSwitch
                        name={currentProfile.name}
                        profileSrc={currentProfile.avatar_url || placeholderAvi}
                        clickHandler={() => router.push('/profile')}
                      />
                    </div>

                    <img
                      src="/arrows/down.svg"
                      // alt="Switch profile"
                      className="cursor-pointer"
                      onClick={(e) =>
                        setShowAllProfiles((prevState) => !prevState)
                      }
                    />
                  </div>
                )}
              </div>
              {showAllProfiles && (
                <div
                  style={{ marginTop: '2.9vh' }}
                  className="hidden lg:flex flex-col right-0 top-0 mr-8 absolute justify-self-end bg-white px-2 border-gray-500 border-solid border-b-2 shadow-xl rounded-b"
                >
                  <div className="flex flex-row">
                    <div className="mr-2">
                      <ProfileSwitch
                        profileSrc={currentProfile.avatar_url || placeholderAvi}
                        name={currentProfile.name}
                        clickHandler={() => router.push('/profile')}
                      />
                    </div>
                    <img
                      src="/angle-arrow-up.svg"
                      // alt="Switch profile"
                      className="cursor-pointer w-3"
                      onClick={(e) =>
                        setShowAllProfiles((prevState) => !prevState)
                      }
                    />
                  </div>
                  {otherProfiles &&
                    otherProfiles.map((profile, index) => (
                      <div className="mt-2 -ml-2" key={index}>
                        <ProfileSwitch
                          key={profile.name}
                          id={profile.id}
                          profileSrc={profile.avatar_url || placeholderAvi}
                          name={profile.name}
                          clickHandler={(id) => {
                            dispatch(switchProfile(id))
                            setShowAllProfiles((prevState) => !prevState)
                            // router.push('/dashboard')
                          }}
                        />
                      </div>
                    ))}
                  <div
                    onClick={() => {
                      logoutHandler()
                    }}
                    className="font-medium text-center my-2 cursor-pointer"
                  >
                    Log out
                  </div>
                </div>
              )}
            </div>
            {/* </div> */}
          </div>
          <MobileBottomNav />
        </div>
      )}
    </div>
  )
}

export default Index
