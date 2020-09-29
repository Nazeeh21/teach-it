import React from 'react'
import CreateServiceCard from '../../../components/Misc/CreateServiceCard'
import EarningsCard from '../../../components/Misc/EarningsCard'
import AppTopNav from '../../../components/Nav/AppTopNav'
import NavItems from '../../../components/Nav/NavItems'
import { CenterSection, ThreeCols } from '../../../layout'
import Messages from '../Messages'

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
            <EarningsCard />
            <CreateServiceCard />
          </React.Fragment>
        )}
      </ThreeCols>
    </div>
    </React.Fragment>
  )
}
