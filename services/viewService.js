import api from '../api'

export const fetchProviderData = async (providerPk) => {
  try {
    const res = await api.get(`provider/${providerPk}/`, {
      headers: {
        Authorization: `Token ${localStorage.getItem('token')}`,
        'X-Profile-ID': localStorage.getItem('currentProfile')
      }
    })
  
    console.log('Fetched provider data', res.data)
  
    return res.data
  } catch (e) {
    console.log('Error while fetching provider data', e)
    return null
  }
}