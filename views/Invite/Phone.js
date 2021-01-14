import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { PrimaryButton } from '../../components/Buttons/Index'
import { sendInvite } from '../../services/sendInvite'
import Checkbox from '../Expert/CreateService/LiveServiceFormComponents/CustomizeAndMilestoneContainer/Container/Checkbox/Checkbox'

const Phone = () => {
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const [selectAllActive, setSelectAllActive] = useState(false)

  const token = useSelector((state) => state.auth.token)
  const currentProfileId = useSelector((state) => state.app.currentProfile)

  const inviteClicked = () => {
    sendInvite(name, null, phoneNumber, token, currentProfileId)
      .then((res) => console.log(res))
      .catch((e) => console.log(e))
  }

  return (
    <div className="w-full bg-white p-4">
      <div className="text-2xl font-medium">
        Select friends you want to invite
      </div>

      <div className="flex mt-4 text-sm items-center justify-between">
        <div className="cursor-pointer text-secondary ">Add contact</div>
        <div className="flex items-center text-gray-600">
          {selectAllActive ? <div>Deselect all</div> : <div>Select all</div>}
          <div className="ml-2">
            <Checkbox
              active={selectAllActive}
              clicked={() => setSelectAllActive((prevState) => !prevState)}
            />
          </div>
        </div>
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
      <div className="mt-8 text-gray-500 text-md">Enter phone number</div>
      <div className="mt-2">
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="bg-highlight w-full pl-1 py-1 rounded-sm outline-none border-gray-500 border-b-2 border-t-0 border-l-0 border-r-0"
        />
      </div>
      <div className="m-auto w-full md:w-6/12 mt-20 mb-4">
        <PrimaryButton label="Invite" clickHandler={inviteClicked} />
      </div>
    </div>
  )
}

export default Phone
