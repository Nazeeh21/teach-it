import React, { useState } from 'react'
import { Pill } from './Pill'

const Pills2 = ({
  activeLabel,
  setLabel,
  color,
  label1,
  label2,
  width = '2/12',
}) => {
  return (
    <div
      style={{ background: '#F3F5FD' }}
      className={`flex items-stretch w-${width} rounded-full`}
    >
      <Pill
        inactive={activeLabel !== label1.toLowerCase()}
        label={label1}
        color={color}
        textColor="black"
        clickHandler={() => {
          setLabel(label1.toLowerCase())
        }}
      />
      <Pill
        inactive={activeLabel !== label2.toLowerCase()}
        label={label2}
        color={color}
        textColor="black"
        clickHandler={() => {
          setLabel(label2.toLowerCase())
        }}
      />
    </div>
  )
}

export default Pills2
