import api from '../api'

export const fetchChatMessages = async (chatId) => {
  try {
    const res = await api.get(`/service/questions/chat/${chatId}/`, {
      headers: {
        Authorization: `Token ${localStorage.getItem('token')}`,
        'X-Profile-ID': localStorage.getItem('currentProfile'),
      },
    })

    console.log('Fetched question chat messages', res.data)

    return res.data.results
  } catch (e) {
    console.log('Error while fetching question chat messages', e)
    return null
  }
}

export const sendMessage = async (messageText, chatId) => {
  try {
    const res = await api.post(
      `/service/questions/chat/${chatId}/`,
      {
        message: messageText,
      },
      {
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`,
          'X-Profile-ID': localStorage.getItem('currentProfile'),
        },
      }
    )

    console.log('Sent message successfully', res.data)

    return true
  } catch (e) {
    console.log('Failed to send message.', e)
    return false
  }
}
