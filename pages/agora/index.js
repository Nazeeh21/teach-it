import React from 'react'
import dynamic from 'next/dynamic'

const Agora = dynamic(
  () => import('../../views/Agora'),
  { ssr: false }
)

const Index = () => {

  return (
    <Agora />
  )
}

export default Index