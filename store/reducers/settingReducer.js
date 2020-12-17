import { SAVE_PROFILE_DATA, UPDATE_PROFILE_DATA } from '../actionTypes'

const initialState = {}

const saveData = (state, data) => {
  return {
    ...state,
    data,
  }
}

const updateData = (state, field, value) => {
  return {
    ...state,
    data: {
      ...state.data,
      [field]: value,
    },
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_PROFILE_DATA:
      return saveData(state, action.data)
    case UPDATE_PROFILE_DATA:
      return updateData(state, action.data.field, action.data.value)
    default:
      return state
  }
}

export default reducer
