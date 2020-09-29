import React from 'react'
import { ChatWindowContact } from '../../../components/Chat/ChatWindowContact'

const ChatWindowData = [
  {
    src: 'nazeeh_profile.jpg',
    name: 'Arun',
    active: 'false',
    time: '5',
    text: 'See you soon',
  },
  {
    src: 'nazeeh_profile.jpg',
    name: 'Deepak Kumar',
    active: 'true',
    time: '5',
    text: 'See you soon',
    current: 'true',
  },
  {
    src: 'nazeeh_profile.jpg',
    name: 'John Doe',
    active: 'false',
    time: '5',
    text: 'See you soon',
  },
  {
    src: 'nazeeh_profile.jpg',
    name: 'Nisha Sharma',
    active: 'false',
    time: '5',
    text: 'See you soon',
  },
  {
    src: 'nazeeh_profile.jpg',
    name: 'Nisha Sharma',
    active: 'false',
    time: '5',
    text: 'See you soon',
  },
]

export default () => (
  <div className='rounded-lg w-full bg-lightGrey'>
    <div className='mt-1 pt-2 pb-1 grid grid-rows-1 grid-cols-2'>
      <p className='text-xl font-medium pt-1 pb-2 pl-2'>Messages</p>
      <div className=''>
        <select className='mt-1 pb-1 pt-1 pl-2 pr-4'>
          <option value='all'>All</option>
        </select>
      </div>
    </div>
    {ChatWindowData.map((data) => (
      <div className='bg-white'>
        <ChatWindowContact
          src={data.src}
          name={data.name}
          text={data.text}
          active={data.active}
          time={data.time}
          current={data.current}
        />
      </div>
    ))}
    <div style={{color: '#4968FF'}} className='bg-white text-center pt-3 text-sm font-md'>View all messages</div>
  </div>
)
