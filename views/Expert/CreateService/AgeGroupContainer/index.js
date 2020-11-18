import React from 'react'
import Checkbox from '../LiveServiceFormComponents/CustomizeAndMilestoneContainer/Container/Checkbox/Checkbox'

const AgeGroupContainer = ({ ageGroup, active, clickHandler }) => (
  <div
    onClick={() => clickHandler(ageGroup.value)}
    className={`cursor-pointer w-full p-4 pl-5 flex items-center flex-row rounded-lg border-2 border-${
      active ? 'secondary' : 'lightGrey'
    } border-l-${active ? 4 : 2} ${!active && 'font-normal'}`}
  >
    <div className="w-1/12">
      <Checkbox active={active} clicked={() => clickHandler(ageGroup.value)} />
    </div>
    <p className="ml-3 text-lg text-black font-medium">{ageGroup.label}</p>
  </div>
)

export default AgeGroupContainer
