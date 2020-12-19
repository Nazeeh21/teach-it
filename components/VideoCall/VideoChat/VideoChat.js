import React from 'react'

import Message from '../../Chat/Message'

const VideoChat = () => {
  let time = new Date()
  return (
    <div className="m-4 mt-6 w-full">
      <Message
        type="text"
        author={{ name: 'learner', isSelf: false, profilePic: 'videocall.png' }}
        content="We cant hear u can speak louder please"
        time={time}
      />
      <Message
        type="text"
        author={{ name: 'learner', isSelf: false, profilePic: 'videocall.png' }}
        content="Please dont spam here"
        time={time}
      />
      <Message
        type="text"
        author={{ name: 'learner', isSelf: false, profilePic: 'videocall.png' }}
        content="We cant hear u can speak louder please"
        time={time}
      />
      <Message
        type="text"
        author={{ name: 'learner', isSelf: false, profilePic: 'videocall.png' }}
        content="We cant hear u can speak louder please"
        time={time}
      />
    </div>
  )
}

export default VideoChat
