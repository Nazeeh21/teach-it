import api from '../api'

export const getProviderDetailsFromServiceId = async (
  serviceId,
  token,
  currentProfileId
) => {
  try {
    // Fetch service details and extract providerId
    const serviceDetails = await api.get(`service/${serviceId}/`, {
      headers: {
        Authorization: `Token ${token}`,
        'X-Profile-ID': currentProfileId,
      },
    })

    console.log(serviceDetails)

    const providerId = serviceDetails.data.provider

    // Get provider details
    const providerDetails = await api.get(`provider/${providerId}/`, {
      headers: {
        Authorization: `Token ${token}`,
        'X-Profile-ID': currentProfileId,
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
  imageData,
  profileId,
  token
) => {
  try {
    const serviceData = await api.post('service/', createServiceData, {
      headers: {
        Authorization: `Token ${token}`,
        'X-Profile-ID': profileId,
      },
    })
    console.log(serviceData)
    await createMilestone(
      serviceData.data.pk,
      createMilestoneData,
      profileId,
      token
    )
    await uploadImages(serviceData.data.pk, imageData, profileId, token)
    return true
  } catch (e) {
    console.log(e)
    return false
  }
}

const createMilestone = async (pk, milestoneData, profileId, token) => {
  try {
    const milestoneRes = await milestoneData.map(async (milestone) => {
      const res = await api.post(
        `service/${pk}/milestone/`,
        {
          description: milestone.description,
          sessions_number: milestone.sessions_number,
        },
        {
          headers: {
            Authorization: `Token ${token}`,
            'X-Profile-ID': profileId,
          },
        }
      )
    })
    return true
  } catch (e) {
    console.log(e)
    return false
  }
}

const uploadImages = async (servicePk, files, profileId, token) => {
  try {
    await files.map(
      async (file) =>
        await uploadImage(servicePk, file.forUpload, profileId, token)
    )
    return true
  } catch (e) {
    console.log(e)
    return false
  }
}

export const uploadImage = async (servicePk, data, profileId, token) => {
  try {
    const formData = new FormData()
    formData.append('doc', data)

    console.log('File', data)

    const imgUpload = await api.post(`service/${servicePk}/media/`, formData, {
      headers: {
        Authorization: `Token ${token}`,
        'X-Profile-ID': profileId,
        'content-type': 'multipart/form-data',
      },
    })

    console.log('Uploaded image successfully', imgUpload)
    return true
  } catch (e) {
    console.log('Error while uploading image', e)
    return false
  }
}

export const updateService = async (
  servicePk,
  createServiceData,
  createMilestoneData,
  imageData,
  profileId,
  token
) => {
  try {
    const serviceData = await api.put(
      `service/${servicePk}/`,
      createServiceData,
      {
        headers: {
          Authorization: `Token ${token}`,
          'X-Profile-ID': profileId,
        },
      }
    )
    console.log(serviceData)
    // await createMilestone(
    //   serviceData.data.pk,
    //   createMilestoneData,
    //   profileId,
    //   token
    // )
    // await uploadImages(serviceData.data.pk, imageData, profileId, token)
    return true
  } catch (e) {
    console.log(e)
    return false
  }
}
