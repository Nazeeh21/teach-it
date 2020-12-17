import React from 'react'
import LayoutProvider from '../../layout/LayoutProvider'
import NewTicket from '../../views/Support/NewTicket'
import SupportTickets from '../../views/Support/SupportTickets'

const Support = () => (
  <LayoutProvider alternate rightContent={<SupportTickets />}>
    <NewTicket />
  </LayoutProvider>
)

export default Support
