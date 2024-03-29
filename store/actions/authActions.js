import api from '../../api'
import {
  AUTH_RESET,
  AUTH_START,
  SAVE_TOKEN,
  SAVE_OTP,
  VERIFY_OTP,
} from '../actionTypes'
import { switchProfile } from './appActions'

export const auth = (data, medium) => {
  return async (dispatch) => {
    dispatch(startAuth(data, medium))

    const res = await api.post(`auth/${medium}/`, {
      [medium]: data.id,
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

export const verifyOtp = (input, medium, setIsNew) => {
  return async (dispatch) => {
    try {
      const res = await api.post(`auth/${medium}/verify/`, {
        otp: input,
      })

      const { created } = res.data

      if (created) {
        setIsNew(true)
      } else {
        setIsNew(false)
      }

      console.log('[Verify Otp]', res.data)
      // localStorage.setItem('token', res.data.token)
      dispatch(saveToken(res.data.token))
      dispatch(switchProfile(res.data['x-profile-id']))
      dispatch({
        type: VERIFY_OTP,
        status: 'success',
      })
    } catch (e) {
      console.log(e)
      dispatch({
        type: VERIFY_OTP,
        status: 'failure',
      })
    }
  }
}

export const saveToken = (token) => {
  return {
    type: SAVE_TOKEN,
    token: token,
  }
}

export const saveOtp = (otp) => {
  return {
    type: SAVE_OTP,
    otp,
  }
}

export const resetAuth = () => {
  return {
    type: AUTH_RESET,
  }
}
