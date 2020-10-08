import React, { useCallback, useEffect, useState } from 'react'
import OtpInput from './OtpInput'
import { PrimaryButton } from '../../../components/Buttons/Index'
import { LandingContainer } from '../../../containers'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { resetAuth, verifyOtp } from '../../../store/actions/authActions'

const Index = ({}) => {
  const router = useRouter()
  const dispatch = useDispatch()

  const id = useSelector(state => state.auth.data.id)
  const authStatus = useSelector(state => state.auth.status)

  const [otp, setOtp] = useState([null, null, null, null, null, null])
  const [canContinue, setCanContinue] = useState(false)
  const [isCorrect, setIsCorrect] = useState(true)
  const [showStatus, setShowStatus] = useState(false)

  const verifyOtpValue = useCallback(() => {
    const extractedOtp = `${otp[0]}${otp[1]}${otp[2]}${otp[3]}${otp[4]}${otp[5]}`
    
    dispatch(verifyOtp(extractedOtp))

    console.log('Status', authStatus)
  }, [otp])

  const verifyOtpLength = useCallback(() => {
    for (let digit of otp) {
      if (!digit) {
        return setCanContinue(false)
      }
    }

    return setCanContinue(true)
  }, [otp])

  useEffect(() => {
    if (!id) {
      goBack()
    }
    verifyOtpLength()
    verifyOtpValue()
  }, [verifyOtpLength])

  const otpChangeHandler = (index, val) => {
    const newOtp = [...otp]
    newOtp[index] = val
    setOtp(newOtp)

    if (val && index >= 0 && index <= 4) {
      document.getElementById(`otp-${index+1}`).focus()
    }

    setShowStatus(false)
  }

  const handleContinue = () => {
    if (authStatus === 'success') {
      setIsCorrect(true)
      router.push('/create-profile')
    }

    if (authStatus === 'failure') {
      setIsCorrect(false)
    }

    setShowStatus(true)
  }

  const goBack = () => {
    dispatch(resetAuth())
    router.push('/login')
  }

  return (
    <LandingContainer width='6/12'>
      <h1 className='text-5xl font-semibold text-center mb-10 mx-auto'>
        Almost there
      </h1>
      <h3 className='w-9/12 m-auto'>
        Please enter the OTP sent to <br />{' '}
        <span className='text-accent text-lg'>{id}</span>
        <span onClick={goBack} className='text-secondary text-xs'>&nbsp;&nbsp;Not you?</span>
      </h3>
      <div>
        <OtpInput
          index={0}
          value={otp[0]}
          changeHandler={(val) => otpChangeHandler(0, val)}
          isIncorrect={!isCorrect}
          showStatus={showStatus}
          handleSubmit={handleContinue}
        />
        <OtpInput
          index={1}
          value={otp[1]}
          changeHandler={(val) => otpChangeHandler(1, val)}
          isIncorrect={!isCorrect}
          showStatus={showStatus}
          handleSubmit={handleContinue}
        />
        <OtpInput
          index={2}
          value={otp[2]}
          changeHandler={(val) => otpChangeHandler(2, val)}
          isIncorrect={!isCorrect}
          showStatus={showStatus}
          handleSubmit={handleContinue}
        />
        <OtpInput
          index={3}
          value={otp[3]}
          changeHandler={(val) => otpChangeHandler(3, val)}
          isIncorrect={!isCorrect}
          showStatus={showStatus}
          handleSubmit={handleContinue}
        />
        <OtpInput
          index={4}
          value={otp[4]}
          changeHandler={(val) => otpChangeHandler(4, val)}
          isIncorrect={!isCorrect}
          showStatus={showStatus}
          handleSubmit={handleContinue}
        />
        <OtpInput
          index={5}
          value={otp[5]}
          changeHandler={(val) => otpChangeHandler(5, val)}
          isIncorrect={!isCorrect}
          showStatus={showStatus}
          handleSubmit={handleContinue}
        />
      </div>
      <PrimaryButton
        label='Verify OTP'
        disabled={!canContinue}
        styles='w-8/12 m-auto mt-4'
        clickHandler={handleContinue}
      />
      <p className='mt-6 m-auto text-darkGrey text-sm'>
        Didn't get the OTP?{' '}
        <span className='text-secondary cursor-pointer'>Try again</span>
      </p>
    </LandingContainer>
  )
}

export default Index
