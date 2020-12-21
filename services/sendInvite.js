import api from '../api'

export const sendInvite = async (name, email, mobile) => {
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
          Authorization: `Token ${localStorage.getItem('token')}`,
          'X-Profile-ID': localStorage.getItem('currentProfile'),
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
