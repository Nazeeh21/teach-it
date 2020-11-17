import React, { useCallback, useEffect, useState } from 'react'
import VideoStream from './VideoStream'

const roomId = 'test'
const userId = Math.random().toString(36).substring(7)

const Index = () => {
  const [videoStream, setVideoStream] = useState()
  const [presentVideoStreams, setPresentVideoStreams] = useState([])
  const [remoteStreams, setRemoteStreams] = useState([])

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
      element: <div id='local_stream' style={{height: '35rem'}} className='w-full rounded'></div>,
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
            className='w-full h-64'
          />
        ),
      })
    })
    setPresentVideoStreams(streams)
  }, [remoteStreams])

  return (
    <div>
      {/* {presentVideoStreams[0].element} */}
      {presentVideoStreams.map((stream, index) => {
        return stream.element
      })}
    </div>
  )
}

export default Index
