import React from 'react'
import CompactServiceCard from './CompactServiceCard/CompactServiceCard'
import { ChatWindowContact } from '../../components/Chat/ChatWindowContact'
import Message from '../../components/Chat/Message'
import NavItems from '../../components/Nav/NavItems'
import ChooseService from './ChooseService/ChooseService'
import Avatar from '../../components/Images/Avatar'

const Chat = ({ label = 'Chat', disabled, expertDetails }) => (
  <div className='w-full'>
    <div id='chat-and-typebox'>
      <div className='grid grid-cols-2 mb-2'>
        <p className='text-2xl font-medium mr-4'>{label}</p>
        <button className='h-auto w-6 justify-self-end'>
          <img className='w-10/12 h-auto' src='search.png' alt='search-icon' />
        </button>
      </div>
      <div className='flex-col rounded-tl-lg rounded-tr-lg bg-white p-4'>
        {
          expertDetails && (
            <div className='w-10/12 mx-auto mb-16 bg-highlight border-2 rounded-lg px-1 py-2 border-lightGrey flex flex-row items-center font-semibold'>
              <Avatar purpose='isForChat' src={expertDetails.avatarSrc} alt='Expert' />
              <h4>{expertDetails.name}</h4>
            </div>
          )
        }
        <Message
          className='justify-right'
          type='text'
          author={{ isSelf: 'true' }}
          content='How are you doing? Will you be in Mumbai next week?'
          status='Deivered'
          time='4:35pm'
        />
        <Message
          type='text'
          author={{
            isSelf: 'false',
            profilePic: 'nazeeh-profile.jpg',
            name: 'John',
          }}
          content="Maybe, I'll let you know"
          time='4:35pm'
        />
        <Message
          type='image'
          author={{
            isSelf: 'false',
            profilePic: 'nazeeh-profile.jpg',
            name: 'John',
          }}
          content={{ src: 'shimla.png', alt: 'shimla', text: 'In Shimla now' }}
          time='4:35pm'
        />
        <Message
          type='service'
          author={{
            isSelf: 'false',
            profilePic: 'nazeeh-profile.jpg',
            name: 'John',
          }}
          content={
            <CompactServiceCard
              hrefText='Edit'
              butttonText='Accept'
              media={{ text: 'Live', color: '#ff414d' }}
            />
          }
          time='4:35pm'
        />
        <Message
          type='service'
          author={{
            isSelf: 'false',
            profilePic: 'nazeeh-profile.jpg',
            name: 'John',
          }}
          content={
            <CompactServiceCard
              hrefText=''
              butttonText='Pending'
              buttonDisabled='true'
              media={{ text: 'Live', color: '#ff414d' }}
            />
          }
          time='4:35pm'
        />
      </div>
      <div
        style={{ background: '#e8e8e8' }}
        className=' rounded-bl-md rounded-br-md flex justify-center'
        id='typebox'
      >
        <button className='m-auto w-8 flex justify-center items-center'>
          <img src='camera.svg' alt='camera' />
        </button>
        <button className='m-auto w-8 flex justify-center items-center'>
          <img src='camera.svg' alt='camera' />
        </button>
        <button className='m-auto w-8 flex justify-center items-center'>
          <img src='camera.svg' alt='camera' />
        </button>
        {disabled ? (
          <div
            className='bg-lightGrey w-8/12 h-10 mx-2 my-2 rounded p-4 pb-10 text-center text-sm'
          >
            <p className='cursor-default'>
              Replying is disabled.{' '}
              <span className='text-secondary cursor-pointer'>
                Ask a question
              </span>
            </p>
          </div>
        ) : (
          <input
            style={{ border: '1px solid #a6a6a4', outline: 'none' }}
            className='w-8/12 h-10 mx-2 my-2 rounded px-2 py-4'
            type='text'
            onChange={(e) => e.target.value}
            disabled={disabled}
          />
        )}
      </div>
    </div>
  </div>

  // </div>
)

export default Chat
