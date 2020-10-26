import { EXPERT } from '../../constants'

const { CHANGE_USER_TYPE, FETCH_SERVICES, FETCH_VIEW_SERVICE, SET_CURRENT_PROFILE } = require('../actionTypes')

const initialState = {
  userType: EXPERT,
  services: [],
  viewServiceData: null,
  currentProfile: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USER_TYPE:
      return {
        ...state,
        userType: action.newType
      }
    case FETCH_SERVICES:
      return {
        ...state,
        services: [...action.services]
      }
    case FETCH_VIEW_SERVICE:
      return {
        ...state,
        viewServiceData: action.data
      }
    case SET_CURRENT_PROFILE:
      localStorage.setItem('currentProfile', action.id)
      return {
        ...state,
        currentProfile: action.id
      }
    default:
      return state
  }
}

export default reducer