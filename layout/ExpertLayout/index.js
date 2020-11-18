import React from 'react'
import CreateServiceCard from '../../components/Misc/CreateServiceCard'
import EarningsCard from '../../components/Misc/EarningsCard'
import AppTopNav from '../../components/Nav/AppTopNav'
import NavItems from '../../components/Nav/NavItems'
import { CenterSection, ThreeCols } from '..'
import Messages from '../../views/Expert/Messages'

const Index = ({ children, rightContent, alternate = false }) => {
  if (alternate) {
    return (
      <React.Fragment>
        <AppTopNav />
        <div className="h-auto bg-lightGrey w-full flex flex-row">
          <ThreeCols side="left">
            <NavItems />
            <Messages />
          </ThreeCols>
          <ThreeCols side="center">
            {rightContent ? (
              rightContent
            ) : (
              <React.Fragment>
                <EarningsCard />
                <CreateServiceCard />
              </React.Fragment>
            )}
          </ThreeCols>
          <CenterSection alternate>{children}</CenterSection>
        </div>
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <AppTopNav />
      <div className="h-auto bg-lightGrey w-full flex flex-row">
        <ThreeCols side="left">
          <NavItems />
          <Messages />
        </ThreeCols>
        <CenterSection>{children}</CenterSection>
        <ThreeCols side="right">
          {rightContent ? (
            rightContent
          ) : (
            <React.Fragment>
              <EarningsCard />
              <CreateServiceCard />
            </React.Fragment>
          )}
        </ThreeCols>
      </div>
    </React.Fragment>
  )
}

export default Index
