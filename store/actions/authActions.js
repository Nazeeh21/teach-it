import api from '../../api'
import { AUTH_RESET, AUTH_START } from '../actionTypes'

export const auth = (data, medium) => {
  return async dispatch => {
    dispatch(startAuth(data, medium))

    const res = await api.post(`auth/${medium}`, {
      [medium]: data.id
    })

    console.log(res)
  }
}

export const startAuth = (data, medium) => {
  return {
    type: AUTH_START,
    medium,
    data,
  }
}

export const resetAuth = () => {
  return {
    type: AUTH_RESET
  }
}