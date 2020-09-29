import React, { useState } from 'react'
import TextInput from '../../../components/Inputs/TextInput'
import { PrimaryButton, SecondaryButton } from '../../../components/Buttons/Index'
import { LandingContainer } from '../../../containers'

export default () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState()

  return (
    <LandingContainer width='6/12'>
      <h1 className='text-5xl font-semibold text-center mb-10 mx-auto'>
        Let's create a profile
      </h1>
      <form className='bg-highlight rounded-lg pl-4 pr-4 pt-8 pb-4 mb-6 sm:w-12/12 md:w-10/12 lg:w-9/12 xl:w-8/12 w-12/12 m-auto'>
        <TextInput label='Name' value={name} changeHandler={setName} required />
        <TextInput
          label='Email'
          value={email}
          changeHandler={setEmail}
          type='email'
        />
        <TextInput
          label='Age (in years)'
          value={age}
          changeHandler={setAge}
          type='number'
          required
        />
      </form>
      <div className='grid gap-4 grid-cols-1 items-center sm:w-12/12 md:w-10/12 lg:w-9/12 xl:w-8/12 w-12/12 m-auto'>
        <SecondaryButton color='primary' label='Add another profile' />
        <PrimaryButton label='Continue' />
      </div>
    </LandingContainer>
  )
}
