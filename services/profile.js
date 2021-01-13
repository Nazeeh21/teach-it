import api from '../api'

export const fetchAllProfiles = async (logout, token, profileId) => {
  try {
    const res = await api.get('user/', {
      headers: {
        Authorization: `Token ${token}`,
        'X-Profile-ID': profileId,
      },
    })

    const { data } = res

    return data.profiles
  } catch (e) {
    console.log('fetchAllProfiles', e)
    logout()
    return false
  }
}

export const fetchCurrentProfile = async (token, profileId) => {
  try {
    const res = await api.get('user/', {
      headers: {
        Authorization: `Token ${token}`,
        'X-Profile-ID': profileId,
      },
    })

    const { data } = res
    console.log('Logging current profile', data.profiles)

    return data.profiles.filter((profile) => profile.id == profileId)
  } catch (e) {
    console.log('fetchCurrentProfile', e)
    logout()
    return false
  }
}

// export const fetchAllProfiles = async (logout, token, profileId) => {
//   try {
//     var flag = 0
//     const token = localStorage.getItem('token')
//     const currentProfileId = localStorage.getItem('currentProfile')

//     while (flag === 0 && token !== null && currentProfileId !== null) {
//       try {
//         var res = await api.get('user/', {
//           headers: {
//             Authorization: `Token ${localStorage.getItem('token')}`,
//             'X-Profile-ID': localStorage.getItem('currentProfile'),
//           },
//         })
//         // console.log('[FETCH_PROFILES] ', res.data.profiles)

//         if (res.data.detail == 'Invalid token.' || res.status === 401) {
//           flag = 1
//           return logout()
//         }

//         if (res.status === 200) {
//           flag = 1
//         }
//       } catch (e) {
//         console.log(e)
//         return logout()
//       }
//     }

//     return res.data.profiles
//   } catch (e) {
//     console.log(e)
//     return null
//   }
// }

export const isProvider = async (token, currentProfileId) => {
  // send get request to '/provider' and check if the current profile object has a field named provider
  // if exitsts then return true else return false
  try {
    const res = await api.get('user/', {
      headers: {
        Authorization: `Token ${token}`,
        'X-Profile-ID': currentProfileId,
      },
    })
    // console.log('isProvider', res.data)
    // const currentProfileId = localStorage.getItem('currentProfile')
    let currentProfileData = res.data.profiles.filter(
      (profile) => profile.id == currentProfileId
    )
    console.log('isProvider in profile.js', currentProfileData)

    return {
      name: currentProfileData[0].name,
      isProvider: currentProfileData[0].provider !== null,
    }
  } catch (e) {
    console.log(e)
  }
}

export const isSeeker = async (token, currentProfileId) => {
  try {
    const res = await api.get('user/', {
      headers: {
        Authorization: `Token ${token}`,
        'X-Profile-ID': currentProfileId,
      },
    })
    // console.log('isSeeker', res.data)
    // const currentProfileId = localStorage.getItem('currentProfile')
    let currentProfileData = res.data.profiles.filter(
      (profile) => profile.id == currentProfileId
    )
    console.log('isSeeker in profile.js', currentProfileData)

    return {
      name: currentProfileData[0].name,
      isSeeker: currentProfileData[0].seeker !== null,
    }
  } catch (e) {
    console.log(e)
  }
}

export const registerProvider = async (name, token, currentProfileId) => {
  try {
    const res = await api.post(
      'provider/',
      {
        name: name !== null ? name : 'test',
        country: 'India',
        detail: 'Details',
      },
      {
        headers: {
          Authorization: `Token ${token}`,
          'X-Profile-ID': currentProfileId,
        },
      }
    )

    console.log(res)
    return res.data
  } catch (e) {
    // console.log(e)
    return e
  }
}

export const registerSeeker = async (name, token, currentProfileId) => {
  try {
    const res = await api.post(
      'seeker/',
      {
        name: name !== null ? name : 'test',
      },
      {
        headers: {
          Authorization: `Token ${token}`,
          'X-Profile-ID': currentProfileId,
        },
      }
    )

    console.log(res)
    return res.data
  } catch (e) {
    // console.log(e)
    return e
  }
}

export const fetchOtherProfiles = async (token, profileId) => {
  try {
    const res = await api.get('user/', {
      headers: {
        Authorization: `Token ${token}`,
        'X-Profile-ID': profileId,
      },
    })

    console.log('Profiles', res.data)

    const { profiles } = res.data

    return {
      profiles,
    }
  } catch (e) {
    console.log(e)
    return null
  }
}

export const getProviderProfile = async (
  providerId,
  currentProfileId,
  token
) => {
  try {
    console.log('Received providerId', providerId)
    const profileData = await api.get(`provider/${providerId}/`, {
      headers: {
        Authorization: `Token ${token}`,
        'X-Profile-ID': currentProfileId,
      },
    })

    const { data } = profileData

    console.log('Provider profile data', data)

    return data
  } catch (e) {
    console.log('Error in getProviderProfile', e)
    return null
  }
}
