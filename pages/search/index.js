import React from 'react'
import LayoutProvider from '../../layout/LayoutProvider'
import SearchResult from '../../views/SearchResult'
import TypeOfService from '../../views/SearchResult/TypeOfService'

const Index = () => {
  return (
    <LayoutProvider rightContent={<TypeOfService />}>
      <SearchResult />
    </LayoutProvider>
  )
}

export default Index
