import React, { useState } from 'react'
import { Pill } from '../Buttons/Index'

export default ({ color1, color2, label1, label2 }) => {
  const [activeId, setActiveId] = useState(0)

  return (
    <div className='flex w-full rounded-full bg-lightGrey p-2'>
      <Pill
        inactive={activeId !== 0}
        label={label1}
        color={color1}
        textColor='white'
        clickHandler={() => {
          setActiveId(0)
        }}
      />
      <Pill
        inactive={activeId !== 1}
        label={label2}
        color={color2}
        textColor='white'
        clickHandler={() => {
          setActiveId(1)
        }}
      />
    </div>
  )
}
