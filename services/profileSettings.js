import api from '../api'

export const fetchCertificates = async (token, currentProfileId) => {
  try {
    const res = await api.get('provider/', {
      headers: {
        Authorization: `Token ${token}`,
        'X-Profile-ID': currentProfileId,
      },
    })

    console.log('Fetch Certificates', res.data)
    return res.data.docs
  } catch (error) {
    console.log('Error in fetching Certificates', error)
  }
}
