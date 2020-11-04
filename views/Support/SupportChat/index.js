import React, { useEffect, useState } from 'react'
import Message from '../../../components/Chat/Message'
import { sendMessage } from '../../../services/support'

const Option = () => (
  <div className='flex'>
    <div className='rounded-full bg-darkGrey w-1 h-1 mr-1' />
    <div className='rounded-full bg-darkGrey w-1 h-1 mr-1' />
    <div className='rounded-full bg-darkGrey w-1 h-1 mr1' />
  </div>
)

const MessageWrapper = ({ isFromSelf = false, time, text, status }) => {
  const date = new Date(time)

  if (!isFromSelf) {
    return (
      <Message type='text' time={date.toString()} author={{ isSelf: isFromSelf, profilePic: '/stock/girl2.jpg', name: 'John' }} content={text} status={status} />
    )
  } else {
    return (
      <div className='justify-self-end '>
        <Message width='w-full' type='text' time={date.toString()} author={{ isSelf: isFromSelf, profilePic: '/stock/girl2.jpg', name: 'John' }} content={text} status={status} />
      </div>
    )
  }
}

const NewTicket = ({ messages, chatId, handleUpdate }) => {
  const [input, setInput] = useState('')

  if (!messages) {
    return null
  }

  const handleMessageSend = () => {
    sendMessage(input, chatId).then(res => {
      if (res) {
        setInput('')
        handleUpdate()
      }
    })
  }

  return (
    <div className='w-full'>
      <div className='grid grid-cols-2 mb-2 items-center'>
        <p className='text-2xl font-medium mr-4'>Support</p>
        <div className='cursor-pointer h-auto w-6 justify-self-end'>
          <img
            className='w-10/12 h-auto'
            src='/search.png'
            alt='search-icon'
          />
        </div>
      </div>
      <div className='bg-white rounded-lg p-8'>
        <div className='bg-lightGrey p-4 mb-8'>
          <div className='grid grid-cols-2 grid-rows-1 items-center mb-4'>
            <p className='font-medium text-md'>[No Subject yet]</p>
            <div className='justify-self-end'><Option /></div>
          </div>
          <div className='mb-2  grid grid-cols-3 grid-rows-1 text-darkGrey items-center'>
            <div className='flex items-center'>
              <div><img src='/nav_icons/payments_grey.svg' alt='payment' /></div>
              <div className='ml-2'>Payments</div>
            </div>
            <div className='flex items-center'>
              <div><img src='/calender.svg' alt='calender' /></div>
              <div className='ml-2'>3 days</div>
            </div>

            <div className='flex items-center justify-end'>
              <div><img src='/nav_icons/support_grey.svg' alt='support' /></div>
              <div className='ml-2'>37FJ3324</div>
            </div>
          </div>
        </div>
        <div style={{ maxHeight: '70vh' }} className='grid grid-flow-row overflow-y-scroll'>
          {
            messages.map(message => {
              return (
                <MessageWrapper time={message.created_at} isFromSelf={!message.from_support} text={message.message} status={message.status} />
              )
            })
          }
        </div>
        <div
          className='mt-5 bg-accentedWhite rounded-bl-md rounded-br-md flex justify-center'
          id='typebox'
        >
          <button
            className='m-auto w-8 flex justify-center items-center'
          >
            <img src='/drawer.svg' alt='drawer' />
          </button>
          <button className='m-auto w-8 flex justify-center items-center'>
            <img src='/camera.svg' alt='camera' />
          </button>
          <button className='m-auto w-8 flex justify-center items-center'>
            <img src='/gallery.svg' alt='gallery' />
          </button>
          <input
            style={{ outline: 'none' }}
            className='border-highlight border-2 w-8/12 h-10 mx-2 my-2 rounded px-2 py-4'
            type='text'
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                handleMessageSend()
              }
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default NewTicket