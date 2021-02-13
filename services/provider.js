import api from '../api'

export const fetchProviderProfile = async (token, pk, profileId) => {
  try {
    const res = await api.get(`/provider/${pk}/`, {
      headers: {
        Authorization: `Token ${token}`,
        'X-Profile-ID': profileId,
      },
    })
    console.log('Fetch provider Profile', res)
    return res.data
  } catch (e) {
    console.log(e)
  }
}
