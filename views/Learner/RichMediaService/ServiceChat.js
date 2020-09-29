import React from 'react'
import InnerNav from '../../../components/Nav/InnerNav'
import Chat from '../../Chat/Chat'

export default () => {
  return (
    <Chat
      label='Stock Market'
      disabled
      expertDetails={{
        name: 'Nazeeh Vahora',
        avatarSrc: 'nazeeh_profile.jpg',
      }}
    />
  )
}
