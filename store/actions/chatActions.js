import { SET_ACTIVE_CHAT_ID } from '../actionTypes'

export const setActiveChatId = (id) => {
  return {
    type: SET_ACTIVE_CHAT_ID,
    id,
  }
}
