const {
  VERIFY_OTP,
  AUTH_START,
  AUTH_RESET,
  SAVE_OTP,
  SAVE_TOKEN,
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

const verifyOtp = (state, status) => {
  console.log('verifyOtp in authReducer', status)

  return {
    ...state,
    status,
  }
}

const saveToken = (state, token) => {
  return {
    ...state,
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
      return verifyOtp(state, action.status)
    case SAVE_OTP:
      return saveOtp(state, action.otp)
    case SAVE_TOKEN:
      localStorage.setItem('token', action.token)
      return saveToken(state, action.token)
    default:
      return state
  }
}

export default reducer
