import React, { useEffect, useState } from 'react'
import CompactServiceCard from './CompactServiceCard/CompactServiceCard'
// import { ChatWindowContact } from '../../components/Chat/ChatWindowContact'
import Message from '../../components/Chat/Message'
import ChooseService from './ChooseService/ChooseService'
import Avatar from '../../components/Images/Avatar'
import { getChatData, sendMessage } from '../../services/chat'
import { useSelector } from 'react-redux'

const Chat = ({ label = 'Chat', disabled, expertDetails }) => {
  const chatId = useSelector((state) => state.chat.activeChatId)

  const token = useSelector((state) => state.auth.token)
  const profileId = useSelector((state) => state.app.currentProfile)

  const [messages, setMessages] = useState([])

  const [input, setInput] = useState('')
  const [fetch, triggerFetch] = useState(false)

  useEffect(() => {
    getChatData(token, profileId, chatId)
      .then((res) => setMessages(res.reverse()))
      .catch((e) => console.log('Error while setting chat data', e))
  }, [chatId, fetch, token, profileId])

  const [showChooseService, setShowChooseService] = useState(false)

  const chooseServiceCloseHandler = () => setShowChooseService(false)

  const chooseServiceOpenHandler = () => setShowChooseService(true)

  const submitHandler = async () => {
    const success = await sendMessage(token, profileId, chatId, input)

    if (success) {
      setInput('')
      triggerFetch((fetch) => !fetch)
    } else {
      alert('Failed to send the message. Please try again.')
    }
  }

  if (!messages) {
    return null
  }

  return (
    <div className="w-full">
      <ChooseService
        show={showChooseService}
        clickHandler={chooseServiceCloseHandler}
      />
      <div id="chat-and-typebox">
        <div className="grid grid-cols-2 mb-2">
          <p className="text-2xl font-medium mr-4">{label}</p>
          <div className="cursor-pointer h-auto w-6 justify-self-end">
            <img
              className="w-10/12 h-auto"
              src="/search.png"
              alt="search-icon"
            />
          </div>
        </div>
        <div
          style={{ maxHeight: '70vh' }}
          className="flex-col rounded-tl-lg rounded-tr-lg bg-white p-4 overflow-y-scroll"
        >
          {expertDetails && (
            <div className="w-10/12 mx-auto mb-16 bg-highlight border-2 rounded-lg px-1 py-2 border-lightGrey flex flex-row items-center font-semibold">
              <Avatar
                purpose="isForChat"
                src={expertDetails.avatarSrc}
                alt="Expert"
              />
              <h4>{expertDetails.name}</h4>
            </div>
          )}
          <div
            style={{ maxHeight: '70vh' }}
            className="grid grid-flow-row overflow-y-scroll"
          >
            {messages.map((message) => {
              return (
                <Message
                  key={message.created_at}
                  type="text"
                  author={{ isSelf: message.sender == profileId }}
                  content={message.message}
                  status={'Delivered'}
                  time={message.created_at}
                />
              )
            })}
          </div>
        </div>
        <div
          className="bg-accentedWhite rounded-bl-md rounded-br-md flex justify-center"
          id="typebox"
        >
          <button
            className="m-auto w-8 flex justify-center items-center"
            onClick={chooseServiceOpenHandler}
          >
            <img src="/drawer.svg" alt="drawer" />
          </button>
          <button className="m-auto w-8 flex justify-center items-center">
            <img src="/camera.svg" alt="camera" />
          </button>
          <button className="m-auto w-8 flex justify-center items-center">
            <img src="/gallery.svg" alt="gallery" />
          </button>
          {disabled ? (
            <div className="bg-lightGrey w-8/12 h-10 mx-2 my-2 rounded p-4 pb-10 text-center text-sm">
              <p className="cursor-default">
                Replying is disabled.{' '}
                <span className="text-secondary cursor-pointer">
                  Ask a question
                </span>
              </p>
            </div>
          ) : (
            <input
              style={{ outline: 'none' }}
              className="border-highlight border-2 w-8/12 h-10 mx-2 my-2 rounded px-2 py-4"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={disabled}
              onKeyUp={(e) => {
                if (e.key === 'Enter') {
                  submitHandler()
                }
              }}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Chat
