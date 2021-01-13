import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { PrimaryButton } from '../../components/Buttons/Index'
import { sendInvite } from '../../services/sendInvite'

const Email = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const token = useSelector((state) => state.auth.token)
  const currentProfileId = useSelector((state) => state.app.currentProfile)

  const inviteClicked = () => {
    sendInvite(name, email, null, token, currentProfileId)
      .then((res) => console.log(res))
      .catch((e) => console.log(e))
  }

  return (
    <div className="bg-white px-4 py-4">
      <div className="text-2xl font-medium">
        Add email IDs of friends you want to invite
      </div>
      <div className="mt-8 text-gray-500 text-md">Enter name</div>
      <div className="mt-2">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-highlight w-full pl-1 py-1 rounded-sm outline-none border-gray-500 border-b-2 border-t-0 border-l-0 border-r-0"
        />
      </div>
      <div className="mt-8 text-gray-500 text-md">Add email</div>
      <div className="mt-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-highlight w-full pl-1 py-1 rounded-sm outline-none border-gray-500 border-b-2 border-t-0 border-l-0 border-r-0"
        />
      </div>
      <div className="grid grid-cols-1 mt-2">
        <div className="justify-self-end cursor-pointer text-secondary text-sm">
          Import
        </div>
      </div>
      <div className="m-auto w-full md:w-6/12 mt-20 mb-4">
        <PrimaryButton label="Invite" clickHandler={inviteClicked} />
      </div>
    </div>
  )
}

export default Email
