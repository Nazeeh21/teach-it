import api from '../../api'
import {
} from '../actionTypes'

export const createService = (createServiceData) => {
  return async (dispatch) => {
    try {
      const res = await api.post('service/', createServiceData, {
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`,
          // Authorization: 'Token 4665448e0fc9398c6e373dc6a51060b178595bdb',
          'X-Profile-ID': window.localStorage.getItem('currentProfile')
        },
      })
      console.log(res)
    } catch (e) {
      console.log(e)
    }
  }
}