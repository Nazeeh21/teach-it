import api from '../../api'
import { AUTH_RESET, AUTH_START, SAVE_OTP, VERIFY_OTP } from '../actionTypes'

export const auth = (data, medium) => {
  return async dispatch => {
    dispatch(startAuth(data, medium))

    const res = await api.post(`auth/${medium}/`, {
      [medium]: data.id
    })

    console.log(res)

    console.log('OTP', res.data.otp)
    dispatch(saveOtp(res.data.otp))
  }
}

export const startAuth = (data, medium) => {
  return {
    type: AUTH_START,
    medium,
    data,
  }
}

export const verifyOtp = (input, medium) => {
  return async () => {
    const res = await api.post(`auth/${medium}/verify/`, {
      otp: input
    })
  
    if (res.status !== 200) {
      return {
        type: VERIFY_OTP,
        status: 'failure'
      }
    } else {
      localStorage.setItem('token', res.data.token)
  
      return {
        type: VERIFY_OTP,
        status: 'success'
      }
    }
  }
}

export const saveOtp = (otp) => {
  return {
    type: SAVE_OTP,
    otp
  }
}

export const resetAuth = () => {
  return {
    type: AUTH_RESET
  }
}