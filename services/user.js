import api from '../api'

export const updateEmail = async (email, token, profileId) => {
  try {
    const res = await api.put(
      '/user/auth/email/',
      {
        email,
      },
      {
        headers: {
          Authorization: `Token ${token}`,
          'X-Profile-ID': profileId,
        },
      }
    )

    console.log('Sent new email', res)
    console.log('OTP', res.data.otp)

    return true
  } catch (e) {
    console.log('Error while updating email', e)
    return false
  }
}

export const verifyEmail = async (otp, token, profileId) => {
  try {
    const res = await api.post(
      '/user/auth/email/verify/',
      {
        otp,
      },
      {
        headers: {
          Authorization: `Token ${token}`,
          'X-Profile-ID': profileId,
        },
      }
    )

    console.log('Verified otp', res)

    return true
  } catch (e) {
    console.log('Error while sending otp', e)
    return false
  }
}
