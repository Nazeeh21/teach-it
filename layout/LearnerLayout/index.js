import React from 'react'
import NavItems from '../../components/Nav/NavItems'
import { AgoraCenterSection, CenterSection, ThreeCols } from '..'
import InviteCard from '../../components/Misc/InviteCard'
import AppTopNav from '../../components/Nav/AppTopNav'
import Messages from '../../views/Expert/Messages'
import { useState } from 'react'
import InviteForm from '../../components/Misc/InviteForm'
import Header from '../../components/Header'

const Index = ({
  children,
  rightContent,
  alternate = false,
  forAgora,
  isForChat,
}) => {
  const [showInvite, setShowInvite] = useState(false)

  const InviteButtonCLickHanlder = () => {
    setShowInvite(true)
  }

  const backdropClickHandler = () => {
    setShowInvite(false)
  }

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
                <InviteCard />
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
      {showInvite && (
        <InviteForm
          show={showInvite}
          backdropClickHandler={backdropClickHandler}
          inviteClicked={InviteButtonCLickHanlder}
        />
      )}
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
                <InviteCard clickHandler={InviteButtonCLickHanlder} />
              </React.Fragment>
            )}
          </ThreeCols>
        )}
      </div>
    </React.Fragment>
  )
}

export default Index
