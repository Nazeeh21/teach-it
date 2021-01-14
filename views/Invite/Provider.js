import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { PrimaryButton } from '../../components/Buttons/Index'
import DatePicker from '../../components/DateAndTimePicker/DatePicker/DatePicker'
import {
  sendAdvanceProviderInvite,
  sendBasicProviderInvite,
} from '../../services/sendInvite'

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
  const [name, setName] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [advancedInvitation, setAdvancedInvitation] = useState(false)
  const [serviceTitle, setServiceTitle] = useState('')
  const [fee, setFee] = useState('')
  const [startDate, setStartDate] = useState(null)
  const [startTime, setStartTime] = useState('')
  const [description, setDescription] = useState('')

  const token = useSelector((state) => state.auth.token)
  const currentProfileId = useSelector((state) => state.app.currentProfile)

  const inviteClickedHandler = () => {
    if (currentProfileId && token) {
      if (advancedInvitation) {
        sendAdvanceProviderInvite(
          name,
          email,
          mobileNumber,
          message,
          suggestedCategory,
          serviceTitle,
          fee,
          startDate,
          startTime,
          description,
          token,
          currentProfileId
        )
          .then((res) => console.log(res))
          .catch((e) => console.log(e))
      } else {
        sendBasicProviderInvite(
          name,
          email,
          mobileNumber,
          message,
          suggestedCategory,
          token,
          currentProfileId
        )
          .then((res) => console.log(res))
          .catch((res) => console.log(res))
      }
    }
  }

  return (
    <div className="w-full bg-white p-4">
      <div className="text-2xl font-medium">Invite a Provider</div>
      <LabeledInput
        type="text"
        label="Name"
        value={name}
        changeHandler={setName}
      />
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
      {!advancedInvitation && (
        <div
          className="text-right mt-4 cursor-pointer text-secondary text-sm"
          onClick={() => setAdvancedInvitation(true)}
        >
          Advanced Invitation
        </div>
      )}
      {advancedInvitation && (
        <div>
          <div className="text-xl font-medium mt-4 mb-2">Service details</div>
          <LabeledInput
            type="text"
            label="Title of the Service"
            value={serviceTitle}
            changeHandler={setServiceTitle}
          />
          <LabeledInput
            type="text"
            label="Proposed fee (optional)"
            value={fee}
            changeHandler={setFee}
          />
          <LabeledInput
            type="text"
            label="Description"
            value={description}
            changeHandler={setDescription}
          />
          <div className="grid grid-rows-2 sm:grid-cols-2 gap-2 items-center">
            <div>
              {/* <div className="mt-8 text-gray-500 text-md">
                Proposed start date
              </div> */}
              {/* <div className="-ml-2 mt-1">
                <DatePicker handleDayChange={setStartDate} />
              </div> */}
              <div>
                {/* <input type='date' value={startDate} onChange={e => setStartDate(e.target.value)} placeholder='--/--/---' /> */}
                <LabeledInput
                  type="date"
                  label="Proposed start date"
                  value={startDate}
                  changeHandler={setStartDate}
                />
              </div>
            </div>
            <div>
              <div className="mt-8 text-gray-500 text-md mb-2">
                Proposed time
              </div>
              <input
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                type="time"
                className="bg-highlight w-full pl-1 py-1 rounded-sm outline-none border-gray-500 border-b-2 border-t-0 border-l-0 border-r-0"
              />
            </div>
          </div>
        </div>
      )}
      <div className="m-auto w-full md:w-6/12 mt-10 mb-4">
        <PrimaryButton label="Invite" clickHandler={inviteClickedHandler} />
      </div>
    </div>
  )
}

export default ProviderInvite
