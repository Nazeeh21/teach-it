import React, { useState } from 'react'
import RoundedInput from '../../../components/Inputs/RoundedInput'
import { PrimaryButton } from '../../../components/Buttons/Index'
import LoginSocialIcon from '../../../components/Misc/LoginSocialIcon'
import { LandingContainer } from '../../../containers'

const HorizontalLine = () => (
  <div className='border-t-2 border-lightGrey w-3/12 h-0 p-0'></div>
)

export default () => {
  const [email, setEmail] = useState('')

  return (
    <LandingContainer width='6/12'>
      <h1 className='text-5xl font-semibold text-center mb-10 mx-auto'>Get started</h1>
      <h3 className='m-auto w-8/12'>
        Please enter your email and then we will send an OTP to verify you.
      </h3>
      <RoundedInput
        styles='mt-4 m-auto w-12/12 sm:w-12/12 md:w-11/12 lg:w-10/12 xl:w-9/12'
        placeholder='your@youremail.com'
        value={email}
        changeHandler={(val) => setEmail(val)}
        type='email'
        required
      />
      <PrimaryButton
        label='Send OTP'
        styles={'sm:w-12/12 md:w-11/12 lg:w-10/12 xl:w-9/12 m-auto mt-4'}
      />

      <div className='flex flex-row w-7/12 m-auto items-center mt-8'>
        <HorizontalLine />
        <h5 className='text-darkGrey w-6/12'>or continue with</h5>
        <HorizontalLine />
      </div>

      <div className='flex flex-row w-4/12 items-center mt-8 m-auto justify-around'>
        <LoginSocialIcon name='google' />
        <LoginSocialIcon name='facebook' />
        <LoginSocialIcon name='apple' />
      </div>
    </LandingContainer>
  )
}
