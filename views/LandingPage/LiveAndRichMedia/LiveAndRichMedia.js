import React from 'react'
import Card from './Card/Card'

const LiveAndRichMedia = () => (
  <div className='mt-32'>
    <div className='flex justify-center '>
      <Card
        src='live-logo.png'
        alt='live-logo'
        heading={{ text: 'Live', color: 'red' }}
        description='Get paid by doing live broadcast or the two-way communication session with your learners or fans paying you on a per-session payment model.'
        features={[
          { text: 'Go with video or audio only', color: 'blue' },
          { text: 'Add moderators to assist', color: 'red' },
          { text: 'Create on the spot instant service', color: 'violet' },
        ]}
      />
      <Card
        src='rich-media.png'
        alt='rich-media'
        heading={{ text: 'Rich Media', color: 'green' }}
        description='Get paid for the content you create (any form of rich media), its your wish how often and when you want to share the content. Your learners or fans pay you on a monthly subscription model. Create rich media content subscription  service.'
        features={[
          { text: 'Send updates instantly to learners', color: 'skyBlue' },
          { text: 'Add moderators to assist', color: 'black' },
          { text: 'Create on the spot instant service', color: '#ff7575' },
        ]}
      />
    </div>
  </div>
)

export default LiveAndRichMedia
