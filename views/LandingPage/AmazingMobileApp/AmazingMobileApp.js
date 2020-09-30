import React from 'react'
import TextContainer from './TextContainer/TextContainer'

const leftTextContainerData = [
  {
    title: 'Learn anywhere, anytime',
    subTitle:
      'With the mobile app, you can learn anywhere you are and any time you want. All the Videowork features you love are enabbled in the mobile app.',
  },
  {
    title: 'Invite phone contacts',
    subTitle:
      "You can invite all your phone contacts in a single click. Just click on invite button and we'll show you your entire contact list to send invitations to. Keep inviting and earn big prizes",
  },
]

const rightTextContainerData = [
  {
    title: 'Learn live video, podcasts & rich media services',
    subTitle:
      'Now you can run all your services, including podcasts, with just your phone. You can also stay connected and sen your rich media services to your learners on the go.',
  },
  {
    title: 'Reply to enquiries instantly',
    subTitle:
      'The faster you respond to your service enquiries, the higher are your chances of getting more learners.',
  },
]

const heading = 'Amazing mobile app for on-the-go learning and teaching'
const AmazingMobileApp = () => (
  <div className='lg:text-center bg-white flex flex-col lg:flex-row justify-center'>
    <div className='w-full mx-5 my-20 lg:w-10/12 lg:my-24'>
      <p
        style={{ color: '#1d2d50', lineHeight: '120%' }}
        className='text-4xl lg:text-5xl font-bold lg:mx-40'>
        {heading}
      </p>
      <div className='w-full -mx-5 mt-10 lg:hidden'>
          <img
            className='w-10/12 m-auto rounded-lg shadow-2xl border-solid border-8 border-black'
            src='mobile-screen.png'
            alt='mobile-screen' />
        </div>
      <div className='flex flex-col lg:flex-row items-center my-20'>
        <div className='w-full lg:w-4/12 grid grid-flow-col grid-cols-1 grid-rows-2 gap-10'>
          {leftTextContainerData.map((data) => (<TextContainer data={data} />))}
        </div>
        <div className='hidden lg:w-4/12 lg:mx-12 lg:block'>
          <img
            className='rounded-lg shadow-2xl border-solid border-8 border-black'
            src='mobile-screen.png'
            alt='mobile-screen' />
        </div>
        <div className='w-full lg:w-4/12 grid grid-flow-col grid-cols-1 grid-rows-2 gap-10'>
          {rightTextContainerData.map((data) => (<TextContainer data={data} />))}
        </div>
      </div>
    </div>
  </div>
)

export default AmazingMobileApp
