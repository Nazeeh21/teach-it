import api from "../../api"
import { SAVE_PROFILE_DATA, UPDATE_PROFILE_DATA } from "../actionTypes"

// export const fetchProfileData = () => {
//   return async dispatch => {
//     try {
//       const res = await api.get('user/', {
//         headers: {
//           Authorization: `Token ${localStorage.getItem('token')}`
//         }
//       })
//       console.log(res.data)
//       dispatch({
//         type: SAVE_PROFILE_DATA,
//         data: res.data
//       })
//     } catch (error) {
//       console.log(error)
//     }
//   }
// }

export const saveProfile = (data) => {
  return async dispatch => {
    try {
      const res = await api.put('user/', data, {
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`,
        }
      })
      console.log(res.data)
      dispatch({
        type: SAVE_PROFILE_DATA,
        data: res.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

// export const updateData = (field, value) => {
//   return {
//     type: UPDATE_PROFILE_DATA,
//     data : {
//       field: field,
//       value: value
//     }
//   }
// }