import React from 'react'
import { Pill } from './Pill'

const Index = ({ activeLabel, setLabel, color, label1, label2, label3, width = 'w-2/12' }) => {

  return (
    <div
      style={{ background: '#F3F5FD' }}
      className={`flex items-stretch ${width} rounded-full`}
    >
      <Pill
        inactive={activeLabel !== label1.toLowerCase()}
        label={label1}
        color={color}
        textColor='black'
        clickHandler={() => {
          setLabel(label1.toLowerCase())
        }}
      />
      <Pill
        inactive={activeLabel !== label2.toLowerCase()}
        label={label2}
        color={color}
        textColor='black'
        clickHandler={() => {
          setLabel(label2.toLowerCase())
        }}
      />
      <Pill
        inactive={activeLabel !== label3.toLowerCase()}
        label={label3}
        color={color}
        textColor='black'
        clickHandler={() => {
          setLabel(label3.toLowerCase())
        }}
      />
    </div>
  )
}

export default Index
