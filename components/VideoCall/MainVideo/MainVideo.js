import React from 'react'

const MainVideo = () => (
  <div className='w-full '>
    <div className='m-2 absolute flex flex-row'>
      <img className='w-8 h-auto justify-items-start' src='/hamBurger.png' alt='hamBurger' />
      <div className='w-8 items-end flex flex-row'>
        <img className='m-1' src='/setting.png' alt='setting' />
        <img className='m-1' src='/add-user.png' alt='add-user' />
      </div>
    </div>
    <div className=' text-center'>
      <div style={{bottom:'30%', left: '25%'}} className='absolute text-white'>
        <p>You are the only person on the call</p>
        <p>We have notified the group</p>
        <button style={{backgroundColor: '#46b3e6'}} className='m-6 rounded-full p-2 pl-8 pr-8'>Join the group</button>
        <div className='w-24 ml-20 mt-4 flex self-center'>
          <button className='m-1'><img src='/mic.png' alt='mic' /></button>
          <button className='m-1'><img src='/video-camera.png' alt='video-camera' /></button>
          <button className='m-1'><img src='/endCall.png' alt='end-Call' /></button>
        </div>
    </div>
    <img className='rounded-lg w-full h-auto' src='/videocall.png' alt='video-call' />
    </div>
  </div>
)

export default MainVideo