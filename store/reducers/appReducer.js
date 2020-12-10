import { EXPERT, LEARNER } from '../../constants'

const {
  CHANGE_USER_TYPE,
  FETCH_SERVICES,
  FETCH_VIEW_SERVICE,
  SET_CURRENT_PROFILE,
  LOGOUT,
  FETCH_SEARCH_RESULTS,
  FETCH_USER_SERVICES,
} = require('../actionTypes')

const initialState = {
  // userType: LEARNER,
  userType: EXPERT,
  services: [],
  viewServiceData: null,
  currentProfile: null,
  searchResults: [],
  userServices: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USER_TYPE:
      return {
        ...state,
        userType: action.newType,
      }
    case FETCH_SERVICES:
      return {
        ...state,
        services: [...action.services],
      }
    case FETCH_USER_SERVICES:
      return {
        ...state,
        userServices: [...action.services],
      }
    case FETCH_VIEW_SERVICE:
      return {
        ...state,
        viewServiceData: action.data,
      }
    case SET_CURRENT_PROFILE:
      localStorage.setItem('currentProfile', action.id)
      return {
        ...state,
        currentProfile: action.id,
      }
    case LOGOUT:
      localStorage.removeItem('currentProfile')
      localStorage.removeItem('token')
      return {
        ...state,
        currentProfile: null,
      }
    case FETCH_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.results,
      }
    default:
      return state
  }
}

export default reducer
