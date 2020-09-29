import React from 'react'
import { ChatWindowContact } from '../../components/Chat/ChatWindowContact'


const ChatWindowData = [
  {
    src: 'nazeeh_profile.jpg',
    name: 'Arun',
    active: 'false',
    time:'5',
    text: 'See you soon' 
  },
  {
    src: 'nazeeh_profile.jpg',
    name: 'Deepak Kumar',
    active: 'true',
    time:'5',
    text: 'See you soon',
    current: 'true'
  },
  {
    src: 'nazeeh_profile.jpg',
    name: 'John Doe',
    active: 'false',
    time:'5',
    text: 'See you soon' 
  },
  {
    src: 'nazeeh_profile.jpg',
    name: 'Nisha Sharma',
    active: 'false',
    time:'5',
    text: 'See you soon' 
  },
  {
    src: 'nazeeh_profile.jpg',
    name: 'Nisha Sharma',
    active: 'false',
    time:'5',
    text: 'See you soon' 
  },
]

export default () => {
  return (
    <div className='w-full'>
      <div id='contacts' className='shadow-lg bg-white rounded-lg'>
        <div className='flex grid-cols-1 p-3 my-2'>
          <p className='text-darkGrey font-medium text-2xl '>Contacts</p>
          <button className='h-auto w-1/12 ml-40'>
            <img
              className='w-10/12 h-auto'
              src='search.png'
              alt='search-icon'
            />
          </button>
        </div>
        {ChatWindowData.map((data) => (
          <div className=''>
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
      </div>
    </div>
  )
}
