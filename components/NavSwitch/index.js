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
import { useRouter } from 'next/router'

const Index = ({ color1, color2, label1, label2, textColor = 'white' }) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const token = useSelector((state) => state.auth.token)
  const currentProfileId = useSelector((state) => state.app.currentProfile)

  const activeId = useSelector((state) => state.app.userType)

  useEffect(() => {
    activeId === EXPERT
      ? isProvider(token, currentProfileId).then((res) => {
          console.log('isProvider', res.isProvider)
          if (res && res.isProvider === false) {
            router.push('/register-provider')
            //   registerProvider(res.name, token, currentProfileId)
            //     .then((res) => console.log('Registering Provider', res))
            //     .catch((e) => console.log(e))
          }
        })
      : isSeeker(token, currentProfileId).then((res) => {
          // console.log('isSeeker', res.isSeeker)
          if (res && res.isSeeker === false) {
            registerSeeker(res.name, token, currentProfileId)
              .then((res) => console.log('Registering Seeker', res))
              .catch((e) => console.log(e))
          }
        })
  }, [activeId, token, currentProfileId])

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
