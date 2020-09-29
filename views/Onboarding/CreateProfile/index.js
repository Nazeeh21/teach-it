import React, { useState } from 'react'
import TextInput from '../../../components/Inputs/TextInput'
import {
  PrimaryButton,
  SecondaryButton,
} from '../../../components/Buttons/Index'
import { LandingContainer } from '../../../containers'
import { useRouter } from 'next/router'

const Index = () => {
  const router = useRouter()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState()
  const [isNameValid, setIsNameValid] = useState(true)
  const [isEmailValid, setIsEmailValid] = useState(true)
  const [isAgeValid, setIsAgeValid] = useState(true)

  const handleContinue = () => {
    if (!isAgeValid || !isEmailValid || !isNameValid) {
      return null
    }

    return router.push('/onboarding')
  }

  return (
    <LandingContainer width='6/12'>
      <h1 className='text-5xl font-semibold text-center mb-10 mx-auto'>
        Let's create a profile
      </h1>
      <form className='bg-highlight rounded-lg pl-4 pr-4 pt-8 pb-4 mb-6 sm:w-12/12 md:w-10/12 lg:w-9/12 xl:w-8/12 w-12/12 m-auto'>
        <TextInput
          label='Name'
          value={name}
          changeHandler={setName}
          required
          isValid={isNameValid}
          setIsValid={setIsNameValid}
        />
        <TextInput
          label='Email'
          value={email}
          changeHandler={setEmail}
          type='email'
          isValid={isEmailValid}
          setIsValid={setIsEmailValid}
        />
        <TextInput
          label='Age (in years)'
          value={age}
          changeHandler={setAge}
          type='number'
          required
          isValid={isAgeValid}
          setIsValid={setIsAgeValid}
        />
      </form>
      <div className='grid gap-4 grid-cols-1 items-center sm:w-12/12 md:w-10/12 lg:w-9/12 xl:w-8/12 w-12/12 m-auto'>
        <SecondaryButton color='primary' label='Add another profile' />
        <PrimaryButton clickHandler={handleContinue} label='Continue' />
      </div>
    </LandingContainer>
  )
}

export default Index
