import api from '../../api'
import { SAVE_PROFILE_DATA, UPDATE_PROFILE_DATA } from '../actionTypes'

export const saveProfile = (data) => {
  return async (dispatch) => {
    const id = localStorage.getItem('currentProfile')
    try {
      const res = await api.put(
        `user/profile/${id}/`,
        { ...data, id: id },
        {
          headers: {
            Authorization: `Token ${localStorage.getItem('token')}`,
            'X-Profile-ID': id,
          },
        }
      )
      console.log(res.data)
      dispatch({
        type: SAVE_PROFILE_DATA,
        data: res.data,
      })
    } catch (error) {
      console.log(error)
    }
  }
}
