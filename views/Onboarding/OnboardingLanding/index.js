import React from 'react'
import { LandingContainer } from '../../../containers'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { changeUserType } from '../../../store/actions/appActions'
import { LEARNER, EXPERT } from '../../../constants'

const GridItem = ({ imgSrc, text }) => (
  <div className='flex gap-6 justify-center items-center'>
    <div className='w-4/12 border-2 border-highlight justify-self-end p-2 justify-center flex'>
      <img alt='Switch' src={imgSrc} />
    </div>
    <p className='w-6/12 text-left text-teal'>{text}</p>
  </div>
)

const Button = ({ color, label, clickHandler }) => (
  <button onClick={clickHandler} className={`bg-${color} text-white w-full p-4 rounded text-lg`}>
    {label}
  </button>
)

const Index = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  return (
    <LandingContainer>
      <h1 className='text-5xl font-semibold text-center mb-4 mx-auto'>
        Welcome to VideoWork
      </h1>
      <h3 className='text-lg text-teal text-center mb-10'>
        Let's get you acquainted with a few basics to get you started!
      </h3>
      <div className='flex items-center gap-4'>
        <div
          className='w-5/12 m-auto'
          style={{
            backgroundImage: 'url("onboarding/landing_stock1.png")',
            height: '400px',
          }}
        ></div>
        <div
          className='w-5/12 m-auto'
          style={{
            backgroundImage: 'url("onboarding/landing_stock2.png")',
            height: '400px',
          }}
        ></div>
      </div>
      <h3 className='text-lg text-teal text-left mx-auto mt-6 mb-10 w-11/12'>
        VideoWork matches highly skilled video entrepreneurs with people who are
        eager to learn, at very low charges.
      </h3>
      <img
        src='/onboarding/landing_stock3.jpg'
        alt='VideoWork'
        className='m-auto w-10/12'
      />
      <h3 className='m-auto text-center text-lg text-primary mt-24 mb-10'>
        Here are a few things to get you started
      </h3>

      <div className='grid grid-flow-row grid-cols-1 gap-10'>
        <GridItem
          imgsrc='/onboarding/grid1.svg'
          text='This switch in the header lets you quickly toggle between your
            expert dashboard and your learner dashboard.'
        />

        <GridItem
          imgsrc='/onboarding/grid2.svg'
          text={
            'While in provider mode, click the buttons on the right sidebar to start creating your services.'
          }
        />

        <GridItem
          imgsrc='/onboarding/grid3.svg'
          text='Click the payments link in the sidebar to quickly check your earnings and make withdrawls.'
        />
      </div>
      <h1 className='text-5xl font-semibold text-center mx-auto mt-10'>
        All done!
      </h1>
      <h3 className='text-lg text-primary text-center mt-4 mb-10'>
        Click one of the buttons below to start using VideoWork!
      </h3>
      <div
        className='flex gap-8 w-10/12 m-auto mb-8'
      >
        <Button clickHandler={() => {
          router.push('/dashboard')
          dispatch(changeUserType(LEARNER))
        }} color='learner' label='Take a service' />
        <Button clickHandler={() => {
          router.push('/dashboard')
          dispatch(changeUserType(EXPERT))
        }} color='expert' label='Provide a service' />
      </div>
    </LandingContainer>
  )
}

export default Index
