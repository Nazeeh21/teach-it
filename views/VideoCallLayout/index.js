import React from 'react'
import { DoubleSection } from '../../layout'

const Index = ({ children }) => {
  return (
    <React.Fragment>
      <AppTopNav />
      <div className="h-auto bg-lightGrey w-full flex flex-row">
        <ThreeCols side="left">
          <div className="w-full p-4 bg-white rounded-lg shadow-md">
            <NavItems />
          </div>
        </ThreeCols>
        <DoubleSection>{children}</DoubleSection>
      </div>
    </React.Fragment>
  )
}

export default Index
