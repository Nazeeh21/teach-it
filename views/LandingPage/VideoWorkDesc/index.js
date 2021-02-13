import React from 'react'

const Container = ({ heading, subHeading }) => (
  <div className="font-medium">
    <p className="text-xl  mt-4">{heading}</p>
    <p className="text-md  mt-5">{subHeading}</p>
  </div>
)

const Index = () => (
  <div
    style={{ color: '#8A8EA0' }}
    className="w-full opacity-75 pl-2 border-2 border-solid bg-lightGrey border-gray-300 text-darkGrey grid md:grid-flow-rows md:grid-cols-2 md:rid-rows-2 gap-6 pt-6 pb-10 md:pl-10 md:pr-6 lg:pl-24 xl:pr-0 xl:pl-40"
  >
    <Container
      heading="What is Videowork?"
      subHeading="Video work is an easy way of sharing knowledge. With the videowork app,
      you can learn anywhere you are and any time you want. All the Videowork
      features you love are enabled in the mobile app."
    />
    <Container
      heading="Can I trust Videowork?"
      subHeading="Videowork is trusted by thousands of freeelancers"
    />
    <Container
      heading="How do I get paid?"
      subHeading="Once you have a minimum of $1000 in your account, you can request money to be transferred to your account with just a click of a button. The payment is released immediately on request."
    />
    <Container
      heading="How much money can I make on Videowork?"
      subHeading="There is no limit. You can make as much as your time and experience permits."
    />
  </div>
)

export default Index
