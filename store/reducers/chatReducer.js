import { SET_ACTIVE_CHAT_ID } from '../actionTypes'

const initialState = {
  activeChatId: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_CHAT_ID:
      return {
        ...state,
        activeChatId: action.id,
      }

    default:
      return state
  }
}

export default reducer
