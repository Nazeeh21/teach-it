import api from '../api'

export const fetchProviderData = async (
  providerPk,
  token,
  currentProfileId
) => {
  try {
    const res = await api.get(`provider/${providerPk}/`, {
      headers: {
        Authorization: `Token ${token}`,
        'X-Profile-ID': currentProfileId,
      },
    })

    console.log('Fetched provider data', res.data)

    return res.data
  } catch (e) {
    console.log('Error while fetching provider data', e)
    return null
  }
}
