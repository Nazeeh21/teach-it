import React, { useState } from 'react'
import { Pill } from './Pill'

const Index = ({ color, label1, label2, label3, width = 'w-2/12' }) => {
  const [activeId, setActiveId] = useState(0)

  return (
    <div style={{background: '#F3F5FD'}} className={`flex items-stretch ${width} rounded-full`}>
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
      <Pill
        inactive={activeId !== 2}
        label={label3}
        color={color}
        textColor='black'
        clickHandler={() => {
          setActiveId(2)
        }}
      />
    </div>
  )
}

export default Index