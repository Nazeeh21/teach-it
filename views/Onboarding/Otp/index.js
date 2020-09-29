import React, { useCallback, useEffect, useState } from 'react'
import Modal from '../../components/Modal/Modal'
import OtpInput from './OtpInput'
import { PrimaryButton } from '../../components/Buttons/Index'
import { ModalTitle } from '../../typography/misc'

export default ({}) => {
  const [isOpen, toggleOpen] = useState(true)
  const [otp, setOtp] = useState([null, null, null, null])
  const [canContinue, setCanContinue] = useState(false)
  const [isCorrect, setIsCorrect] = useState(true)

  const verifyOtpLength = useCallback(() => {
    for (let digit of otp) {
      if (!digit) {
        return setCanContinue(false)
      }
    }

    return setCanContinue(true)
  }, [otp])

  useEffect(() => {
    verifyOtpLength()
  }, [verifyOtpLength])

  const otpChangeHandler = (index, val) => {
    const newOtp = [...otp]
    newOtp[index] = val
    setOtp(newOtp)
  }

  const verifyOtpValue = () => {
    const extractedOtp = `${otp[0]}${otp[1]}${otp[2]}${otp[3]}`

    extractedOtp === '1234' ? setIsCorrect(true) : setIsCorrect(false)
  }

  return (
    <div>
      <Modal
        open={isOpen}
        toggleOpen={toggleOpen}
        triggerOnClose={() => alert('Triggered on close!')}
      >
        <ModalTitle>Almost there</ModalTitle>
        <h3 className='w-9/12 m-auto'>
          Please enter the OTP sent to <br />{' '}
          <span className='text-accent text-lg'>8160516219</span>
          <span className='text-secondary text-xs'>&nbsp;&nbsp;Not you?</span>
        </h3>
        <div>
          <OtpInput
            value={otp[0]}
            changeHandler={(val) => otpChangeHandler(0, val)}
            isIncorrect={!isCorrect}
          />
          <OtpInput
            value={otp[1]}
            changeHandler={(val) => otpChangeHandler(1, val)}
            isIncorrect={!isCorrect}
          />
          <OtpInput
            value={otp[2]}
            changeHandler={(val) => otpChangeHandler(2, val)}
            isIncorrect={!isCorrect}
          />
          <OtpInput
            value={otp[3]}
            changeHandler={(val) => otpChangeHandler(3, val)}
            isIncorrect={!isCorrect}
          />
        </div>
        <PrimaryButton
          label='Verify OTP'
          disabled={!canContinue}
          styles='w-8/12 m-auto mt-4'
          clickHandler={verifyOtpValue}
        />
        <p className='mt-6 m-auto text-darkGrey text-sm'>
          Didn't get the OTP?{' '}
          <span className='text-secondary cursor-pointer'>Try again</span>
        </p>
      </Modal>
    </div>
  )
}
