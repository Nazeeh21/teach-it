import api from '../../api'
import axios from 'axios'
import {
  CHANGE_USER_TYPE,
  FETCH_PROVIDER_SERVICES,
  FETCH_SEARCH_RESULTS,
  FETCH_SERVICES,
  FETCH_USER_SERVICES,
  FETCH_VIEW_SERVICE,
  LOGOUT,
  SET_CURRENT_PROFILE,
  SET_PROVIDER_ID,
} from '../actionTypes'

export const changeUserType = (newType) => {
  return {
    type: CHANGE_USER_TYPE,
    newType,
  }
}

export const fetchProviderService = (
  providerId,
  token,
  currentProfileId,
  nextPageUrl = null
) => {
  return async (dispatch) => {
    try {
      var flag = false

      while (!flag) {
        try {
          if (!nextPageUrl) {
            var res = await api.get(`provider/${providerId}/service/`, {
              headers: {
                Authorization: `Token ${token}`,
                'X-Profile-ID': currentProfileId,
              },
            })
          } else {
            var res = await axios.get(nextPageUrl, {
              headers: {
                Authorization: `Token ${token}`,
                'X-Profile-ID': currentProfileId,
              },
            })
          }
          flag = true
          console.log('Fetch Provider Service ', res.data)
        } catch (e) {
          console.log(e)
        }
      }
    } catch (e) {
      console.log(e)
    }
    dispatch({
      type: FETCH_PROVIDER_SERVICES,
      services: res.data.results,
      nextURL: res.data.next,
      // previousURL: res.data.previous,
      initialFetch: true,
    })
  }
}

export const fetchServices = (nextPageUrl = null) => {
  return async (dispatch) => {
    try {
      var flag = 0

      while (flag === 0) {
        try {
          if (!nextPageUrl) {
            var res = await api.get('service/', {
              headers: {
                Authorization: `Token ${localStorage.getItem('token')}`,
                'X-Profile-ID': localStorage.getItem('currentProfile'),
              },
            })
          } else {
            var res = await axios.get(nextPageUrl, {
              headers: {
                Authorization: `Token ${localStorage.getItem('token')}`,
                'X-Profile-ID': localStorage.getItem('currentProfile'),
              },
            })
          }

          console.log('Fetch service response', res.data)

          flag = 1
        } catch (e) {
          console.log(e)
        }
      }
    } catch (err) {
      console.log(err)
    }

    dispatch({
      type: FETCH_SERVICES,
      services: res.data.results,
      nextURL: res.data.next,
      // previousURL: res.data.previous,
      initialFetch: true,
    })
  }
}

export const fetchUserServices = (nextPageUrl = null) => {
  return async (dispatch) => {
    try {
      if (!nextPageUrl) {
        var res = await api.get('seeker/service/', {
          headers: {
            Authorization: `Token ${localStorage.getItem('token')}`,
            'X-Profile-ID': localStorage.getItem('currentProfile'),
          },
        })
      } else {
        var res = await axios.get(nextPageUrl, {
          headers: {
            Authorization: `Token ${localStorage.getItem('token')}`,
            'X-Profile-ID': localStorage.getItem('currentProfile'),
          },
        })
      }

      console.log('Fetch User service response', res.data)

      dispatch({
        type: FETCH_USER_SERVICES,
        services: res.data.results,
        nextURL: res.data.next,
        // previousURL: res.data.previous,
        initialFetch: true,
      })
    } catch (e) {
      console.log(e)
    }
  }
}

export const fetchViewService = (id) => {
  return async (dispatch) => {
    try {
      if (id) {
        const res = await api.get(`/service/${id}/`, {
          headers: {
            Authorization: `Token ${localStorage.getItem('token')}`,
            'X-Profile-ID': localStorage.getItem('currentProfile'),
          },
        })
        console.log('Fetch View Service response', res.data)
        dispatch({
          type: FETCH_VIEW_SERVICE,
          data: res.data,
        })
      }
    } catch (e) {
      console.log(e)
    }
  }
}

export const fetchProfiles = () => {
  return async (dispatch) => {
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
          id: res.data.profiles[0].id,
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
    id: id,
  }
}

export const logout = () => {
  console.log('logout called')
  return {
    type: LOGOUT,
  }
}

export const fetchSearchResults = (payload) => {
  console.log('Recieved payload', payload)

  return async (dispatch) => {
    try {
      const res = await api.get(`/service/search/`, {
        params: {
          ...payload,
        },
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`,
        },
      })

      console.log('Fetched search results', res.data)

      dispatch({
        type: FETCH_SEARCH_RESULTS,
        results: res.data.results,
        nextURL: res.data.next,
        initialFetch: true,
      })
    } catch (e) {
      console.log('Error while fetching search results', e)
    }
  }
}

export const setProviderId = (id) => {
  return {
    type: SET_PROVIDER_ID,
    id,
  }
}
