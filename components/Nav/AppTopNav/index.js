import React from 'react'
import { Icon } from '../../Images/Icon'
import NavSwitch from '../../NavSwitch'
import ProfileSwitch from '../../ProfileSwitch'
import { useRouter } from 'next/router'

const Index = () => {
  const router = useRouter()

  return (
    <div className='bg-white w-full grid grid-cols-2 gap-4 px-16 py-2 items-center'>
      <img onClick={() => router.push('/dashboard')} src='logos/blue.svg' alt='Videowork' className='cursor-pointer justify-self-start' />
      <div className='justify-self-end flex gap-6'>
        <NavSwitch
          label1='Expert'
          color1='expert'
          label2='Learner'
          color2='learner'
        />
        <Icon src='misc/notifications.svg' alt='Notifications' />
        <ProfileSwitch />
      </div>
      {/* <div className='justify-self-end flex gap-6'>
        
      </div> */}
    </div>
  )
};

export default Index;
