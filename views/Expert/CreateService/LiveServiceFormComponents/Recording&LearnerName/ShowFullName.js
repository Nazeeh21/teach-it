import React from 'react'
import Pills from '../../../../../components/Misc/3Pills/2Pills'

const ShowFullName = ({ activeLabel, setLabel }) => (
  <div className="w-full text-lg font-medium">
    <p className="mb-4">Show full name of learners</p>
    <Pills
      activeLabel={activeLabel}
      setLabel={setLabel}
      color="white"
      label1="Yes"
      label2="No"
      width="full"
    />
  </div>
)

export default ShowFullName
