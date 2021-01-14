import api from '../api'

export const sendReview = async (
  servicePk,
  rating,
  comment,
  token,
  currentProfileId
) => {
  try {
    const res = await api.post(
      `/service/${servicePk}/review/`,
      {
        rating,
        comment,
      },
      {
        headers: {
          Authorization: `Token ${token}`,
          'X-Profile-ID': currentProfileId,
        },
      }
    )
    console.log('Send Review response', res.data)
    return res.data
  } catch (e) {
    console.log('Error in sendReview', e)
  }
}

export const sendInvite = async (
  name,
  email,
  mobile,
  token,
  currentProfileId
) => {
  try {
    const res = await api.post(
      '/invites/user/',
      {
        fullname: name,
        email: email,
        mobile: mobile,
      },
      {
        headers: {
          Authorization: `Token ${token}`,
          'X-Profile-ID': currentProfileId,
        },
      }
    )

    console.log(res)
    return true
  } catch (e) {
    console.log(e)
    return false
  }
}

export const sendBasicProviderInvite = async (
  fullname,
  email,
  mobile,
  message,
  category,
  token,
  currentProfileId
) => {
  try {
    const res = await api.post(
      '/invites/basic/',
      {
        fullname,
        email,
        mobile,
        message,
        category,
      },
      {
        headers: {
          Authorization: `Token ${token}`,
          'X-Profile-ID': currentProfileId,
        },
      }
    )
    console.log('Basic Invite sent success', res.data)
    return res.data
  } catch (e) {
    console.log('Error in sending basic provider invite', e)
  }
}

export const sendAdvanceProviderInvite = async (
  fullname,
  email,
  mobile,
  message,
  category,
  title,
  fee,
  date,
  time,
  description,
  token,
  currentProfileId
) => {
  try {
    const res = await api.post(
      '/invites/advance/',
      {
        fullname,
        email,
        mobile,
        message,
        category,
        title,
        fee,
        date,
        time,
        description,
      },
      {
        headers: {
          Authorization: `Token ${token}`,
          'X-Profile-ID': currentProfileId,
        },
      }
    )
    console.log('Advanced Invite sent success', res.data)
    return res.data
  } catch (e) {
    console.log('Error in sending basic provider invite', e)
  }
}
