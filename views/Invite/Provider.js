import React, { useState } from 'react'
import { PrimaryButton } from '../../components/Buttons/Index'
import DatePicker from '../../components/DateAndTimePicker/DatePicker/DatePicker'

const LabeledInput = ({ label, value, changeHandler, type }) => (
  <div>
    <div className="mt-8 text-gray-500 text-md">{label}</div>
    <div className="mt-2">
      <input
        type={type}
        value={value}
        onChange={(e) => changeHandler(e.target.value)}
        className="bg-highlight w-full pl-1 py-1 rounded-sm outline-none border-gray-500 border-b-2 border-t-0 border-l-0 border-r-0"
      />
    </div>
  </div>
)

const ProviderInvite = () => {
  const [suggestedCategory, setSuggestedCategory] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [advanedInvitation, setAdvancedInvitation] = useState(false)
  const [date, setDate] = useState('')

  return (
    <div className="w-full bg-white p-4">
      <div className="text-2xl font-medium">Invite a Provider</div>
      <LabeledInput
        type="text"
        label="Suggested Category"
        value={suggestedCategory}
        changeHandler={setSuggestedCategory}
      />
      <LabeledInput
        type="tel"
        label="Provider's mobile number"
        value={mobileNumber}
        changeHandler={setMobileNumber}
      />
      <LabeledInput
        type="email"
        label="Provider's email"
        value={email}
        changeHandler={setEmail}
      />
      <LabeledInput
        type="text-area"
        label="Message for provider"
        value={message}
        changeHandler={setMessage}
      />
      {!advanedInvitation && (
        <div
          className="text-right mt-4 cursor-pointer text-secondary text-sm"
          onClick={() => setAdvancedInvitation(true)}
        >
          Advanced Invitation
        </div>
      )}
      {advanedInvitation && (
        <div>
          <div className="text-xl font-medium mt-4 mb-2">Service details</div>
          <LabeledInput type="text" label="Title of the Service" value="" />
          <LabeledInput type="text" label="Proposed fee (optional)" value="" />
          <div className="grid grid-rows-2 sm:grid-cols-2 gap-2 items-center">
            <div>
              <div className="mt-8 text-gray-500 text-md">
                Proposed start date
              </div>
              <div className="-ml-2 mt-1">
                <DatePicker handleDayChange={() => setDate} />
              </div>
            </div>
            <div>
              <div className="mt-8 text-gray-500 text-md mb-1">
                Proposed time
              </div>
              <input
                type="time"
                className="bg-highlight w-full pl-1 py-1 rounded-sm outline-none border-gray-500 border-b-2 border-t-0 border-l-0 border-r-0"
              />
            </div>
          </div>
        </div>
      )}
      <div className="m-auto w-full md:w-6/12 mt-10 mb-4">
        <PrimaryButton label="Invite" clickHandler={() => {}} />
      </div>
    </div>
  )
}

export default ProviderInvite
