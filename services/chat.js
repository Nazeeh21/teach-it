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

export const getChatData = async (token, profileId, chatId) => {
  if (!chatId) {
    return null
  }

  try {
    const data = await api.get(`/chat/${chatId}/`, {
      headers: {
        Authorization: `Token ${token}`,
        'X-Profile-ID': profileId,
      },
    })

    console.log('Chat data', data)

    return data.data
  } catch (e) {
    console.log(e)

    return null
  }
}

export const sendMessage = async (token, profileId, chatId, message) => {
  try {
    const response = await api.post(
      `/chat/${chatId}/`,
      {
        message,
      },
      {
        headers: {
          Authorization: `Token ${token}`,
          'X-Profile-ID': profileId,
        },
      }
    )

    console.log('Message sent', response)

    return true
  } catch (e) {
    console.log('Error while sending message', e)

    return false
  }
}
