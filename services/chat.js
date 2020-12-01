import api from '../api'

export const getChats = async (token, profileId) => {
  try {
    const chats = await api.get('/chat/', {
      headers: {
        Authorization: `Token ${token}`,
        'X-Profile-ID': profileId,
      },
    })

    console.log('Chats', chats)

    return chats.data
  } catch (e) {
    console.log('Error while fetching chats', e)

    return null
  }
}
