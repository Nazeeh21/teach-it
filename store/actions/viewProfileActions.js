import api from '../../api'

export const viewProfile = (type, id) => {
  return async (dispatch) => {
    try {
      if (id) {
        const res = await api.get(`${type}/${id}/`, {
          headers: {
            Authorization: `Token ${localStorage.getItem('token')}`,
          },
        })
        console.log(res.data)
        dispatch({
          type: type,
          data: res.data,
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
}
