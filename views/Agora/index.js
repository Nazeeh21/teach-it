import React, { useEffect, useState } from 'react'
import LayoutProvider from '../../layout/LayoutProvider'
import AgoraRTC from 'agora-rtc-sdk'

const Index = () => {
  const [client, setClient] = useState()
  const [localStream, setLocalStream] = useState()

  const initClient = () => {
    const agoraClient = AgoraRTC.createClient({ mode: 'rtc', codec: 'h264' })

    agoraClient.init('a79d3d6b148340be8c8375ea556f824c', () => {
      console.log('test')
    }, (e) => {
      console.log(e)
    })

    setClient(agoraClient)
  }

  const initLocalStream = async () => {
    const stream = AgoraRTC.createStream({
      streamId: 1,
      audio: true,
      video: false,
      screen: false
    })

    stream.init(function () {
      console.log("init local stream success")
      // play stream with html element id "local_stream"
      setLocalStream(stream)
      stream.play('local-stream')
    }, function (err) {
      console.error("init local stream failed ", err)
    })
  }

  useEffect(() => {
    initClient()
    initLocalStream()
  }, [])

  return (
    <LayoutProvider>
      <video style={{ height: '400px', width: '400px' }} id='local-stream' />
    </LayoutProvider>
  )
}

export default Index