import React from 'react'
import LayoutProvider from '../../layout/LayoutProvider'
import Chat from '../../views/Chat/Chat'
import Contacts from '../../views/Chat/Contacts'

const Index = () => {
  return (
    <LayoutProvider alternate rightContent={<Contacts />}>
      <Chat />
    </LayoutProvider>
  )
};

export default Index;