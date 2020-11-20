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

export const isProvider = async () => {
  // send get request to '/provider' and check if the current profile object has a field named provider
  // if exitsts then return true else return false
  try {
    const res = await api.get('user/', {
      headers: {
        Authorization: `Token ${localStorage.getItem('token')}`,
        'X-Profile-ID': localStorage.getItem('currentProfile'),
      },
    })
    // console.log('isProvider', res.data)
    const currentProfileId = localStorage.getItem('currentProfile')
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

export const isSeeker = async () => {
  try {
    const res = await api.get('user/', {
      headers: {
        Authorization: `Token ${localStorage.getItem('token')}`,
        'X-Profile-ID': localStorage.getItem('currentProfile'),
      },
    })
    // console.log('isSeeker', res.data)
    const currentProfileId = localStorage.getItem('currentProfile')
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

export const registerProvider = async (name) => {
  try {
    const res = await api.post(
      'provider/',
      {
        name: name,
        country: 'India',
        detail: 'Details',
      },
      {
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`,
          'X-Profile-ID': localStorage.getItem('currentProfile'),
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

export const registerSeeker = async (name) => {
  try {
    const res = await api.post(
      'seeker/',
      {
        name: name,
      },
      {
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`,
          'X-Profile-ID': localStorage.getItem('currentProfile'),
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
