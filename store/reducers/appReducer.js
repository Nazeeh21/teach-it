import { EXPERT } from '../../constants'

const { CHANGE_USER_TYPE, FETCH_SERVICES } = require('../actionTypes')

const initialState = {
  userType: EXPERT,
  services: []
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
    default:
      return state
  }
}

export default reducer