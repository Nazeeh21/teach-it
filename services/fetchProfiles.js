import api from "../api"

export const fetchAllProfiles = async () => {
  try {
    const res = await api.get('user/', {
      headers: {
        Authorization: `Token ${localStorage.getItem('token')}`,
        'X-Profile-ID': window.localStorage.getItem('currentProfile')
      }
    })
    // console.log('[FETCH_PROFILES] ', res.data.profiles)
    return res.data.profiles
  } catch (e) {
    console.log(e)
  }
}