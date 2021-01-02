import React, { useCallback, useEffect, useState } from 'react'
import LayoutProvider from '../../layout/LayoutProvider'
import SupportTickets from '../../views/Support/SupportTickets'
import SupportChat from '../../views/Support/SupportChat'

import { useRouter } from 'next/router'
import { fetchTicketMessages } from '../../services/support'
import { useSelector } from 'react-redux'

const Index = () => {
  const router = useRouter()
  const id = router.query.id
  const token = useSelector((state) => state.auth.token)
  const currentProfileId = useSelector((state) => state.app.currentProfile)

  const [messages, setMessages] = useState([])

  const fetchMessages = useCallback(() => {
    fetchTicketMessages(id, token, currentProfileId)
      .then((data) => setMessages(data.results))
      .catch((e) => console.log(e))
  }, [id])

  useEffect(() => {
    fetchMessages()
  }, [fetchMessages, token, currentProfileId])

  useEffect(() => {
    if (messages) {
      console.log('In parent', messages)
    }
  }, [messages])

  return (
    <LayoutProvider alternate rightContent={<SupportTickets />}>
      <SupportChat
        messages={messages.reverse()}
        chatId={id}
        handleUpdate={fetchMessages}
      />
    </LayoutProvider>
  )
}

export default Index
