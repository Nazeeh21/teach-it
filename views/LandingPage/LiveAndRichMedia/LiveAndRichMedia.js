import React from 'react'
import Card from './Card/Card'

const LiveAndRichMedia = () => (
  <div className="mt-16 px-3 md:px-5 lg:mt-32">
    <div className="flex justify-center flex-col md:flex-row">
      <div
        style={{
          borderTopRightRadius: '1rem',
          borderBottomLeftRadius: '1rem',
          borderBottomRightRadius: '1rem',
        }}
        className="mb-6 md:w-6/12 md:m-3 xl:w-4/12 lg:m-3 lg:p-8 bg-white "
      >
        <Card
          key="live"
          src="/live-logo.svg"
          alt="live-logo"
          heading={{ text: 'Live', color: 'red' }}
          description="Get paid by doing live broadcast or the two-way communication session with your learners or fans paying you on a per-session payment model."
          features={[
            { text: 'Go with video or audio only', color: 'blue' },
            { text: 'Add moderators to assist', color: 'red' },
            { text: 'Create on the spot instant service', color: 'violet' },
          ]}
        />
      </div>
      {/* <div className="md:w-6/12 md:m-3 xl:w-4/12 xl:m-3 xl:p-8  bg-white "> */}
      <div
        style={{
          borderTopRightRadius: '1rem',
          borderBottomLeftRadius: '1rem',
          borderBottomRightRadius: '1rem',
        }}
        className="mb-6 md:w-6/12 md:m-3 xl:w-4/12 lg:m-3 lg:p-8  bg-white "
      >
        <Card
          key="rich"
          src="/rich-logo.svg"
          alt="rich-media"
          heading={{ text: 'Rich Media', color: 'green' }}
          description="Get paid for the content you create (any form of rich media), its your wish how often and when you want to share the content. Your learners or fans pay you on a monthly subscription model. Create rich media content subscription  service."
          features={[
            { text: 'Send updates instantly to learners', color: 'skyBlue' },
            { text: 'Add moderators to assist', color: 'black' },
            { text: 'Create on the spot instant service', color: '#ff7575' },
          ]}
        />
      </div>
    </div>
  </div>
)

export default LiveAndRichMedia
