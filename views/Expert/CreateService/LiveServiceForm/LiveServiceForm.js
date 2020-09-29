import React from 'react'
import loremIpsum from '../../../../utility/loremIpsum'
import UploadButton from '../../../../components/Upload/UploadButton'
import Accordion from '../../../../components/Accordion'

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

const UploadImageAndVideo = <div
style={{ backgroundImage: `url('images&videos/1.png')` }}
className='w-9/12 h-full rounded-lg'
>
{CrossButton}
</div>

const LiveServiceForm = () => <div className='w-full font-medium'>
  <p className='text-lg m-3 my-2'>Live Service type</p>
  <div className='flex'>
    <div
      style={{ border: '2px solid #e8e8e8' }}
      className='w-6/12 m-3 p-3 px-5 rounded-md'
    >
      <p className='text-lg'>Video and audio</p>
      <p className='text-sm text-darkGrey'>learners can see and hear you</p>
    </div>
    <div
      style={{ border: '2px solid #e8e8e8' }}
      className='w-6/12 m-3 p-3 px-5 rounded-md'
    >
      <p className='text-lg'>Audio only</p>
      <p className='text-sm text-darkGrey'>
        learners can only hear your voice
      </p>
    </div>
  </div>
  <div className='my-10 m-3'>
    <p className='text-lg my-2'>Title</p>
    <p className='rounded w-full p-2 text-sm bg-lightGrey'>
      Learn guitar within 7 days!
    </p>
  </div>
  <div className='my-10 m-3'>
    <p className='text-lg my-2'>Description</p>
    <p className='rounded w-full p-2 text-sm bg-lightGrey'>{loremIpsum}</p>
  </div>
  <div className='my-10 m-3'>
    <p className='text-lg my-2'>Images and videos</p>
    <p className='rounded w-full p-2 text-sm text-darGrey'>
      Upload some images and videos showcasing your skills (max 50)
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
  
</div>;

export default LiveServiceForm;
