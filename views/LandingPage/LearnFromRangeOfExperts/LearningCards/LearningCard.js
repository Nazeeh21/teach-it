import React from 'react'
import Rating from '../../../../components/Rating/Rating'

const LearningCard = ({ imgSrc, label, provider, numSeekers }) => (
  <div
    style={{ color: '#303C45' }}
    className="w-screen md:w-full lg:w-full bg-white rounded-lg font-semibold px-8 pb-6"
  >
    <div style={{ zIndex: '500', position: 'relative', bottom: '3rem' }}>
      <img className="m-auto" src={imgSrc} alt={provider} />
    </div>
    <p className=" lg:m-auto text-3xl">{label}</p>
    <div className="flex justify-center items-center mt-4">
      <div className="w-10">
        <img className="w-full" src="/ravi-sharma.svg" alt={provider} />
      </div>
      <p className="ml-3">{provider}</p>
    </div>
    <div className="flex justify-center items-center mt-10">
      <div className="flex -ml-12">
        <div style={{ position: 'relative', left: '2.4rem' }} className="w-10 ">
          <img className="w-full" src="/ravi-sharma.svg" alt={provider} />
        </div>
        <div style={{ position: 'relative', left: '1.2rem' }} className="w-10 ">
          <img className="w-full " src="/ravi-sharma.svg" alt={provider} />
        </div>
        <div style={{ position: 'relative' }} className="w-10 ">
          <img className="w-full " src="/ravi-sharma.svg" alt={provider} />
        </div>
      </div>
      <p className="ml-3">{numSeekers} Seekers</p>
    </div>
    <div className=" grid grid-cols-1 grid-rows-2 xl:grid-cols-2 xl:grid-rows-1 mt-12 items-center">
      <div className="justify-self-center">
        <Rating />
      </div>
      <div className="bg-lightGrey text-darkGrey text-lg rounded py-1">
        Starts in 2 days
      </div>
    </div>
  </div>
)

export default LearningCard
