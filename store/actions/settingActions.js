import api from "../../api"

export const saveProfile = (data) => {
  return async dispatch => {
    try {
      const res = await api.put('user/', data, {
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`,
        }
      })
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }
}