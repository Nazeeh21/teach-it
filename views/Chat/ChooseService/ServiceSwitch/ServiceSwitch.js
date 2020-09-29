import React, { useState } from 'react'
import { Pill } from './Pill/Pill'

const ServiceSwitch = ({ color, label1, label2 }) => {
  const [activeId, setActiveId] = useState(0)
  return (
    <div className='flex w-8/12 rounded-full bg-lightGrey m-2'>
      <Pill
        inactive={activeId !== 0}
        label={label1}
        color={color}
        textColor='black'
        clickHandler={() => {
          setActiveId(0)
        }}
      />
      <Pill
        inactive={activeId !== 1}
        label={label2}
        color={color}
        textColor='black'
        clickHandler={() => {
          setActiveId(1)
        }}
      />
    </div>
  )
};

export default ServiceSwitch;
