import React, { useCallback, useEffect, useState } from 'react'
import VideoStream from './VideoStream'

const roomId = 'test'
const userId = '12345678'

const Index = () => {
  const [videoStream, setVideoStream] = useState()
  const [presentVideoStreams, setPresentVideoStreams] = useState([])

  useEffect(() => {
    const videoStream = new VideoStream(userId)
    setVideoStream(videoStream)
  }, [])

  useEffect(() => {
    console.log('outside')
    if (videoStream) {
      console.log('inside')
      startRoom()
    }
  }, [startRoom, videoStream])

  const startRoom = () => {
    videoStream.initLocalStream('local_stream', roomId, userId, () => {})
    const vidStreams = []
    vidStreams.push({
      stream: videoStream.localStream,
      element: <div id='local_stream' className='w-full h-64'></div>,
    })
    setPresentVideoStreams(vidStreams)
  }

  return (
    <div>
      {presentVideoStreams.map((stream, index) => {
        return stream.element
      })}
    </div>
  )
}

export default Index
