import React, {useState} from 'react'
import { Icon } from '../../Images/Icon'
import NavSwitch from '../../NavSwitch'
import ProfileSwitch from '../../ProfileSwitch'
import { useRouter } from 'next/router'
import Notifications from '../../Notifications'

const Index = () => {
  const router = useRouter()

  const [showNotifications, setShowNotifications] = useState(false)

  const notificationOpenHandler = () => setShowNotifications(true)

  const notificationCloseHandler = () => setShowNotifications(false)

  return (
    <div>
      {showNotifications && <Notifications show={showNotifications} clickHandler={notificationCloseHandler} />}
      <div className='bg-white w-full grid grid-cols-2 gap-4 px-16 py-2 items-center'>
        <img
          onClick={() => router.push('/dashboard')}
          src='logos/blue.svg'
          alt='Videowork'
          className='cursor-pointer justify-self-start'
        />
        <div className='justify-self-end flex gap-6'>
          <NavSwitch
            label1='Expert'
            color1='expert'
            label2='Learner'
            color2='learner'
          />
          <button onClick={notificationOpenHandler}>
            <Icon
              src='misc/notifications.svg'
              alt='Notifications'
              onClick={notificationOpenHandler}
            />
          </button>
          
          <ProfileSwitch />
        </div>
        {/* <div className='justify-self-end flex gap-6'>
        
      </div> */}
      </div>
    </div>
  )
}

export default Index
