import React from 'react'
import { useRouter } from 'next/router'
// import classes from './Card.css'

const Cards = ({ data }) => {
  const router = useRouter()

  return (
    <div className="bg-white rounded-lg p-12">
      <img
        className="w-auto md:w-4/12 xl:w-2/12 p-3"
        src={`join-${data.name}.png`}
        alt={`join-${data.name}`}
      />
      <p
        style={{ color: '#1d2d50', lineHeight: '120%' }}
        className="text-4xl xl:text-5xl font-bold"
      >
        {`Join as a ${data.name}`}
      </p>
      <div
        style={{ color: '#8A8EA0' }}
        className="opacity-75 text-darkGrey h-auto md:h-20 lg:h-auto my-8 text-xl font-medium"
      >
        {data.description}
      </div>
      <button
        style={{ backgroundColor: `${data.buttonColor}` }}
        onClick={() => router.push('/login')}
        className={`bg-${data.buttonColor} p-3 xl:w-7/12 my-10 rounded-md text-white text-xl font-medium`}
      >
        {`I want to ${data.buttonText}`}
        <span className="mx-2">
          <span className="arrow right" />
          <span className="arrow right" />
        </span>
      </button>
    </div>
  )
}

export default Cards
