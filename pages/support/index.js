import React from 'react'
import LayoutProvider from '../../layout/LayoutProvider'
import SupportTickets from '../../views/Support/SupportTickets'
import SupportView from '../../views/Support'

const Support = () => (
  <LayoutProvider alternate rightContent={<SupportTickets />} >
    <SupportView />
  </LayoutProvider>
)

export default Support