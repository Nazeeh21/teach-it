import React, { useEffect } from 'react'
import { Pill } from '../Buttons/Index'
import { useDispatch, useSelector } from 'react-redux'
import { CHANGE_USER_TYPE } from '../../store/actionTypes'
import { EXPERT, LEARNER } from '../../constants'
import { changeUserType } from '../../store/actions/appActions'
import {
  isProvider,
  isSeeker,
  registerProvider,
  registerSeeker,
} from '../../services/profile'

const Index = ({ color1, color2, label1, label2, textColor = 'white' }) => {
  const dispatch = useDispatch()

  const activeId = useSelector((state) => state.app.userType)

  useEffect(() => {
    activeId === EXPERT
      ? isProvider().then((res) => {
          // console.log('isProvider', res.isProvider)
          if (res.isProvider === false) {
            registerProvider(res.name)
              .then((res) => console.log('Registering Provider', res))
              .catch((e) => console.log(e))
          }
        })
      : isSeeker().then((res) => {
          // console.log('isSeeker', res.isSeeker)
          if (res.isSeeker === false) {
            registerSeeker(res.name)
              .then((res) => console.log('Registering Seeker', res))
              .catch((e) => console.log(e))
          }
        })
  }, [activeId])

  const setActiveId = (index) => {
    dispatch(changeUserType(index))
  }

  return (
    <div className="flex w-full rounded-full bg-lightGrey p-2">
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
