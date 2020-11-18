import {} from '../actionTypes'

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
}

const reducer = (state = intialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default reducer
