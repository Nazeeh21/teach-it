import React from 'react'
import { useRouter } from 'next/router'

const Index = ({
  name = 'Anastasia',
  clickHandler,
  id,
  profileSrc = '/avis/ana.png',
}) => {
  const router = useRouter()

  return (
    <div className="flex items-center w-full">
      <div
        onClick={() => clickHandler(id)}
        className="flex flex-col w-full items-center"
      >
        <img
          src={profileSrc}
          alt="Switch profile"
          className="w-8 max-w-3/12 h-auto min-h-8 cursor-pointer rounded-full"
        />
        <p className="text-xs cursor-pointer">{name}</p>
      </div>
    </div>
  )
}

export default Index
