import React from 'react'
import LayoutProvider from '../../layout/LayoutProvider'
import dynamic from 'next/dynamic'
import VideoChat from '../../components/VideoCall/VideoChat/VideoChat'

const Agora = dynamic(() => import('../../views/Agora'), { ssr: false })

const Index = () => {
  return (
    <LayoutProvider forAgora={true}>
      <div>
        <div className='absolute z-10 text-white py-4 px-2 '>
          <div className='flex items-center'>
            <div className='w-8 mr-4 cursor-pointer'>
              <img src='/hamBurger.png' alt='Hamburger' />
            </div>
            <div>
              <p className='font-bold'>Quaterly Review</p>
              <p className='text-xs'>1 of the 9 in the call</p>
            </div>
            <div style={{ marginLeft: '53rem' }} className='flex'>
              <div className='w-8 cursor-pointer'>
                <img src='/setting.png' alt='Setting' />
              </div>
              <div className='w-8 ml-8 cursor-pointer'>
                <img src='/add-user.png' alt='Add user' />
              </div>
            </div>
          </div>
          <div className='text-white flex-col w-full text-center mt-64'>
            <div className='font-semibold'>You are the only person in the call</div>
            <div className='text-xs font-medium'>We have notified the group</div>
            <div className='bg-expert py-2 rounded-full w-2/12 m-auto mt-4'>Ring the group</div>
            <div className='flex items-center justify-center mt-4'>
              <div className='w-12 cursor-pointer bg-white rounded-full p-2 h-auto'><img src='mic.png' alt='Mic' /></div>
              <div className='w-12 cursor-pointer bg-white rounded-full p-2 h-auto mx-4'><img src='video-camera.png' alt='Video Camera' /></div>
              <div className='w-8 cursor-pointer'><img src='endCall.png' alt='End call' /></div>
            </div>
          </div>
        </div>

        <div className='z-0 h-auto w-full rounded-md'>
          <Agora />
        </div>
        <div>
          <VideoChat />
        </div>
      </div>
    </LayoutProvider>
  )
}

export default Index
