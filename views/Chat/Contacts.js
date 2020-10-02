import React from 'react'
import { ChatWindowContact } from '../../components/Chat/ChatWindowContact'
import ChooseService from './ChooseService/ChooseService'

const ChatWindowData = [
  {
    src: 'stock/girl2.jpg',
    name: 'Arun',
    active: 'false',
    time: '5',
    text: 'See you soon',
  },
  {
    src: 'stock/girl2.jpg',
    name: 'Deepak Kumar',
    active: 'true',
    time: '5',
    text: 'See you soon',
    current: 'true',
  },
  {
    src: 'stock/girl2.jpg',
    name: 'John Doe',
    active: 'false',
    time: '5',
    text: 'See you soon',
  },
  {
    src: 'stock/girl2.jpg',
    name: 'Nisha Sharma',
    active: 'false',
    time: '5',
    text: 'See you soon',
  },
  {
    src: 'stock/girl2.jpg',
    name: 'Nisha Sharma',
    active: 'false',
    time: '5',
    text: 'See you soon',
  },
]

const Contacts = () => {
  return (
    <div className='w-full'>
      <div id='contacts' className='shadow-lg bg-white rounded-lg'>
        <div className='grid grid-cols-2 grid-rows-1 py-3 px-3 my-2 items-center'>
          <p className='text-darkGrey font-medium text-2xl '>Contacts</p>
          <div className='justify-end flex'>
            <input
              className='bg-lightGrey rounded-lg w-11/12 p-2 '
              type='text'
            />
            <div className='h-auto w-1/12 ml-1'>
              <img
                className='w-full h-auto'
                src='search.png'
                alt='search-icon'
              />
            </div>
          </div>
        </div>
        <div className='flex w-full justify-center px-3'>
          <select
            style={{ outline: 'none' }}
            className='h-10 w-full text-lg rounded-md border-2 border-lightGrey'
          >
            <option label='Sonia' value='sonia' />
            <option label='John' value='john' />
            <option label='Arun' value='arun' />
          </select>
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

export default Contacts
