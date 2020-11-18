import React, { useState } from 'react'
import Checkbox from '../../../../Expert/CreateService/LiveServiceFormComponents/CustomizeAndMilestoneContainer/Container/Checkbox/Checkbox'

const CheckboxContainer = ({ label }) => {
  const [active, setActive] = useState(true)

  const checkboxClickHandler = () => setActive((presentState) => !presentState)

  return (
    <div className="w-full flex">
      <Checkbox active={active} clicked={checkboxClickHandler} />
      <p className="ml-2">{label}</p>
    </div>
  )
}

export default CheckboxContainer
