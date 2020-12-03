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

export const createService = async (
  createServiceData,
  createMilestoneData,
  imageData
) => {
  try {
    const serviceData = await api.post('service/', createServiceData, {
      headers: {
        Authorization: `Token ${localStorage.getItem('token')}`,
        // Authorization: 'Token 4665448e0fc9398c6e373dc6a51060b178595bdb',
        'X-Profile-ID': window.localStorage.getItem('currentProfile'),
      },
    })
    console.log(serviceData)
    createMilestone(serviceData.data.pk, createMilestoneData)
    uploadImages(serviceData.data.pk, imageData)
    return true
  } catch (e) {
    console.log(e)
    return false
  }
}

const createMilestone = (pk, milestoneData) => {
  try {
    const milestoneRes = milestoneData.map(async (milestone) => {
      const res = await api.post(
        `service/${pk}/milestone/`,
        {
          description: milestone.description,
          sessions_number: milestone.sessions_number,
        },
        {
          headers: {
            Authorization: `Token ${localStorage.getItem('token')}`,
            'X-Profile-ID': localStorage.getItem('currentProfile'),
          },
        }
      )
      // console.log(milestoneData)
    })
    return true
  } catch (e) {
    console.log(e)
    return false
  }
}

const uploadImages = (pk, imageData) => {
  try {
    const uploadImageRes = imageData.map(async (data) => {
      console.log('uploading Media', data.forUpload)
      const res = await api.post(
        `service/${pk}/media/`,
        { doc: data.forUpload },
        {
          headers: {
            'content-type': 'multipart/form-data',
            // "Content-Type": "multipart/form-data",
            Authorization: `Token ${localStorage.getItem('token')}`,
            'X-Profile-ID': localStorage.getItem('currentProfile'),
          },
        }
      )
      console.log('UploadImageRes', res.data)
    })
  } catch (error) {
    console.log(error)
  }
}
