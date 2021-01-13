import { useRouter } from 'next/router'
import React from 'react'
import { PrimaryButton, ViewMoreButton } from '../../components/Buttons/Index'

const Invite = () => {
  const router = useRouter()
  return (
    <div className="bg-white p-4">
      <div className="w-full">
        <img className="w-full m-auto" src="/invite.png" alt="invite" />
      </div>
      <div className="text-md font-medium mt-6">
        You will recieve 10% commission on{' '}
        <div className="inline-block font-semibold">each transaction</div> made
        by your friends in their first month!
      </div>
      <div className="w-2/12">
        <ViewMoreButton
          paddingLeft="pl-0"
          paddingRight="pr-0 bg-white"
          label="Learn more"
        />
      </div>
      <div className="m-auto w-full md:w-6/12 mb-4">
        <PrimaryButton
          label="Invite by email"
          clickHandler={() => router.push('/invite/email')}
        />
      </div>
      <div className="m-auto w-full md:w-6/12 mb-4">
        <PrimaryButton
          label="Invite by phone"
          clickHandler={() => router.push('/invite/phone')}
        />
      </div>
    </div>
  )
}

export default Invite
