import api from '../../api'
import { CHANGE_USER_TYPE, FETCH_SERVICES, FETCH_VIEW_SERVICE } from '../actionTypes'

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

export const fetchViewService = (id) => {
  return async dispatch => {
    try {
      if (id) {
        const res = await api.get(`/service/${id}/`, {
          headers: {
            Authorization: `Token ${localStorage.getItem('token')}`,
          },
        })
        console.log('Fetch View Service response', res.data)
        dispatch({
          type: FETCH_VIEW_SERVICE,
          data: res.data
        })
      }
    } catch (e) {
      console.log(e)
    }
  }
} 