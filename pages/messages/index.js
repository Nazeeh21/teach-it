import React from 'react'
import ExpertLayout from '../../views/Expert/ExpertLayout'
import Chat from '../../views/Chat/Chat'
import Contacts from '../../views/Chat/Contacts'

const Index = () => {
  return (
    <ExpertLayout alternate rightContent={<Contacts />}>
      <Chat />
    </ExpertLayout>
  )
};

export default Index;