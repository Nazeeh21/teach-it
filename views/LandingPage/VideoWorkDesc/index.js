import React from 'react'

const Container = ({ heading, subHeading }) => (
  <div>
    <p className='text-xl mt-4'>{heading}</p>
    <p className='text-md mt-5'>{subHeading}</p>
  </div>
)

export default () => (
  <div className='border-2 border-solid border-gray-300 text-darkGrey grid grid-flow-rows grid-cols-2 grid-rows-2 gap-6 pt-6 pb-10 pl-32'>
    <Container heading='What is Videowork?' subHeading='Video work is an easy way of sharing knowledge. With the videowork app,
        you can learn anywhere you are and any time you want. All the Videowork
        features you love are enabled in the mobile app.' />
    <Container heading='Can I trust Videowork?' subHeading='Videowork is trusted by thousands of freeelancers'/>
    <Container heading='How do I get paid?' subHeading='Once you have a minimum of $1000 in your account, you can request money to be transferred to your account with just a click of a button. The payment is released immediately on request.'/>
    <Container heading='How much money can I make on Videowork?' subHeading='There is no limit. You can make as much as your time and experience permits.'/>
  </div>
)
