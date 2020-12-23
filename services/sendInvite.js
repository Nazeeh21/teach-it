import api from '../api'

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
