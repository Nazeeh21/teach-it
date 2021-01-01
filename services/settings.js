import api from '../api'

export const fetchProfileData = async (token, currentProfileId) => {
  try {
    const res = await api.get('user/', {
      headers: {
        Authorization: `Token ${token}`,
        'X-Profile-ID': currentProfileId,
      },
    })
    return res.data.profiles.filter((profile) => profile.id == currentProfileId)
  } catch (e) {
    console.log(e)
    return e
  }
}

export const fetchMilestone = async (id, token, currentProfileId) => {
  try {
    const res = await api.get(`service/${id}/milestone/`, {
      headers: {
        Authorization: `Token ${token}`,
        'X-Profile-ID': currentProfileId,
      },
    })
    console.log('fetchMilstone ', res.data)
    return res.data
  } catch (e) {
    console.log(e)
  }
}
