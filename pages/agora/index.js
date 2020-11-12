import React from 'react'
import LayoutProvider from '../../layout/LayoutProvider'
import dynamic from 'next/dynamic'

const Agora = dynamic(
  () => import('../../views/Agora'),
  { ssr: false }
)

const Index = () => {

  return (
    <LayoutProvider>
      <Agora />
    </LayoutProvider>
  )
}

export default Index