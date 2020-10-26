import React, { useEffect, useState } from 'react'
import { Icon } from '../../Images/Icon'
import NavSwitch from '../../NavSwitch'
import ProfileSwitch from '../../ProfileSwitch'
import { useRouter } from 'next/router'
import Notifications from '../../Notifications'
import MobileBottomNav from '../MobileBottomNav'
import { fetchAllProfiles } from '../../../services/fetchProfiles'
import { useDispatch } from 'react-redux'
import { switchProfile } from '../../../store/actions/appActions'

const Index = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const [showNotifications, setShowNotifications] = useState(false)

  const [otherProfiles, setOtherProfiles] = useState(null)
  const [currentProfile, setCurrentProfile] = useState(null)

  const [showAllProfiles, setShowAllProfiles] = useState(false)

  useEffect(() => {
    fetchAllProfiles()
      .then((res) => {
        const currentProfileData = res.filter(profile => profile.id == window.localStorage.getItem('currentProfile'))
        setCurrentProfile(currentProfileData)
        console.log(currentProfileData[0])
        
        const otherProfilesData = res.filter(profile => profile.id != window.localStorage.getItem('currentProfile'))
        setOtherProfiles(otherProfilesData)
        console.log(otherProfilesData)
      })
      .catch((e) => console.log(e))
  }, [])

  {
    otherProfiles && console.log(otherProfiles)
  }

  const notificationOpenHandler = () => setShowNotifications(true)

  const notificationCloseHandler = () => setShowNotifications(false)

  return (
    <div>
      {showNotifications && (
        <Notifications
          show={showNotifications}
          clickHandler={notificationCloseHandler}
        />
      )}
      <div className='justify-items-center bg-white w-full grid sm:grid-cols-1 lg:grid-cols-2 gap-4 px-2 xs:px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16 py-2 items-center'>
        <img
          onClick={() => router.push('/dashboard')}
          src='/logos/blue.svg'
          alt='Videowork'
          className='hidden sm:hidden lg:block cursor-pointer justify-self-start'
        />
        <div className='lg:justify-self-end flex items-center'>
          <div className='md:mr-24'>
            <NavSwitch
              label1='Expert'
              color1='expert'
              label2='Learner'
              color2='learner'
            />
          </div>

          <div className='w-full md:mr-12' onClick={notificationOpenHandler}>
            <Icon
              src='/misc/notifications.svg'
              alt='Notifications'
              onClick={notificationOpenHandler}
            />
          </div>
          <div className='flex flex-col'>
            {currentProfile && <div className='flex justify-center'>
              <ProfileSwitch name={currentProfile.name} clickHandler={() => router.push('/profile')} />
              <img
                src='/arrows/down.svg'
                alt='Switch profile'
                className='cursor-pointer'
                onClick={e => setShowAllProfiles(prevState => !prevState)}
              />
            </div>}
            {otherProfiles && showAllProfiles &&
              otherProfiles.map((profile) => (
                <ProfileSwitch key={profile.name} id={profile.id} name={profile.name} clickHandler={(id) => dispatch(switchProfile(id))} />
              ))}
          </div>
        </div>
      </div>
      <MobileBottomNav />
    </div>
  )
}

export default Index
