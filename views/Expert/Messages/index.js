import React from 'react'
import { ChatWindowContact } from '../../../components/Chat/ChatWindowContact'
import { useRouter } from 'next/router'
import { v4 as uuid } from 'uuid'

const ChatWindowData = [
  {
    src: '/stock/girl2.jpg',
    name: 'Arun',
    active: 'false',
    time: '5',
    text: 'See you soon',
  },
  {
    src: '/stock/girl2.jpg',
    name: 'Deepak Kumar',
    active: 'false',
    time: '5',
    text: 'See you soon',
    current: 'false',
  },
  {
    src: '/stock/girl2.jpg',
    name: 'John Doe',
    active: 'false',
    time: '5',
    text: 'See you soon',
  },
  {
    src: '/stock/girl2.jpg',
    name: 'Nisha Sharma',
    active: 'false',
    time: '5',
    text: 'See you soon',
  },
  {
    src: '/stock/girl2.jpg',
    name: 'Nisha Sharma',
    active: 'false',
    time: '5',
    text: 'See you soon',
  },
]

const Index = () => {
  const router = useRouter()

  return (
    <div
      style={{ backgroundColor: '#E8ECFF' }}
      className='rounded-lg w-full mt-8 text-primary'
    >
      <div className='mt-1 pt-2 pb-1 grid grid-rows-1 grid-cols-2'>
        <p className='text-xl font-medium pt-1 pb-2 pl-4'>Messages</p>
        <div className='mr-3'>
          <select className='mt-1 pb-1 pt-1 pl-2 pr-4 rounded-lg w-full mr-6'>
            <option value='all'>All</option>
          </select>
        </div>
      </div>
      {ChatWindowData.map((data) => (
        <div key={() => uuid()} className='bg-white'>
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
      <div
        style={{ color: '#4968FF' }}
        className='cursor-pointer bg-white text-center py-3 text-sm font-md rounded-b-lg'
        onClick={() => router.push('/messages')}
      >
        View all messages
      </div>
    </div>
  )
}

export default Index
