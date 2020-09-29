import React from 'react'
import NavItems from '../../../components/Nav/NavItems'
import { CenterSection, ThreeCols } from '../../../layout'
import InviteCard from '../../../components/Misc/InviteCard'
import AppTopNav from '../../../components/Nav/AppTopNav'
import Messages from '../../Expert/Messages'

export default ({ children, rightContent, alternate = false }) => {
  if (alternate) {
    return (
      <React.Fragment>
        <AppTopNav />
        <div className='h-auto bg-lightGrey w-full flex flex-row'>
          <ThreeCols side='left'>
            <div className='w-full p-4 bg-white rounded-lg shadow-md'>
              <NavItems />
              <Messages />
            </div>
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
          <div className='w-full p-4 bg-white rounded-lg shadow-md'>
            <NavItems />
            <Messages />
          </div>
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
