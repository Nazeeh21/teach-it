import React, { useEffect, useState } from 'react'
import BackDrop from '../../../../components/Backdrop'
import Avatar from '../../../../components/Images/Avatar'
import Message from '../../../../components/Chat/Message'
import { fetchChatMessages, sendMessage } from '../../../../services/questions'
import { getProviderDetailsFromServiceId } from '../../../../services/services'

const ShowQuestions = ({ show, clickHandler, chatId, serviceId }) => {
  const [fetch, triggerFetch] = useState(false)
  const [messages, setMessages] = useState([])
  const [userId, setUserId] = useState()
  const [providerDetails, setProviderDetails] = useState()

  const [newMessage, setNewMessage] = useState('')

  useEffect(() => {
    fetchChatMessages(chatId)
      .then((res) => {
        setMessages(res)
      })
      .catch((e) => console.log(e))
  }, [chatId, fetch])

  useEffect(() => {
    const currentProfile = window.localStorage.getItem('currentProfile')
    setUserId(currentProfile)

    getProviderDetailsFromServiceId(serviceId)
      .then((res) => setProviderDetails(res))
      .catch((e) => console.log(e))
  }, [serviceId])

  const handleMessageSend = async () => {
    const success = await sendMessage(newMessage, chatId)

    if (success) {
      triggerFetch((val) => !val)
      setNewMessage('')
    }
  }

  return (
    <React.Fragment>
      <BackDrop show={show} clicked={clickHandler} />
      <div
        style={{
          zIndex: '100',
          borderBottomLeftRadius: '1rem',
          borderTopLeftRadius: '1rem',
          opacity: show ? '1' : '0',
        }}
        className="absolute right-0 top-0 bg-white w-10/12 lg:w-5/12 xl:w-5/12 h-full pt-6 pl-8 pr-5"
      >
        <div className="grid grid-cols-2 grid-rows-1 items-center">
          <div
            className="cursor-pointer text-5xl font-small"
            onClick={clickHandler}
          >
            X
          </div>
          <p className="justify-self-end cursor-pointer text-red text-sm">
            Delete question
          </p>
        </div>
        <div className="w-full rounded mt-4 bg-lightGrey border-2 border-gray-300 flex items-center py-3 pl-2">
          <Avatar
            src={
              providerDetails
                ? providerDetails.pic || `/arun-kumar.png`
                : `/arun-kumar.png`
            }
            alt="arun-kumar"
            purpose="isForChat"
          />
          <p className="ml-2 text-lg font-medium">
            {providerDetails && providerDetails.name}
          </p>
        </div>
        <div className="grid grid-cols-1 gird-rows-2 md:grid-rows-1 md:grid-cols-2">
          <div />
          <div className="w-full">
            {messages.map((message) => {
              if (typeof message.message === 'object') {
                return null
              }

              return (
                <Message
                  width="w-full"
                  type="text"
                  author={{ isSelf: message.sender.toString() == userId }}
                  content={message.message}
                  status={'Sent'}
                  time={message.created_at}
                />
              )
            })}
          </div>
        </div>
        <div
          style={{ position: 'absolute', bottom: '0' }}
          className="mb-5 w-10/12 md:w-full bg-accentedWhite rounded-bl-md rounded-br-md flex flex-col md:flex-row justify-center"
          id="typebox"
        >
          <div className="flex md:hidden">
            <button className="m-auto w-8 flex justify-center items-center">
              <img src="/drawer.svg" alt="drawer" />
            </button>
            <button className="m-auto w-8 flex justify-center items-center">
              <img src="/camera.svg" alt="camera" />
            </button>
            <button className="m-auto w-8 flex justify-center items-center">
              <img src="/gallery.svg" alt="gallery" />
            </button>
          </div>
          <button className="hidden m-auto w-8 md:flex justify-center items-center">
            <img src="/drawer.svg" alt="drawer" />
          </button>
          <button className="hidden m-auto w-8 md:flex justify-center items-center">
            <img src="/camera.svg" alt="camera" />
          </button>
          <button className="hidden m-auto w-8 md:flex justify-center items-center">
            <img src="/gallery.svg" alt="gallery" />
          </button>
          <input
            style={{ outline: 'none' }}
            className="border-highlight border-2 w-11/12 md:w-8/12 h-10 mx-2 my-2 rounded px-2 py-4"
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                handleMessageSend()
              }
            }}
          />
        </div>
      </div>
    </React.Fragment>
  )
}

export default ShowQuestions
