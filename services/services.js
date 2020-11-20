import api from '../api'

export const getProviderDetailsFromServiceId = async (serviceId) => {
  try {
    // Fetch service details and extract providerId
    const serviceDetails = await api.get(`service/${serviceId}/`, {
      headers: {
        Authorization: `Token ${localStorage.getItem('token')}`,
        'X-Profile-ID': localStorage.getItem('currentProfile'),
      },
    })

    console.log(serviceDetails)

    const providerId = serviceDetails.data.provider

    // Get provider details
    const providerDetails = await api.get(`provider/${providerId}/`, {
      headers: {
        Authorization: `Token ${localStorage.getItem('token')}`,
        'X-Profile-ID': localStorage.getItem('currentProfile'),
      },
    })

    console.log('Provider details', providerDetails)
    return providerDetails.data
  } catch (e) {
    console.log('Error while fetching provider details', e)
    return null
  }
}
