import React from 'react'
import LayoutProvider from '../../layout/LayoutProvider'
import dynamic from 'next/dynamic'
import VideoChat from '../../components/VideoCall/VideoChat/VideoChat'

const Agora = dynamic(() => import('../../views/Agora'), { ssr: false })

const Index = () => {
  return (
    <LayoutProvider forAgora={true}>
      <div>
        <Agora />
      </div>
    </LayoutProvider>
  )
}

export default Index
