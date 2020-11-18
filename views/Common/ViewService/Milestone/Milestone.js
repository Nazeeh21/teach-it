import React from 'react'
import loremIpsum from '../../../../utility/loremIpsum'

const Milestone = ({ title, sessionsNumber, description }) => (
  <div
    style={{ border: '1px solid #F3F3F4' }}
    className="w-full rounded-md m-2 my-3 p-3"
  >
    <div className="grid grid-cols-2 grid-rows-1">
      <p className="justify-self-start">{title}</p>
      <p className="justify-self-end text-darkGrey text-xs font-semibold">
        {sessionsNumber} sessions
      </p>
    </div>
    <p className="text-darkGrey text-sm">{description}</p>
  </div>
)

export default Milestone
