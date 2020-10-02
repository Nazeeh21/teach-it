import React, { useState } from 'react'
import { Icon } from '../../Images/Icon'
import NavSwitch from '../../NavSwitch'
import ProfileSwitch from '../../ProfileSwitch'
import { useRouter } from 'next/router'
import Notifications from '../../Notifications'
import MobileBottomNav from '../MobileBottomNav'

const Index = () => {
  const router = useRouter()

  const [showNotifications, setShowNotifications] = useState(false)

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
          src='logos/blue.svg'
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
              src='misc/notifications.svg'
              alt='Notifications'
              onClick={notificationOpenHandler}
            />
          </div>

          <ProfileSwitch />
        </div>
        {/* <div className='justify-self-end flex gap-6'>
        
      </div> */}
      </div>
      <MobileBottomNav />
    </div>
  )
}

export default Index
