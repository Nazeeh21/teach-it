import api from '../../api'
import { SAVE_PROFILE_DATA, UPDATE_PROFILE_DATA } from '../actionTypes'

export const uploadAvatar = async (avatarData) => {
  try {
    const formData = new FormData()
    formData.append('media', avatarData)
    // console.log('In uploadAvatar loggin avatarData ', avatarData)
    // console.log('In uploadAvatar loggin formData ', formData)

    const res = await api.post('files/', formData, {
      headers: {
        Authorization: `Token ${localStorage.getItem('token')}`,
        'X-Profile-ID': localStorage.getItem('currentProfile'),
        'content-type': 'multipart/form-data',
      },
    })
    console.log('Upload Avatar respone', res.data)
    return res.data
  } catch (e) {
    console.log(e)
  }
}

export const saveProfile = (data, certificateData) => {
  // console.log('In saveProfile', data)

  return async (dispatch) => {
    const id = localStorage.getItem('currentProfile')
    try {
      const res = await api.put(
        `user/profile/${id}/`,
        { ...data, id: id },
        {
          headers: {
            Authorization: `Token ${localStorage.getItem('token')}`,
            'X-Profile-ID': id,
          },
        }
      )
      await uploadCertificates(certificateData, id)
      console.log(res.data)
      dispatch({
        type: SAVE_PROFILE_DATA,
        data: res.data,
      })
    } catch (error) {
      console.log(error)
    }
  }
}

const uploadCertificates = async (certificateData, id, token) => {
  try {
    await certificateData.map(
      async (data) => await uploadCertificate(data.forUpload, id)
    )
    return true
  } catch (e) {
    console.log(e)
    return false
  }
}

export const uploadCertificate = async (data, id) => {
  try {
    const formData = new FormData()
    formData.append('doc', data)

    console.log('File', data)

    const imgUpload = await api.post(`provider/docs/`, formData, {
      headers: {
        Authorization: `Token ${localStorage.getItem('token')}`,
        'X-Profile-ID': id,
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
