import api from '../../api'
import { CHANGE_USER_TYPE, FETCH_SERVICES, FETCH_VIEW_SERVICE, SET_CURRENT_PROFILE } from '../actionTypes'

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
        'Authorization': `Token ${localStorage.getItem('token')}`,
        'X-Profile-ID': 4
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

export const fetchProfiles = () => {
  return async dispatch => {
    try {
      const res = await api.get('/user/', {
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`,
        },
      })
      console.log('Profiles', res.data)
      if (res.data.profiles.length > 0) {
        dispatch({
          type: SET_CURRENT_PROFILE,
          data: res.data.profiles[0].id
        })
      }
    } catch (e) {
      console.log(e)
    }
  }
}