import React from 'react'
import { Pill } from '../Buttons/Index'
import { useDispatch, useSelector } from 'react-redux'
import { CHANGE_USER_TYPE } from '../../store/actions'
import { EXPERT, LEARNER } from '../../constants'

const Index = ({ color1, color2, label1, label2, textColor = 'white' }) => {
  const dispatch = useDispatch()

  const activeId = useSelector((state) => state.userType)

  const setActiveId = (index) => {
    dispatch({ type: CHANGE_USER_TYPE, newType: index })
  }

  return (
    <div className='flex w-full rounded-full bg-lightGrey p-2'>
      <Pill
        inactive={activeId !== 0}
        label={label1}
        color={color1}
        textColor={textColor}
        clickHandler={() => {
          setActiveId(EXPERT)
        }}
      />
      <Pill
        inactive={activeId !== 1}
        label={label2}
        color={color2}
        textColor={textColor}
        clickHandler={() => {
          setActiveId(LEARNER)
        }}
      />
    </div>
  )
}

export default Index
