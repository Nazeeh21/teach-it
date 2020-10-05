import React from 'react'

const Image = ({src, alt}) => (
  <div className='w-5/12 inline-block m-2'>
    <img className='' src={src} alt={alt} />
    <p>Name</p>
  </div>
)

const Partipants = () => (
  <div className='w-6/12 m-2 '>
    <Image src='/videocall.png' alt='Participant-img' />
    <Image src='/videocall.png' alt='Participant-img' />
    <Image src='/videocall.png' alt='Participant-img' />
    <Image src='/videocall.png' alt='Participant-img' />
    <Image src='/videocall.png' alt='Participant-img' />
  </div>
)

export default Partipants