import React, { useState } from 'react'
import TextInput from '../../../components/Inputs/TextInput'
import {
  PrimaryButton,
  SecondaryButton,
} from '../../../components/Buttons/Index'
import { LandingContainer } from '../../../containers'
import { useRouter } from 'next/router'
import Form from './Form'
import { useDispatch, useSelector } from 'react-redux'
import { continueHandler } from '../../../store/actions/profileActions'
import { v4 as uuid } from 'uuid'

const Index = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  const token = useSelector((state) => state.auth.token)
  const currentProfileId = useSelector((state) => state.app.currentProfile)

  const [arr, setArr] = useState([0])
  const [formData, setFormData] = useState([
    {
      name: '',
      email: '',
      age: '',
    },
  ])

  const handleContinue = () => {
    // if (!isAgeValid || !isEmailValid || !isNameValid) {
    //   return null
    // }

    dispatch(continueHandler(formData, token, currentProfileId))

    // TODO: Error handling

    return router.push('/onboarding')
  }

  const addProfile = () => {
    const newArr = [...arr]
    newArr.push(0)

    const newFormData = [...formData]

    newFormData.push({
      name: '',
      email: '',
      age: '',
    })

    setFormData(newFormData)
    setArr(newArr)
  }

  const handleChange = (index, field, val) => {
    const newFormData = [...formData]

    newFormData[index][field] = val

    setFormData(newFormData)
  }

  const crossButtonClickHandler = (index) => {
    const newFormData = [...formData]
    const newArr = [...arr]

    newFormData.splice(index, 1)
    newArr.splice(index, 1)
    setFormData(newFormData)
    setArr(newArr)
  }

  return (
    <LandingContainer width="6/12">
      <h1 className="text-5xl font-semibold text-center mb-10 mx-auto">
        Let's create a profile
      </h1>
      <div
        className={`grid sm:grid-cols-1 lg:grid-cols-${
          arr.length === 1 ? 1 : 2
        } grid-flow-row gap-1 justify-center items-center`}
      >
        {arr.map((val, index) => {
          return (
            <div>
              <Form
                key={index}
                index={index}
                name={formData[index]['name']}
                email={formData[index]['email']}
                age={formData[index]['age']}
                setName={(val) => handleChange(index, 'name', val)}
                setEmail={(val) => handleChange(index, 'email', val)}
                setAge={(val) => handleChange(index, 'age', val)}
                crossButtonClickHandler={crossButtonClickHandler}
              />
            </div>
          )
        })}
      </div>
      <div className="grid gap-4 grid-cols-1 items-center sm:w-12/12 md:w-10/12 lg:w-9/12 xl:w-8/12 w-12/12 m-auto">
        <SecondaryButton
          clickHandler={addProfile}
          color="primary"
          label="Add another profile"
        />
        <PrimaryButton clickHandler={handleContinue} label="Continue" />
      </div>
    </LandingContainer>
  )
}

export default Index
