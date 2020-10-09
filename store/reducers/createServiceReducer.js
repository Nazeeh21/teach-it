import { SET_AUDIO_ONLY, SET_VIDEO_AND_AUDIO, SET_WEEK_DAYS, UPDATE_DESCRIPTION, SET_SERVICE_FREQUENCY, UPDATE_TITLE, START_HOUR, START_MIN, SET_START_TIME_STAMP, SET_DURATION, SET_FEES, SET_MEDIA_TYPE } from "../actionTypes"

const intialState = {
  mediaType: null,
  videoAndAudio: null,
  audioOnly: null,
  title: '',
  description: '',
  serviceFrequency: '',
  weekDay: null,
  startHour: null,
  startMin : null,
  startTimeStamp: null,
  duration: null,
  fees: null
}

const setMediaType = (state, value) => {
  return {
    ...state,
    mediaType: value
  }
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

const setAudioOnly = (state) => {
  return {
    ...state,
    videoAndAudio: null,
    audioOnly: true
  }
} 

const setVideoAndAudio = (state) => {
  return {
    ...state,
    videoAndAudio: true,
    audioOnly: null
  }
} 

const setServiceFrequency = (state, value) => {
  return {
    ...state,
    serviceFrequency: value
  }
}

const setWeekDays = (state, value) => {
  return {
    ...state,
    weekDay: value
  }
}

const setStartHour = (state, value) => {
  return {
    ...state,
    startHour: value
  }
}

const setStartMin = (state, value) => {
  return {
    ...state,
    startMin: value
  }
}

const setStartTimeStamp = (state, value) => {
  return {
    ...state,
    startTimeStamp: value
  }
}

const setDuration = (state, value) => {
  return {
    ...state,
    duration: value
  }
}

const setFees = (state, value) => {
  return {
    ...state,
    fees: value
  }
}

const reducer = (state = intialState, action) => {
  switch(action.type) {
    case SET_MEDIA_TYPE :
      return setMediaType(state, action.value)
    case UPDATE_TITLE :
      return updateTitle(state, action.value)
    case UPDATE_DESCRIPTION :
      return updateDescription(state, action.value)
    case SET_AUDIO_ONLY :
      return setAudioOnly(state)
    case SET_VIDEO_AND_AUDIO :
      return setVideoAndAudio(state)
    case SET_SERVICE_FREQUENCY :
      return setServiceFrequency(state, action.value)
    case SET_WEEK_DAYS :
      return setWeekDays(state, action.value)
    case START_HOUR :
      return setStartHour(state, action.value)
    case START_MIN :
      return setStartMin(state, action.value)
    case SET_START_TIME_STAMP :
      return setStartTimeStamp(state, action.value)
    case SET_DURATION :
      return setDuration(state, action.value)
    case SET_FEES :
      return setFees(state, action.value)
    default:
      return state
  }
}

export default reducer