import { EXPERT } from '../../constants'

const { CHANGE_USER_TYPE } = require('../actionTypes')

const initialState = {
  userType: EXPERT
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USER_TYPE:
      return {
        ...state,
        userType: action.newType
      }
    default:
      return state
  }
}

export default reducer