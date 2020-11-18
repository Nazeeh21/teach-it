import React from 'react'
import InnerNav from '../../../components/Nav/InnerNav'
import Chat from '../../Chat/Chat'

const ServiceChat = () => {
  return (
    <Chat
      label="Stock Market"
      disabled
      expertDetails={{
        name: 'Nazeeh Vahora',
        avatarSrc: 'stock/girl2.jpg',
      }}
    />
  )
}

export default ServiceChat
