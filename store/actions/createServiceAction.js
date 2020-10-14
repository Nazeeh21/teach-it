import api from '../../api'
import {
  CREATE_SERVICE,
  SET_AUDIO_ONLY,
  SET_VIDEO_AND_AUDIO,
  UPDATE_TITLE,
  UPDATE_DESCRIPTION,
  SET_SERVICE_FREQUENCY,
  SET_WEEK_DAYS,
  START_HOUR,
  START_MIN,
  SET_DURATION,
  SET_FEES,
  SET_MEDIA_TYPE,
  SET_START_TIME_STAMP,
} from '../actionTypes'

export const createService = (createServiceData) => {
  return async (dispatch) => {
    try {
      const res = await api.post('service/', createServiceData, {
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`,
        },
      })
      console.log(res)
    } catch (e) {
      console.log(e)
    }
  }
}

export const createMilestone = (data) => {
  return async (dispatch) => {
    try {
      const res = await api.post('service/1/milestone/', data, {
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`,
        },
      })
      console.log(res)
    } catch (e) {
      console.log(e)
    }
  }
}

export const updateTitle = (title) => {
  return {
    type: UPDATE_TITLE,
    value: title,
  }
}

export const updateDescription = (description) => {
  return {
    type: UPDATE_DESCRIPTION,
    value: description,
  }
}

export const setAudioOnly = () => {
  return {
    type: SET_AUDIO_ONLY,
  }
}

export const setVideoAndAudio = () => {
  return {
    type: SET_VIDEO_AND_AUDIO,
  }
}

export const setServiceFrequency = (value) => {
  return {
    type: SET_SERVICE_FREQUENCY,
    value: value,
  }
}

export const setDaysOfWeek = (value) => {
  return {
    type: SET_WEEK_DAYS,
    value: value,
  }
}

export const setStartHour = (value) => {
  return {
    type: START_HOUR,
    value: value,
  }
}

export const setStartTimeStamp = (value) => {
  return {
    type: SET_START_TIME_STAMP,
    value: value,
  }
}

export const setStartMin = (value) => {
  return {
    type: START_MIN,
    value: value,
  }
}

export const setDuration = (value) => {
  return {
    type: SET_DURATION,
    value: value,
  }
}

export const setFees = (value) => {
  return {
    type: SET_FEES,
    value: value,
  }
}

export const setMediaType = (value) => {
  return {
    type: SET_MEDIA_TYPE,
    value: value,
  }
}
