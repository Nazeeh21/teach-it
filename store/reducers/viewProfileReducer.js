const initialState = {
  provider: {},
  seeker: {},
}

const providerDataUpdate = (state, data) => {
  return {
    ...state,
    provider: data,
  }
}

const seekerDataUpdate = (state, data) => {
  return {
    ...state,
    seeker: data,
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'provider':
      return providerDataUpdate(state, action.data)
    case 'seeker':
      return seekerDataUpdate(state, action.data)
    default:
      return null
  }
}

export default reducer
