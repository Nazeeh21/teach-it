import api from '../api'

export const fetchTicketMessages = async (chatId, token, currentProfileId) => {
  try {
    const res = await api.get(`/support/chat/${chatId}/`, {
      headers: {
        Authorization: `Token ${token}`,
        'X-Profile-ID': currentProfileId,
      },
    })

    console.log('Fetched ticket data', res.data)

    return res.data
  } catch (e) {
    console.log(e)
    return null
  }
}

export const sendMessage = async (
  messageText,
  chatId,
  token,
  currentProfileId
) => {
  try {
    const res = await api.post(
      `/support/chat/${chatId}/`,
      {
        message: messageText,
      },
      {
        headers: {
          Authorization: `Token ${token}`,
          'X-Profile-ID': currentProfileId,
        },
      }
    )

    console.log('Sent message successfully', res.data)

    return true
  } catch (e) {
    console.log(e)
    return false
  }
}
