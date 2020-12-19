import React from 'react'
import CreateServiceCard from '../../components/Misc/CreateServiceCard'
import EarningsCard from '../../components/Misc/EarningsCard'
import AppTopNav from '../../components/Nav/AppTopNav'
import NavItems from '../../components/Nav/NavItems'
import { AgoraCenterSection, CenterSection, ThreeCols } from '..'
import Messages from '../../views/Expert/Messages'
import Header from '../../components/Header'

const Index = ({
  children,
  rightContent,
  alternate = false,
  forAgora,
  isForChat,
}) => {
  if (alternate) {
    return (
      <React.Fragment>
        <AppTopNav />
        <div className="h-auto bg-lightGrey w-full flex flex-row">
          <ThreeCols side="left">
            <NavItems />
            <Messages />
          </ThreeCols>
          <ThreeCols isForChat={isForChat} side="center">
            {rightContent ? (
              rightContent
            ) : (
              <React.Fragment>
                <EarningsCard />
                <CreateServiceCard />
              </React.Fragment>
            )}
          </ThreeCols>
          <CenterSection isForChat={isForChat} alternate>
            {children}
          </CenterSection>
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
        {!forAgora ? (
          <CenterSection>{children}</CenterSection>
        ) : (
          <AgoraCenterSection>{children}</AgoraCenterSection>
        )}
        {!forAgora && (
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
        )}
      </div>
    </React.Fragment>
  )
}

export default Index
