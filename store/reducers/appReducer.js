import { EXPERT, LEARNER } from '../../constants'

const {
  CHANGE_USER_TYPE,
  FETCH_SERVICES,
  FETCH_VIEW_SERVICE,
  SET_CURRENT_PROFILE,
  LOGOUT,
  FETCH_SEARCH_RESULTS,
  FETCH_USER_SERVICES,
  SET_PROVIDER_ID,
} = require('../actionTypes')

const initialState = {
  // userType: LEARNER,
  userType: LEARNER,
  services: [],
  viewServiceData: null,
  currentProfile: null,
  searchResults: [],
  userServices: [],
  nextServicePageUrl: null,
  previousPageURL: null,
  providerId: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USER_TYPE:
      return {
        ...state,
        userType: action.newType,
      }
    case FETCH_SERVICES:
      const newService = [...state.services, ...action.services]

      return {
        ...state,
        services: newService,
        nextServicePageUrl: action.nextURL,
        previousPageURL: action.previousURL,
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
    case SET_PROVIDER_ID:
      return {
        ...state,
        providerId: action.id,
      }
    default:
      return state
  }
}

export default reducer
