import { UPDATE_DESCRIPTION, UPDATE_TITLE } from "../actionTypes"

const intialState = {
  videoAndAudio: null,
  audioOnly: null,
  title: '',
  description: ''
}

const updateTitle = (state, value) => {
  return {
    ...state,
    title: value
  }
}

const updateDescription = (state, value) => {
  return {
    ...state,
    description: value
  }
}

const reducer = (state = intialState, action) => {
  switch(action.type) {
    case UPDATE_TITLE :
      return updateTitle(state, action.value)
    case UPDATE_DESCRIPTION :
      return updateDescription(state, action.value)
    default:
      return state
  }
}

export default reducer