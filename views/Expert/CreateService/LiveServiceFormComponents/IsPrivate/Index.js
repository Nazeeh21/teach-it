import React from 'react'
import Pills2 from '../../../../../components/Misc/3Pills/2Pills'

const IsPrivateContainer = ({ activeLabel, setLabel }) => (
  <div className="w-full text-lg font-medium">
    <p className="mb-4">Is Private</p>
    <Pills2
      activeLabel={activeLabel}
      setLabel={setLabel}
      color="white"
      label1="Yes"
      label2="No"
      width="full"
    />
  </div>
)

export default IsPrivateContainer
