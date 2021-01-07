import React, { useState } from 'react'
import TextInput from '../../../components/Inputs/TextInput'

const ProviderForm = ({ name, setName }) => {
  const [isNameValid, setIsNameValid] = useState(true)

  return (
    <div className="bg-highlight rounded-lg pl-4 pr-4 pt-8 pb-4 mb-6 sm:w-12/12 md:w-10/12 lg:w-9/12 xl:w-8/12 w-12/12 m-auto">
      <TextInput
        label="Name"
        value={name}
        changeHandler={setName}
        required
        isValid={isNameValid}
        setIsValid={setIsNameValid}
      />
    </div>
  )
}

export default ProviderForm
