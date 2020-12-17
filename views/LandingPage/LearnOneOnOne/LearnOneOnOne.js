import React from 'react'
import { useRouter } from 'next/router'

const heading = 'Learn one-on-one or in a group'

const subHeading1 =
  'Dont have fixed time slots? Want to choose your own learning schedule and timing?'

const subHeading2 =
  'Just step up one on one individual sessions with the top experts as per your own availability. You can even take audio-only sessions if you prefer.'

const LearnOneOnOne = () => {
  const router = useRouter()

  return (
    <div className="mt-20 bg-white">
      <div className="pt-16 px-5 xl:m-24 xl:pt-32 xl:px-0 flex justify-center ">
        <div className="md:w-5/12 md:m-10">
          <div
            style={{ color: '#1d2d50' }}
            className="text-4xl lg:mt-8 xl:text-5xl xl:mt-12 font-bold"
          >
            {heading}
          </div>
          <div className="text-xl text-darkGrey my-8">{subHeading1}</div>
          <div className="text-xl text-darkGrey my-8">{subHeading2}</div>
          <button
            onClick={() => router.push('/login')}
            className="w-7/12 mt-3 mb-16 bg-secondary p-3 md:w-7/12 xl:w-5/12 xl:mt-8 xl:mb-8 rounded-md text-white text-xl font-medium"
          >
            Get Started
          </button>
        </div>
        <div className="hidden md:w-7/12 md:block">
          <div className="flex items-center">
            <div className="w-4/12 text-right	">
              <img
                className="w-10/12 m-2 h-auto"
                src="/arrow-1.png"
                alt="arrow-1"
              />
            </div>
            <img
              className="w-8/12 h-auto rounded-lg m-3"
              src="/learn-one-on-one-1.png"
              alt="learn-one-on-one-1"
            />
          </div>
          <div className="flex items-center">
            <div className="w-4/12">
              <img
                className="w-full m-2 h-auto"
                src="/arrow-2.png"
                alt="arrow-2"
              />
            </div>
            <img
              className="w-8/12 h-auto rounded-lg m-3"
              src="/learn-one-on-one-2.png"
              alt="learn-one-on-one-2"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LearnOneOnOne
