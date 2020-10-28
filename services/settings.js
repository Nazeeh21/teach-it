import api from '../api'

export const fetchProfileData = async () => {
  try {
    const res = await api.get('user/', {
      headers: {
        Authorization: `Token ${localStorage.getItem('token')}`,
        'X-Profile-ID': window.localStorage.getItem('currentProfile'),
      },
    })
    return res.data.profiles.filter(profile => profile.id == window.localStorage.getItem('currentProfile'))
  } catch (e) {
    console.log(e)
    return e
  }
}

export const fetchMilestone = async (id) => {
  try {
    const res = await api.get(`service/${id}/milestone/`, {
      headers: {
        Authorization: `Token ${localStorage.getItem('token')}`,
        'X-Profile-ID': window.localStorage.getItem('currentProfile'),
      },
    })
    console.log('fetchMilstone ', res.data)
    return res.data
  } catch (e) {
    console.log(e)
  }
}