import React from 'react'
import NavItems from '../../components/Nav/NavItems'
import { AgoraCenterSection, CenterSection, ThreeCols } from '..'
import InviteCard from '../../components/Misc/InviteCard'
import AppTopNav from '../../components/Nav/AppTopNav'
import Messages from '../../views/Expert/Messages'
import { useSelector } from 'react-redux'

const Index = ({ children, rightContent, alternate = false, forAgora }) => {
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
                <InviteCard />
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
                <InviteCard />
              </React.Fragment>
            )}
          </ThreeCols>
        )}
      </div>
    </React.Fragment>
  )
}

export default Index
