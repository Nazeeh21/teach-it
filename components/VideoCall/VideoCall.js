import React from 'react'
import MainVideo from './MainVideo/MainVideo'
import Partipants from './Participants/Participants'
import VideoChat from './VideoChat/VideoChat'

const VideoCall = () => (
  <div className="w-8/12 m-4 ">
    <MainVideo />
    <div className="flex">
      <Partipants />
      <VideoChat />
    </div>
  </div>
)

export default VideoCall
