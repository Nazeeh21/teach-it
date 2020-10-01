import React, { useState } from 'react'
import TextInput from '../../../components/Inputs/TextInput'
import {
  PrimaryButton,
  SecondaryButton,
} from '../../../components/Buttons/Index'
import { LandingContainer } from '../../../containers'
import { useRouter } from 'next/router'
import Form from './Form'

const Index = () => {
  const router = useRouter()
  const [arr, setArr] = useState([0])

  const handleContinue = () => {
    // if (!isAgeValid || !isEmailValid || !isNameValid) {
    //   return null
    // }

    return router.push('/onboarding')
  }

  const addProfile = () => {
    const newArr = [...arr]
    newArr.push(0)
    setArr(newArr)
  }

  return (
    <LandingContainer width='6/12'>
      <h1 className='text-5xl font-semibold text-center mb-10 mx-auto'>
        Let's create a profile
      </h1>
      <div className={`grid sm:grid-cols-1 lg:grid-cols-${arr.length === 1 ? 1 : 2} grid-flow-row gap-1 justify-center items-center`}>
        {
          arr.map(() => <Form />)
        }
      </div>
      <div className='grid gap-4 grid-cols-1 items-center sm:w-12/12 md:w-10/12 lg:w-9/12 xl:w-8/12 w-12/12 m-auto'>
        <SecondaryButton clickHandler={addProfile} color='primary' label='Add another profile' />
        <PrimaryButton clickHandler={handleContinue} label='Continue' />
      </div>
    </LandingContainer>
  )
}

export default Index
