import React from 'react'
import { useRouter } from 'next/router'

const Index = ({
  name = 'Anastasia',
  clickHandler,
  id,
  profileSrc = '/avis/ana.png',
  forSideDrawer = false,
}) => {
  const router = useRouter()
  // if(forSideDrawer)
  return (
    <div className={`flex ${forSideDrawer && ''} items-center w-full`}>
      <div
        onClick={() => clickHandler(id)}
        className={`flex ${
          forSideDrawer ? 'flex-row' : 'flex-col'
        } w-full items-center`}
      >
        <img
          src={profileSrc}
          alt="Switch profile"
          className="w-8 max-w-3/12 h-auto min-h-8 cursor-pointer rounded-full"
        />
        <p
          className={`${
            forSideDrawer ? 'text-lg ml-2' : 'text-xs'
          } cursor-pointer`}
        >
          {name}
        </p>
      </div>
    </div>
  )
}

export default Index
