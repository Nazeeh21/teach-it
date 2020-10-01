import React, { useState } from "react"
import TextInput from "../../../../components/Inputs/TextInput"

const Form = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState()
  const [isNameValid, setIsNameValid] = useState(true)
  const [isEmailValid, setIsEmailValid] = useState(true)
  const [isAgeValid, setIsAgeValid] = useState(true)

  return (
    <form className="bg-highlight rounded-lg pl-4 pr-4 pt-8 pb-4 mb-6 sm:w-12/12 md:w-10/12 lg:w-9/12 xl:w-8/12 w-12/12 m-auto">
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
    </form>
  )
}

export default Form
