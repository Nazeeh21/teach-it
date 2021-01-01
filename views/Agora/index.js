import React, { useCallback, useEffect, useState } from 'react'
import VideoChat from '../../components/VideoCall/VideoChat/VideoChat'
import VideoStream from './VideoStream'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import {
  RtcTokenBuilder,
  RtmTokenBuilder,
  RtcRole,
  RtmRole,
} from 'agora-access-token'

// import './Toggle.css'

const roomId = 'test'
const userId = Math.random().toString(36).substring(7)
const Div = styled.div`
  width: 48px;
  height: 42px;
  border-bottom: 2px solid white;
  -webkit-transform: translateY(-20px) translateX(5px) rotate(45deg);
  position: absolute;
`

const APP_ID = 'a79d3d6b148340be8c8375ea556f824c'
const APP_CERTIFICATE = '0b129377515e43889543cec7fec454ff'

const currentTimestamp = Math.floor(Date.now() / 1000)
const expirationTimeInSeconds = 3600
const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds

const Index = (props) => {
  const router = useRouter()
  const [videoStream, setVideoStream] = useState()
  const [presentVideoStreams, setPresentVideoStreams] = useState([])
  const [remoteStreams, setRemoteStreams] = useState([])
  // const [isAudio, setIsAudio] = useState(props.isHost)
  // const [isVideo, setIsVideo] = useState(props.isHost)
  const [isAudio, setIsAudio] = useState(true)
  const [isVideo, setIsVideo] = useState(true)
  const [isSharingScreen, setIsSharingScreen] = useState(false)
  const [mainStream, setMainStream] = useState('local_stream')
  const [finalMainStream, setFinalMainStream] = useState([])
  const [finalRemoteStreams, setFinalRemoteStreams] = useState([])

  useEffect(() => {
    const videoStream = new VideoStream(userId, updateRemoteStreams)
    setVideoStream(videoStream)
  }, [mainStream])

  useEffect(() => {
    if (videoStream) {
      startRoom()
    }
  }, [startRoom, videoStream])

  const getDynamicToken = async (roomId, userId) => {
    try {
      const token = await RtcTokenBuilder.buildTokenWithUid(
        APP_ID,
        APP_CERTIFICATE,
        roomId,
        userId,
        RtcRole.PUBLISHER,
        privilegeExpiredTs
      )

      return token
    } catch (error) {
      console.log('getDynamicToken', error)
      return null
    }
  }

  const startRoom = async () => {
    const dynamicToken = await getDynamicToken(roomId, userId)
    videoStream.initLocalStream(
      'local_stream',
      roomId,
      userId,
      () => {},
      dynamicToken
    )
    const vidStreams = []
    vidStreams.push({
      stream: videoStream.localStream,
      element: (
        <div
          id="local_stream"
          // style={{ height: `${mainStream === 'local_stream' && '35rem'}` }}
          // style={{ height: '35rem' }}
          className={'w-full h-full cursor-pointer rounded'}
          // onClick={() => setMainStream('local_stream')}
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
            // style={{ height: 'auto' }}
            // onClick={() => setMainStream(`agora_remote ${streamId}`)}
            className={
              'w-full h-full cursor-pointer'
              //   `${
              //   mainStream === `agora_remote ${streamId}`
              //     ? 'w-full rounded cursor-pointer'
              //     : 'w-2/12 h-48 m-2 inline-block cursor-pointer'
              // }`
            }
          />
        ),
      })
    })
    setPresentVideoStreams(streams)
  }, [remoteStreams])

  const leaveMeeting = () => {
    videoStream.leaveMeeting()
    // this.props.leaveMeeting();
    router.push('/')
  }

  const toggleMic = () => {
    const isAudio = videoStream.toggleAudio()
    setIsAudio(isAudio)
  }

  const toggleVideo = () => {
    const isVideo = videoStream.toggleVideo()
    setIsVideo(isVideo)
  }

  const toggleShareScreen = () => {
    // const { videoStream, isSharingScreen, roomId } = this.state;
    // const { user } = props
    videoStream.close()
    videoStream.stop()
    videoStream.leaveMeeting()
    let newStream = null
    if (!isSharingScreen) {
      newStream = new VideoStream(userId, updateRemoteStreams, true)
    } else {
      newStream = new VideoStream(userId, updateRemoteStreams)
    }
    newStream.initLocalStream('local_stream', roomId, userId, () => {})
    setVideoStream(newStream)
    setIsSharingScreen((prevState) => !prevState)
    // this.setState({
    //   videoStream: newStream,
    //   isSharingScreen: !isSharingScreen,
    // });
  }

  useEffect(() => {
    const newStream = [...presentVideoStreams]
    // newStream.map(stream => {
    //   if(stream.element.props.id === mainStream) {
    //     setFinalMainStream(stream)
    //   }
    // })
    setFinalMainStream(
      newStream.filter((stream) => stream.element.props.id === mainStream)
    )
    setFinalRemoteStreams(
      newStream.filter((stream) => stream.element.props.id !== mainStream)
    )
  }, [mainStream, presentVideoStreams])

  // useEffect(() => {
  //   console.log('Main stream', finalMainStream)
  //   console.log('Remote Stream', finalRemoteStreams)
  // }, [finalMainStream, finalRemoteStreams])

  return (
    <div className="rounded-md">
      <div className="rounded-md absolute z-10 text-white py-4 px-2 w-full">
        <div className="grid grid-cols-2 items-center w-full">
          <div className="flex items-center">
            <div className="w-8 mr-4 cursor-pointer">
              <img src="/hamBurger.png" alt="Hamburger" />
            </div>
            <div>
              <p className="font-bold">Quaterly Review</p>
              <p className="text-xs">1 of the 9 in the call</p>
            </div>
          </div>
          <div
            // style={{ marginLeft: '53rem' }}
            className="flex lg:justify-self-center lg:-ml-20 md:justify-self-end md:mr-16 lg:mr-0"
          >
            <div className="w-8 cursor-pointer">
              <img src="/setting.png" alt="Setting" />
            </div>
            <div className="w-8 justify-items-end ml-8 cursor-pointer">
              <img src="/add-user.png" alt="Add user" />
            </div>
          </div>
        </div>
        <div
          style={{ marginTop: '24rem' }}
          className="text-white flex-col w-full text-center items-center "
        >
          {/* <div className='font-semibold'>
            You are the only person in the call
          </div> */}
          {/* <div className='text-xs font-medium'>We have notified the group</div> */}
          {/* <div className='bg-expert py-2 rounded-full w-2/12 m-auto mt-4'>
            Ring the group
          </div> */}
          <div className="flex items-center justify-center lg:-ml-64 lg:mr-20 w-auto m-auto mt-4">
            <div
              className={`w-12 cursor-pointer border-2 rounded-full p-2 h-auto ${
                !isAudio && 'bg-red'
              }`}
              onClick={toggleMic}
            >
              {!isAudio && <Div />}
              <img style={{ margin: 'auto' }} src="mic.png" alt="Mic" />
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" style={{width: '100%', height: '100%'}} */}
            </div>
            <div
              className={`w-12 cursor-pointer border-2 rounded-full p-2 h-auto mx-4 ${
                !isVideo && 'bg-red'
              }`}
              onClick={toggleVideo}
            >
              {!isVideo && <Div />}
              <img
                style={{ margin: 'auto' }}
                src="video-camera.png"
                alt="Video Camera"
              />
            </div>
            <div
              className={`w-12 cursor-pointer border-2 rounded-full p-2 h-auto mr-4 ${
                !isSharingScreen && 'bg-red'
              }`}
              onClick={toggleShareScreen}
            >
              {isSharingScreen && <Div />}
              <img
                style={{ margin: 'auto' }}
                src={`${
                  isSharingScreen ? 'stop-sharing.png' : 'share-screen.png'
                }`}
                alt="Video Camera"
              />
            </div>
            <div
              className="w-12 cursor-pointer border-2 border-learner rounded-full p-2 h-auto"
              onClick={leaveMeeting}
            >
              <img src="endCall.png" alt="End call" />
            </div>
          </div>
        </div>
      </div>

      <div className="z-0 h-auto w-full rounded-md">
        {/* {presentVideoStreams.filter(stream => stream.element.props.id === mainStream).map((stream, index) => {
          console.log('Logging stream element', stream.element.props.id)
          return <div>{stream.element}</div>
        })}
         {presentVideoStreams.filter(stream => stream.element.props.id !== mainStream).map((stream, index) => {
          console.log('Logging stream element', stream.element.props.id)
          return <div className='w-2/12 h-32 m-2 inline-block '>{stream.element}</div>
        })} */}

        {/* {presentVideoStreams.map((stream, index) => {
          const currentVideoElementId = stream.element.props.id
          if(currentVideoElementId === mainStream) {
            return <div onClick={() => setMainStream(currentVideoElementId)} style={{height: '35rem'}}>{stream.element}</div>
          } else {
            return <div className='w-2/12 h-32 m-2 inline-block' onClick={() => setMainStream(currentVideoElementId)}>{stream.element}</div>
          }
        })} */}

        {/* {finalMainStream && console.log('Final main stream', finalMainStream)} */}
        {/* {console.log('Final remote stream', finalRemoteStreams)} */}
        {/* {finalMainStream && <div style={{height: '35rem'}}>{finalMainStream.element}</div>} */}
        {finalMainStream.map((stream) => {
          return <div style={{ height: '35rem' }}>{stream.element}</div>
        })}
        {finalRemoteStreams.map((stream, index) => {
          return (
            <div
              className="w-2/12 h-32 m-2 inline-block"
              onClick={() => setMainStream(stream.element.props.id)}
            >
              {stream.element}
            </div>
          )
        })}

        {/* {presentVideoStreams.map((stream) => {
          const currentStreamId = stream.element.props.id
          console.log('Logging streams', stream.element)
          return (
            <div
              style={{
                height: `${mainStream === currentStreamId ? '35rem' : '9rem'}`,
              }}
              className={`${
                mainStream !== currentStreamId && 'w-2/12 inline-block cursor-pointer'
              }`}
              onClick={() => setMainStream(currentStreamId)}
            >
              {stream.element}
            </div>
          )
        })} */}
      </div>
      <div>
        <VideoChat />
        <div
          className="bg-accentedWhite rounded-bl-md rounded-br-md flex justify-center w-6/12"
          id="typebox"
        >
          <button
            className="m-auto w-8 flex justify-center items-center"
            onClick={() => {}}
          >
            <img src="/drawer.svg" alt="drawer" />
          </button>
          <button className="m-auto w-8 flex justify-center items-center">
            <img src="/camera.svg" alt="camera" />
          </button>
          <button className="m-auto w-8 flex justify-center items-center">
            <img src="/gallery.svg" alt="gallery" />
          </button>
          <input
            style={{ outline: 'none' }}
            className="border-highlight border-2 w-8/12 h-10 mx-2 my-2 rounded px-2 py-4"
            type="text"
            onChange={(e) => e.target.value}
            // disabled={disabled}
          />
        </div>
      </div>
    </div>
  )
}

export default Index
