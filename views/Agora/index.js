import React, { useCallback, useEffect, useState } from 'react'
import VideoStream from './VideoStream'

const roomId = '10'
const userId = '12345678'

const Index = () => {
  const [videoStream, setVideoStream] = useState()
  const [presentVideoStreams, setPresentVideoStreams] = useState([])

  useEffect(() => {
    const videoStream = new VideoStream(userId)
    setVideoStream(videoStream)

    return startRoom()
  }, [])

  useEffect(() => {
    startRoom()
  }, [startRoom])

  const startRoom = useCallback(() => {
    if (videoStream) {
      videoStream.initLocalStream('local_stream', roomId, userId, () => {})
      const vidStreams = []
      vidStreams.push({
        stream: videoStream.localStream,
        element: <div id='local_stream' className='h-100 w-100'></div>,
      })
      setPresentVideoStreams(vidStreams)
    }
  }, [videoStream])

  return (
    <div>
      {presentVideoStreams.map((stream, index) => {
        return stream.element
      })}
    </div>
  )
}

export default Index
