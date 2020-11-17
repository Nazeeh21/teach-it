import Axios from 'axios'
import api from '../../api'
import { CHANGE_USER_TYPE, FETCH_SEARCH_RESULTS, FETCH_SERVICES, FETCH_USER_SERVICES, FETCH_VIEW_SERVICE, LOGOUT, SET_CURRENT_PROFILE } from '../actionTypes'

export const changeUserType = (newType) => {
  return {
    type: CHANGE_USER_TYPE,
    newType
  }
}

export const fetchServices = () => {
  return async (dispatch) => {
    try {
      const res = await api.get('service/', {
        headers: {
          'Authorization': `Token ${localStorage.getItem('token')}`,
          'X-Profile-ID': localStorage.getItem('currentProfile')
        }
      })
  
      // console.log('Fetch service response', res)
  
      dispatch({
        type: FETCH_SERVICES,
        services: res.data.results
      })
    } catch (e) {
      console.log(e)
    }
  }
}

export const fetchUserServices = () => {
  return async (dispatch) => {
    try {
      const res = await api.get('seeker/service/', {
        headers: {
          'Authorization': `Token ${localStorage.getItem('token')}`,
          'X-Profile-ID': localStorage.getItem('currentProfile')
        }
      })
  
      // console.log('Fetch service response', res)
  
      dispatch({
        type: FETCH_USER_SERVICES,
        services: res.data.results
      })
    } catch (e) {
      console.log(e)
    }
  }
}

export const fetchViewService = (id) => {
  return async dispatch => {
    try {
      if (id) {
        const res = await api.get(`/service/${id}/`, {
          headers: {
            Authorization: `Token ${localStorage.getItem('token')}`,
            'X-Profile-ID': localStorage.getItem('currentProfile')
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
      // console.log('Profiles', res.data)
      if (res.data.profiles.length > 0) {
        // console.log(res.data.profiles[0].id)
        dispatch({
          type: SET_CURRENT_PROFILE,
          id: res.data.profiles[0].id
        })
      }
    } catch (e) {
      console.log(e)
    }
  }
}

export const switchProfile = (id) => {
  console.log(id)
  return {
    type: SET_CURRENT_PROFILE,
    id: id
  }
}

export const logout = () => {
  console.log('logout called')
  return {
    type: LOGOUT
  }
}

export const fetchSearchResults = (payload) => {
  console.log('Recieved payload', payload)

  return async dispatch => {
    try {
      const res = await api.get(`/service/search/`, {
        params: {
          ...payload
        },
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`,
        }
      })

      console.log('Fetched search results', res.data)

      dispatch({
        type: FETCH_SEARCH_RESULTS,
        results: res.data.results
      })
    } catch (e) {
      console.log('Error while fetching search results', e)
    }
  }
}