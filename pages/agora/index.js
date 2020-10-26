import React, { useEffect, useState } from 'react'
import LayoutProvider from '../../layout/LayoutProvider'

const Index = () => {

  const initClient = () => {
    var AgoraRTC = require('agora-rtc-sdk')

    const agoraClient = AgoraRTC.createClient({ mode: 'rtc', codec: 'h264' })

    agoraClient.init('a79d3d6b148340be8c8375ea556f824c', () => {
      console.log('test')
    }, (e) => {
      console.log(e)
    })

    console.log(AgoraRTC)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      initClient()
    }
  }, [])

  return (
    <LayoutProvider>
      Test
    </LayoutProvider>
  )
}

export default Index