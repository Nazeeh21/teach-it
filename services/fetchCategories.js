import api from "../api"

export const fetchCategories = async () => {
  try {
    const res = await api.get('category/', {
      headers: {
        Authorization: `Token ${localStorage.getItem('token')}`,
        'X-Profile-ID': localStorage.getItem('currentProfile')
      }
    })

    console.log('Fetched Categories', res.data)
    return res.data
  } catch(e) {
    console.log('Error while fetching categories', e)
    return null
  }
}