import api from '../../api'
import { CHANGE_USER_TYPE, FETCH_SERVICES } from '../actionTypes'

export const changeUserType = (newType) => {
  return {
    type: CHANGE_USER_TYPE,
    newType
  }
}

export const fetchServices = () => {
  return async (dispatch) => {
    const res = await api.get('service/', {
      headers: {
        'Authorization': `Token ${localStorage.getItem('token')}`
      }
    })

    console.log('Fetch service response', res)

    dispatch({
      type: FETCH_SERVICES,
      services: res.data.results
    })
  }
}