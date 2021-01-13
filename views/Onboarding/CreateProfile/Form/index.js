import React, { useState } from 'react'
import TextInput from '../../../../components/Inputs/TextInput'
import IconPicker from './IconPicker'

const CrossButton = ({ clickHandler, index }) => (
  <div
    style={{
      border: '3px solid white',
      position: 'relative',
      left: '80%',
      bottom: '6%',
    }}
    onClick={() => clickHandler(index)}
    className="cursor-pointer rounded-full w-full bg-red flex text-white"
  >
    <div className="m-auto">x</div>
  </div>
)

const Form = ({
  name,
  setName,
  email,
  setEmail,
  age,
  setAge,
  index,
  crossButtonClickHandler,
}) => {
  const [isNameValid, setIsNameValid] = useState(true)
  const [isEmailValid, setIsEmailValid] = useState(true)
  const [isAgeValid, setIsAgeValid] = useState(true)

  return (
    <form className="bg-highlight rounded-lg pl-4 pr-4 pt-8 pb-4 mb-6 sm:w-12/12 md:w-10/12 lg:w-9/12 xl:w-8/12 w-12/12 m-auto">
      <div className="grid grid-cols-1 justify-items-end">
        <div className="w-8 mr-4">
          <CrossButton index={index} clickHandler={crossButtonClickHandler} />
        </div>
      </div>
      <TextInput
        label="Name"
        value={name}
        changeHandler={setName}
        required
        isValid={isNameValid}
        setIsValid={setIsNameValid}
      />
      <TextInput
        label="Email"
        value={email}
        changeHandler={setEmail}
        type="email"
        isValid={isEmailValid}
        setIsValid={setIsEmailValid}
      />
      <TextInput
        label="Age (in years)"
        value={age}
        changeHandler={setAge}
        type="number"
        required
        isValid={isAgeValid}
        setIsValid={setIsAgeValid}
      />
      <IconPicker />
    </form>
  )
}

export default Form
