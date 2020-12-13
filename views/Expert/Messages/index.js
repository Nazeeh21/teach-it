import React, { useEffect, useState } from 'react'
import { ChatWindowContact } from '../../../components/Chat/ChatWindowContact'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { getChats } from '../../../services/chat'
import { setActiveChatId } from '../../../store/actions/chatActions'

const placeholderAvi = '/avis/ana.png'

const Index = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  let token = useSelector((state) => state.auth.token)
  let profileId = useSelector((state) => state.app.currentProfile)

  const [chats, setChats] = useState([])

  useEffect(() => {
    getChats(token, profileId).then((res) => {
      setChats(res)
    })
  }, [token, profileId])

  const clickHandler = (chatId) => {
    dispatch(setActiveChatId(chatId))
    router.push('/messages')
  }

  if (!chats) {
    return null
  }

  return (
    <div
      style={{ backgroundColor: '#E8ECFF' }}
      className="rounded-lg w-full mt-8 text-primary"
    >
      <div className="mt-1 pt-2 pb-1 grid grid-rows-1 grid-cols-2">
        <p className="text-xl font-medium pt-1 pb-2 pl-4">Messages</p>
        <div className="mr-3">
          <select className="mt-1 pb-1 pt-1 pl-2 pr-4 rounded-lg w-full mr-6">
            <option value="all">All</option>
          </select>
        </div>
      </div>
      {chats.map((chat, index) => (
        <ChatWindowContact
          key={index}
          clickHandler={() => clickHandler(chat.id)}
          src={chat.sender_avatar_url || placeholderAvi}
          name={chat.sender_name}
          text={chat.last_msg.message}
          active={false}
          time={chat.last_msg.created_at}
          current={false}
        />
      ))}
      <div
        style={{ color: '#4968FF' }}
        className="cursor-pointer bg-white text-center py-3 text-sm font-md rounded-b-lg"
        onClick={() => router.push('/messages')}
      >
        View all messages
      </div>
    </div>
  )
}

export default Index
