import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { PrimaryButton } from '../../../../components/Buttons/Index'
import Modal from '../../../../components/Modal/Modal'
import { updateEmail, verifyEmail } from '../../../../services/user'
import OtpInput from '../../../Onboarding/Otp/OtpInput'

const phoneRegex = /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*(\d{1,2})$/

const START = 'START'
const INVALID_MOBILE = 'INVALID_MOBILE'
const INVALID_OTP = 'INVALID_OTP'
const SUCCESS = 'SUCCESS'

const ErrorMessage = () => {
  return <p className="text-red">Invalid input. Please try again.</p>
}

const MobileModal = ({ showModal, toggleModal, triggerFetch }) => {
  const token = useSelector((state) => state.auth.token)
  const profileId = useSelector((state) => state.app.currentProfile)

  const [step, setStep] = useState(0)

  const [mobile, setMobile] = useState('')
  const [isValid, setIsValid] = useState(true)
  const [status, setStatus] = useState(START) // START, INVALID, SUCCESS

  const [otp, setOtp] = useState(['', '', '', '', '', ''])

  const resetState = () => {
    setStep(0)
    setMobile('')
    setStatus(START)
    setIsValid(true)
    setOtp(['', '', '', '', '', ''])
  }

  const closeModal = () => {
    toggleModal(false)
    resetState()
  }

  const confirmMobile = async () => {
    const success = await updateEmail('mobile', mobile, token, profileId)

    if (success) {
      setStep(1)
    } else {
      setStatus(INVALID_MOBILE)
    }
  }

  const otpChangeHandler = (index, val) => {
    const newOtp = [...otp]
    newOtp[index] = val
    setOtp(newOtp)
  }

  const submitOtp = async () => {
    const extractedOtp = `${otp[0]}${otp[1]}${otp[2]}${otp[3]}${otp[4]}${otp[5]}`

    const success = await verifyEmail('mobile', extractedOtp, token, profileId)

    if (success) {
      closeModal()
      triggerFetch((fetch) => !fetch)
    } else {
      setStatus(INVALID_OTP)
      alert('Wrong OTP! Please try again.')
    }
  }

  const validate = useCallback(() => {
    if (mobile.length > 0) {
      if (!phoneRegex.test(mobile)) {
        setIsValid(false)
      } else {
        setIsValid(true)
      }
    }
  }, [mobile])

  useEffect(() => {
    validate()
  }, [validate])

  return (
    <Modal
      open={showModal}
      toggleOpen={toggleModal}
      triggerOnClose={closeModal}
    >
      {step === 0 ? (
        <>
          <h1 className="text-4xl">Enter your new mobile number</h1>
          <p className="text-darkGrey">
            We will send an OTP to this number to verify it
          </p>
          <input
            placeholder="Eg. +918160516219"
            type="text"
            className="rounded-full bg-highlight py-4 px-6 w-8/12 text-xl text-center mt-8"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          {status === INVALID_MOBILE || (!isValid && <ErrorMessage />)}
          <PrimaryButton
            clickHandler={confirmMobile}
            label="Confirm"
            styles="w-8/12 m-auto mt-8"
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
          {status === INVALID_OTP && <ErrorMessage />}
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

export default MobileModal
