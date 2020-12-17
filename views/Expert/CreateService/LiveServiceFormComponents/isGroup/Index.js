import React from 'react'
import Pills2 from '../../../../../components/Misc/3Pills/2Pills'

const IsGroupContainer = ({ activeLabel, setLabel }) => (
  <div className="w-full text-lg font-medium">
    <p>Is Group</p>
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

export default IsGroupContainer
