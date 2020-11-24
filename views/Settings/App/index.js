import React, { useState } from 'react'
import { PrimaryButton } from '../../../components/Buttons/Index'
import Pills3 from '../../../components/Misc/3Pills/3Pills'
import NotificationContainer from './NotificationContainer/index'
import SyncContainer from './SyncContainer'

const GreyLine = () => (
  <div
    style={{ height: '0.05rem', opacity: '50%' }}
    className="bg-darkGrey w-full"
  />
)

const AppSettings = () => {
  const [label1, setLabel1] = useState('critical')
  const [label2, setLabel2] = useState('critical')

  return (
    <div>
      <p className="text-2xl font-medium">App settings</p>
      <div
        style={{ background: '#FFE7E7' }}
        className="mt-5 w-full flex text-md text-darkGrey rounded py-2 pl-3"
      >
        <img className="mr-2" src="/warning-icon.svg" alt="warning-icon" />
        <div>
          The following changes will affect all profiles in your account
        </div>
      </div>
      <div className="w-full h-auto mt-5 pt-6 px-5 pb-8 bg-white rounded-lg">
        <div className="grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-3 items-center">
          <p className="text-lg font-medium">Notifications</p>
          <div className="w-full md:justify-self-end md:col-span-2 md:w-10/12">
            <Pills3
              activeLabel={label1}
              setLabel={setLabel1}
              color="white"
              label1="critical"
              label2="transactional"
              label3="trending"
              width="full"
            />
          </div>
        </div>
        <div className="mt-5">
          <NotificationContainer notificationMethod="Email" />
          <GreyLine />
          <NotificationContainer notificationMethod="SMS" />
          <GreyLine />
          <NotificationContainer notificationMethod="Push" />
        </div>
        <div className="mt-8 mb-6 grid grid-cols-1 md:grid-rows-1 md:grid-cols-3 items-center">
          <div />
          <div className="w-full md:justify-self-end md:col-span-2 md:w-10/12">
            <Pills3
              activeLabel={label2}
              setLabel={setLabel2}
              color="white"
              label1="critical"
              label2="transactional"
              label3="trending"
              width="full"
            />
          </div>
        </div>
        <div className="w-full text-center bg-lightGrey py-6 text-darkGrey text-md font-medium">
          You will be sent critical notifications by email & SMS.
        </div>
        <p className="text-lg font-medium mt-12">Time zone</p>
        <div className="w-full mt-3">
          <select className="bg-lightGrey w-full md:w-6/12 py-2 pl-1">
            <option value="kolkata" label="GMT +5:30  Kolkata,India" />
            <option value="kolkata" label="GMT +5:30  Kolkata,India" />
            <option value="kolkata" label="GMT +5:30  Kolkata,India" />
          </select>
        </div>
        <p className="text-lg font-medium mt-12">Calender Sync</p>
        <p className="text-darkGrey font-medium text-sm">
          We will keep your calendar up to date with your services and remind
          you when a service is coming up.
        </p>
        <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 mt-5">
          <div className="w-full sm:w-10/12 mb-2 md:mb-0 md:w-11/12">
            <SyncContainer text="Google" />
          </div>
          <div className="w-full sm:w-10/12 md:w-11/12">
            <SyncContainer text="MS Office" />
          </div>
        </div>
        <div className="w-10/12 sm:w-8/12 mb-8 md:mb-0 md:w-4/12 mt-8">
          <PrimaryButton label="Save" />
        </div>
      </div>
    </div>
  )
}

export default AppSettings
