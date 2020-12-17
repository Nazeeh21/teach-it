import { SET_CREATE_SERVICE_ACTIVE_STEP } from '../actionTypes'

const intialState = {
  mediaType: null,
  videoAndAudio: null,
  audioOnly: null,
  title: '',
  description: '',
  serviceFrequency: '',
  weekDay: null,
  startHour: null,
  startMin: null,
  startTimeStamp: null,
  duration: null,
  fees: null,
  activeStep: 1,
}

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_CREATE_SERVICE_ACTIVE_STEP:
      return {
        ...state,
        activeStep: action.step,
      }
    default:
      return state
  }
}

export default reducer
