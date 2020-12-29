import api from '../api'

export const fetchProviderProfile = async (token, pk, profileId) => {
  try {
    const res = await api.get(`/provider/${pk}/`, {
      headers: {
        Authorization: `Token ${token}`,
        'X-Profile-ID': profileId,
      },
    })
    console.log(res)
    return res.data
  } catch (e) {
    console.log(e)
  }
}
