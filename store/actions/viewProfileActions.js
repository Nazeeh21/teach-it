import api from '../../api'

export const viewProfile = (type, id, token, currentProfileId) => {
  return async (dispatch) => {
    try {
      if (id) {
        const res = await api.get(`${type}/${id}/`, {
          headers: {
            Authorization: `Token ${token}`,
            'X-Profile-ID': currentProfileId,
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
