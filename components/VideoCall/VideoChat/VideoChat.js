import React from 'react'

import Message from '../../Chat/Message'

const VideoChat = () => (
  <div className='m-4 mt-6 w-full'>
    <Message
    type='text'
      author={{ name: 'learner', isSelf: false, profilePic: 'videocall.png' }}
      content='We cant hear u can speak louder please'
      time='5 min ago'
    />
    <Message
    type='text'
      author={{ name: 'learner', isSelf: false, profilePic: 'videocall.png' }}
      content='Please dont spam here'
      time='5 min ago'
    />
    <Message
    type='text'
      author={{ name: 'learner', isSelf: false, profilePic: 'videocall.png' }}
      content='We cant hear u can speak louder please'
      time='5 min ago'
    />
    <Message
    type='text'
      author={{ name: 'learner', isSelf: false, profilePic: 'videocall.png' }}
      content='We cant hear u can speak louder please'
      time='5 min ago'
    />
  </div>
)

export default VideoChat
