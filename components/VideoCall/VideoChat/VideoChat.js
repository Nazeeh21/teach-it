import React from 'react'

import Message from '../../Chat/Message'

const VideoChat = () => (
  <div className="m-4 mt-6 w-6/12">
    <Message
      author={{ name: 'learner', isSelf: false, profilePic: 'videocall.png' }}
      text="We cant hear u can speak louder please"
      time="5 min ago"
    />
    <Message
      author={{ name: 'learner', isSelf: false, profilePic: 'videocall.png' }}
      text="Please dont spam here"
      time="5 min ago"
    />
    <Message
      author={{ name: 'learner', isSelf: false, profilePic: 'videocall.png' }}
      text="We cant hear u can speak louder please"
      time="5 min ago"
    />
    <Message
      author={{ name: 'learner', isSelf: false, profilePic: 'videocall.png' }}
      text="We cant hear u can speak louder please"
      time="5 min ago"
    />
  </div>
)

export default VideoChat
