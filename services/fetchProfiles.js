import api from '../api'

export const fetchAllProfiles = async () => {
  try {
    var flag = 0

    while (flag === 0) {
      try {
        var res = await api.get('user/', {
          headers: {
            Authorization: `Token ${localStorage.getItem('token')}`,
            'X-Profile-ID': localStorage.getItem('currentProfile'),
          },
        })
        // console.log('[FETCH_PROFILES] ', res.data.profiles)

        if (res.status === 200) {
          flag = 1
        }
      } catch (e) {
        console.log(e)
      }
    }

    return res.data.profiles
  } catch (e) {
    console.log(e)
    return null
  }
}
