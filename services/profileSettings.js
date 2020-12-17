import api from '../api'

export const fetchCertificates = async () => {
  try {
    const res = await api.get('provider/', {
      headers: {
        Authorization: `Token ${localStorage.getItem('token')}`,
        'X-Profile-ID': window.localStorage.getItem('currentProfile'),
      },
    })

    console.log('Fetch Certificates', res.data)
    return res.data.docs
  } catch (error) {
    console.log('Error in fetching Certificates', error)
  }
}
