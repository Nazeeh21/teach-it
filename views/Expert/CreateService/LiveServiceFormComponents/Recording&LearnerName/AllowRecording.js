import React from 'react'
import Pills from '../../../../../components/Misc/3Pills/2Pills'

const AllowRecording = ({ activeLabel, setLabel }) => (
  <div className="w-full text-lg font-medium">
    <p>Allow recording</p>
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

export default AllowRecording
