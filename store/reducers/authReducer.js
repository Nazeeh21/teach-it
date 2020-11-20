const {
  VERIFY_OTP,
  AUTH_START,
  AUTH_RESET,
  SAVE_OTP,
} = require('../actionTypes')

const initialState = {
  authMedium: '',
  // ongoing, failure, success
  status: '',
  data: {},
  otp: '',
  token: null,
}

const startAuth = (state, medium, data) => {
  // alert(medium)

  return {
    ...state,
    authMedium: medium,
    data,
    status: 'ongoing',
  }
}

const reset = () => {
  return { ...initialState }
}

const saveOtp = (state, otp) => {
  return {
    ...state,
    otp,
  }
}

const verifyOtp = (state, status, token) => {
  console.log('verifyOtp in authReducer', status)

  return {
    ...state,
    status,
    token,
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_START:
      return startAuth(state, action.medium, action.data)
    case AUTH_RESET:
      return reset()
    case VERIFY_OTP:
      return verifyOtp(state, action.status, action.token)
    case SAVE_OTP:
      return saveOtp(state, action.otp)
    default:
      return state
  }
}

export default reducer
