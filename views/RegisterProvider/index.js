import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PrimaryButton } from '../../components/Buttons/Index'
import { EXPERT } from '../../constants'
import { LandingContainer } from '../../containers'
import { registerProvider } from '../../services/profile'
import { changeUserType } from '../../store/actions/appActions'
import ProviderForm from './ProviderForm'

const Index = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [name, setName] = useState('')
  const token = useSelector((state) => state.auth.token)
  const currentProfileId = useSelector((state) => state.app.currentProfile)
  const userType = useSelector((state) => state.app.userType)

  if (userType === 1) {
    return <div>You cant Register for Expert as a Learner.</div>
  }

  const registerClickHandler = () => {
    registerProvider(name, token, currentProfileId)
      .then((res) => {
        console.log('Registering Provider', res)
        dispatch(changeUserType(EXPERT))
        router.push('/dashboard')
      })
      .catch((e) => console.log(e))
  }

  return (
    <div>
      <LandingContainer width="full">
        <div className="text-center text-5xl font-semibold mb-10 mx-auto">
          Lets register as a provider
        </div>
        <ProviderForm name={name} setName={(val) => setName(val)} />

        <div className="w-6/12 mt-4 mx-auto">
          <PrimaryButton
            disabled={name === ''}
            label="Register"
            clickHandler={registerClickHandler}
          />
        </div>
      </LandingContainer>
    </div>
  )
}

export default Index
