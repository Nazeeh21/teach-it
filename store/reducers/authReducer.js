const { AUTH_START, AUTH_SUCCESS, AUTH_FAILURE, AUTH_RESET } = require('../actionTypes')

const initialState = {
  authMedium: '',
  // ongoing, failure, success
  status: '',
  data: {}
}

const startAuth = (state, medium, data) => {
  // alert(medium)

  return {
    ...state,
    authMedium: medium,
    data,
    status: 'ongoing'
  }
}

const reset = () => {
  return {...initialState}
} 

const reducer = ( state = initialState, action ) => {
  switch (action.type) {
    case AUTH_START:
      return startAuth(state, action.medium, action.data)
    case AUTH_SUCCESS:
      return setStatus(state, 'success')
    case AUTH_FAILURE:
      return setStatus(state, 'failure')
    case AUTH_RESET:
      return reset()
    default:
     return state
  }
}

export default reducer