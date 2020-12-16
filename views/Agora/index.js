import React, { useCallback, useEffect, useState } from 'react'
import VideoChat from '../../components/VideoCall/VideoChat/VideoChat'
import VideoStream from './VideoStream'

const roomId = 'test'
const userId = Math.random().toString(36).substring(7)

const Index = (props) => {
  const [videoStream, setVideoStream] = useState()
  const [presentVideoStreams, setPresentVideoStreams] = useState([])
  const [remoteStreams, setRemoteStreams] = useState([])
  const [isAudio, setIsAudio] = useState(props.isHost)
  const [isVideo, setIsVideo] = useState(props.isHost)
  const [isSharingScreen, setIsSharingScreen] = useState(false)

  useEffect(() => {
    const videoStream = new VideoStream(userId, updateRemoteStreams)
    setVideoStream(videoStream)
  }, [])

  useEffect(() => {
    if (videoStream) {
      startRoom()
    }
  }, [startRoom, videoStream])

  const startRoom = () => {
    videoStream.initLocalStream('local_stream', roomId, userId, () => {})
    const vidStreams = []
    vidStreams.push({
      stream: videoStream.localStream,
      element: (
        <div
          id='local_stream'
          style={{ height: '35rem' }}
          className='w-full rounded'
        ></div>
      ),
    })
    setPresentVideoStreams(vidStreams)
  }

  const updateRemoteStreams = (remoteStreams) => {
    setRemoteStreams(remoteStreams)
  }

  useEffect(() => {
    const streams = [...presentVideoStreams]
    Object.keys(remoteStreams).forEach((key) => {
      const stream = remoteStreams[key]
      const streamId = stream.getId()
      streams.push({
        stream,
        element: (
          <div
            key={streamId}
            id={`agora_remote ${streamId}`}
            className='w-2/12 h-48 m-2 inline-block'
          />
        ),
      })
    })
    setPresentVideoStreams(streams)
  }, [remoteStreams])

  const toggleMic = () => {
    
    const isAudio = videoStream.toggleAudio();
    setIsAudio(isAudio)
  }

  const toggleVideo = () => {
    
    const isVideo = videoStream.toggleVideo();
    setIsVideo(isVideo)
  }

  const toggleShareScreen = () => {
    // const { videoStream, isSharingScreen, roomId } = this.state;
    const { user } = props;
    videoStream.close();
    videoStream.stop();
    videoStream.leaveMeeting();
    let newStream = null;
    if (!isSharingScreen) {
      newStream = new VideoStream(user.user_id, this.updateRemoteStrams, true);
    } else {
      newStream = new VideoStream(user.user_id, this.updateRemoteStrams);
    }
    newStream.initLocalStream('local_stream', roomId, user.user_id, () => {});
    setVideoStream(newStream)
    isSharingScreen(prevState => !prevState)
    // this.setState({
    //   videoStream: newStream,
    //   isSharingScreen: !isSharingScreen,
    // });
  }

  return (
    <div className='rounded-md'>
      <div className='rounded-md absolute z-10 text-white py-4 px-2 '>
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
          <div className='font-semibold'>
            You are the only person in the call
          </div>
          <div className='text-xs font-medium'>We have notified the group</div>
          <div className='bg-expert py-2 rounded-full w-2/12 m-auto mt-4'>
            Ring the group
          </div>
          <div className='flex items-center justify-center mt-4'>
            <div className='w-12 cursor-pointer bg-white rounded-full p-2 h-auto' onClick={toggleMic}>
              <img src='mic.png' alt='Mic' />
            </div>
            <div className='w-12 cursor-pointer bg-white rounded-full p-2 h-auto mx-4' onClick={toggleVideo}>
              <img src='video-camera.png' alt='Video Camera' />
            </div>
            <div className='w-8 cursor-pointer'>
              <img src='endCall.png' alt='End call' />
            </div>
          </div>
        </div>
      </div>

      <div className='z-0 h-auto w-full rounded-md'>
        {presentVideoStreams.map((stream, index) => {
          return stream.element
        })}
      </div>
      <div>
        
        <VideoChat />
        <div
          className='bg-accentedWhite rounded-bl-md rounded-br-md flex justify-center w-6/12'
          id='typebox'
        >
          <button
            className='m-auto w-8 flex justify-center items-center'
            onClick={() => {}}
          >
            <img src='/drawer.svg' alt='drawer' />
          </button>
          <button className='m-auto w-8 flex justify-center items-center'>
            <img src='/camera.svg' alt='camera' />
          </button>
          <button className='m-auto w-8 flex justify-center items-center'>
            <img src='/gallery.svg' alt='gallery' />
          </button>
          <input
            style={{ outline: 'none' }}
            className='border-highlight border-2 w-8/12 h-10 mx-2 my-2 rounded px-2 py-4'
            type='text'
            onChange={(e) => e.target.value}
            // disabled={disabled}
          />
        </div>
      </div>
    </div>
  )
}

export default Index
