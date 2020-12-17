import React, { useState } from 'react'
import Modal from '../../../../components/Modal/Modal'
import RoundedInput from '../../../../components/Inputs/RoundedInput'
import { PrimaryButton } from '../../../../components/Buttons/Index'
import { updateEmail, verifyEmail } from '../../../../services/user'
import { useSelector } from 'react-redux'
import OtpInput from '../../../Onboarding/Otp/OtpInput'

const EmailModal = ({ showModal, toggleModal, triggerFetch }) => {
  const [step, setStep] = useState(0)

  const [email, setEmail] = useState('')
  const [isValid, setIsValid] = useState(true)

  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [otpSuccess, setOtpSuccess] = useState(false)

  const token = useSelector((state) => state.auth.token)
  const profileId = useSelector((state) => state.app.currentProfile)

  const closeModal = () => {
    toggleModal(false)
    resetState()
  }

  const resetState = () => {
    setStep(0)
    setEmail('')
    setIsValid(true)
    setOtp(['', '', '', '', '', ''])
    setOtpSuccess(false)
  }

  const otpChangeHandler = (index, val) => {
    const newOtp = [...otp]
    newOtp[index] = val
    setOtp(newOtp)
  }

  const submitEmail = async () => {
    const success = await updateEmail('email', email, token, profileId)

    if (success) {
      setStep(1)
    }
  }

  const submitOtp = async () => {
    const extractedOtp = `${otp[0]}${otp[1]}${otp[2]}${otp[3]}${otp[4]}${otp[5]}`

    const success = await verifyEmail('email', extractedOtp, token, profileId)

    if (success) {
      closeModal()
      triggerFetch((fetch) => !fetch)
    } else {
      alert('Wrong OTP! Please try again.')
    }
  }

  return (
    <Modal
      open={showModal}
      toggleOpen={toggleModal}
      triggerOnClose={closeModal}
    >
      {step === 0 ? (
        <>
          <h1 className="text-4xl font-semibold">Change e-mail</h1>
          <RoundedInput
            placeholder="Enter your new e-mail here"
            value={email}
            changeHandler={setEmail}
            type="email"
            required
            isValid={isValid}
            setIsValid={setIsValid}
            styles="w-8/12 m-auto"
          />

          <PrimaryButton
            label="Submit"
            clickHandler={() => submitEmail()}
            disabled={!isValid || email.length === 0}
            styles="w-8/12 m-auto"
          />
        </>
      ) : (
        <>
          <h1>Enter the OTP we sent you</h1>
          <div>
            <OtpInput
              index={0}
              value={otp[0]}
              changeHandler={(val) => otpChangeHandler(0, val)}
              handleSubmit={submitOtp}
            />
            <OtpInput
              index={1}
              value={otp[1]}
              changeHandler={(val) => otpChangeHandler(1, val)}
              handleSubmit={submitOtp}
            />
            <OtpInput
              index={2}
              value={otp[2]}
              changeHandler={(val) => otpChangeHandler(2, val)}
              handleSubmit={submitOtp}
            />
            <OtpInput
              index={3}
              value={otp[3]}
              changeHandler={(val) => otpChangeHandler(3, val)}
              handleSubmit={submitOtp}
            />
            <OtpInput
              index={4}
              value={otp[4]}
              changeHandler={(val) => otpChangeHandler(4, val)}
              handleSubmit={submitOtp}
            />
            <OtpInput
              index={5}
              value={otp[5]}
              changeHandler={(val) => otpChangeHandler(5, val)}
              handleSubmit={submitOtp}
            />
          </div>
          <PrimaryButton
            label="Verify"
            clickHandler={() => submitOtp()}
            styles="w-8/12 m-auto"
          />
        </>
      )}
    </Modal>
  )
}

export default EmailModal
