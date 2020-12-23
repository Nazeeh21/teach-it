import api from '../api'

export const fetchCategories = async (token, currentProfileId) => {
  try {
    const res = await api.get('category/', {
      headers: {
        Authorization: `Token ${token}`,
        'X-Profile-ID': currentProfileId,
      },
    })

    console.log('Fetched Categories', res.data)
    return res.data
  } catch (e) {
    console.log('Error while fetching categories', e)
    return null
  }
}

export const fetchTopCategories = async (token, currentProfileId) => {
  try {
    const res = await api.get('category/top/', {
      headers: {
        Authorization: `Token ${token}`,
        'X-Profile-ID': currentProfileId,
      },
    })
    console.log('Fetched Top 4 Categories', res.data)
    return res.data
  } catch (e) {
    console.log('Error while fetching top 4 categories', e)
    console.log(e)
  }
}
