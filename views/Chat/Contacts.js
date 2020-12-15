import React, { useState, useEffect } from 'react'
import { ChatWindowContact } from '../../components/Chat/ChatWindowContact'
import SearchBar from '../../components/Inputs/SearchBar'
// import ChooseService from './ChooseService/ChooseService'
import { useDispatch, useSelector } from 'react-redux'
import { getChats } from '../../services/chat'
import { setActiveChatId } from '../../store/actions/chatActions'
import { fetchOtherProfiles } from '../../services/profile'
import { switchProfile } from '../../store/actions/appActions'

const placeholderAvi = '/avis/ana.png'

const Contacts = () => {
  const dispatch = useDispatch()

  const [searchBarOpen, toggleSearch] = useState(false)
  const [query, setQuery] = useState('')
  const [chats, setChats] = useState([])
  const [profiles, setProfiles] = useState([])

  let token = useSelector((state) => state.auth.token)
  let profileId = useSelector((state) => state.app.currentProfile)

  const currentContact = useSelector((state) => state.chat.activeChatId)

  // const executeScroll = () =>
  //   document.getElementById('empty-div').scrollIntoView({ behavior: 'smooth' })

  const chatWindowContactClickHandler = (id) => {
    dispatch(setActiveChatId(id))
    // executeScroll()
  }

  useEffect(() => {
    fetchOtherProfiles(token, profileId)
      .then((res) => setProfiles(res.profiles))
      .catch((e) => console.log('Error in setProfiles', e))

    getChats(token, profileId)
      .then((res) => {
        console.log('Inside', res)
        setChats(res)
      })
      .catch((e) => console.log('Error while setting chats', e))
  }, [token, profileId])

  if (!chats) {
    return null
  }

  return (
    <div className="w-full text-primary">
      <div id="contacts" className="shadow-lg bg-white rounded-lg">
        <div className="grid grid-cols-2 grid-rows-1 py-3 px-3 my-2 items-center">
          <p className="text-darkGrey font-medium text-xl ">Contacts</p>
          <div className="justify-end flex">
            {searchBarOpen ? (
              <SearchBar
                value={query}
                changeHandler={setQuery}
                bgColor="highlight"
              />
            ) : (
              <div
                onClick={() => toggleSearch(true)}
                className="cursor-pointer h-auto w-1/12 ml-1"
              >
                <img
                  className="w-full h-auto"
                  src="/search.png"
                  alt="search-icon"
                />
              </div>
            )}
          </div>
        </div>
        <div className="flex w-full justify-center px-3">
          <select
            style={{ outline: 'none' }}
            className="h-10 w-full text-lg rounded-md border-2 border-lightGrey mb-6"
            value={profileId}
            onChange={(e) => {
              dispatch(switchProfile(e.target.value))
              dispatch(setActiveChatId(null))
            }}
          >
            {profiles.map(({ name, id }) => (
              <option label={name} key={id} value={id} />
            ))}
          </select>
        </div>
        {chats.map((chat, index) => {
          const { sender_avatar_url, sender_name, id, last_msg } = chat

          return (
            <ChatWindowContact
              key={index}
              clickHandler={() => chatWindowContactClickHandler(id)}
              src={sender_avatar_url || placeholderAvi}
              name={sender_name}
              text={last_msg && last_msg.message}
              active={false}
              time={last_msg && last_msg.created_at}
              current={currentContact === id}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Contacts
