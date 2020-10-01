import React, { useState } from 'react'
import UploadButton from '../../../components/Upload/UploadButton'
import ServiceTypeCard from './ServiceTypeCard'

const CrossButton = (
  <div
    style={{
      border: '3px solid white',
      position: 'relative',
      left: '80%',
      bottom: '6%',
    }}
    className='rounded-full w-4/12 bg-red flex text-white'
  >
    <button className='m-auto'>x</button>
  </div>
)

const UploadImageAndVideo = (
  <div
    style={{ backgroundImage: `url('images&videos/1.png')` }}
    className='w-9/12 h-full rounded-lg'
  >
    {CrossButton}
  </div>
)

const UpperForm = ({ type }) => {
  const [liveServiceType, setServiceType] = useState(null)

  return (
    <div className='w-full font-medium'>
      {type === 'live' && (
        <React.Fragment>
          <p className='text-lg my-2'>Live Service type</p>
          <div className='w-full grid grid-cols-2 gap-5 mb-6'>
            <ServiceTypeCard
              label='Video and audio'
              desc='learners can see and hear you'
              active={liveServiceType === 0}
              clickHandler={() => setServiceType(0)}
              noIcon
            />
            <ServiceTypeCard
              label='Audio only'
              desc='learners can only hear your voice'
              active={liveServiceType === 1}
              clickHandler={() => setServiceType(1)}
              noIcon
            />
          </div>
        </React.Fragment>
      )}
      <div className='my-10'>
        <p className='text-lg my-2'>Title</p>
        <input className='rounded w-full p-2 text-sm bg-lightGrey' />
      </div>
      <div className='my-10'>
        <p className='text-lg my-2'>Description</p>
        <textarea className='rounded w-full p-2 text-sm bg-lightGrey h-32' />
        {/* <p className='rounded w-full p-2 text-sm bg-lightGrey'>{loremIpsum}</p> */}
      </div>
      <div className='my-10'>
        <p className='text-lg my-2'>Images and videos</p>
        <p className='w-full text-sm text-darkGrey'>
          Upload some images and videos showcasing your skills (max 5)
        </p>
      </div>
      <div className='p-2 bg-lightGrey rounded grid grid-cols-5 items-center'>
        <div>
          <UploadButton />
        </div>
        {UploadImageAndVideo}
        {UploadImageAndVideo}
        {UploadImageAndVideo}
        {UploadImageAndVideo}
      </div>
    </div>
  )
};

export default UpperForm;
