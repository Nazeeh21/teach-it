import React from 'react'
import NavItems from '../../components/Nav/NavItems'
import { CenterSection, ThreeCols } from '..'
import InviteCard from '../../components/Misc/InviteCard'
import AppTopNav from '../../components/Nav/AppTopNav'
import Messages from '../../views/Expert/Messages'

const Index = ({ children, rightContent, alternate = false }) => {
  if (alternate) {
    return (
      <React.Fragment>
        <AppTopNav />
        <div className='h-auto bg-lightGrey w-full flex flex-row'>
          <ThreeCols side='left'>
            <NavItems />
            <Messages />
          </ThreeCols>
          <ThreeCols side='center'>
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
      <div className='h-auto bg-lightGrey w-full flex flex-row'>
        <ThreeCols side='left'>
          <NavItems />
          <Messages />
        </ThreeCols>
        <CenterSection>{children}</CenterSection>
        <ThreeCols side='right'>
          {rightContent ? (
            rightContent
          ) : (
            <React.Fragment>
              <InviteCard />
            </React.Fragment>
          )}
        </ThreeCols>
      </div>
    </React.Fragment>
  )
}

export default Index
