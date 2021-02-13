import React from 'react'
import Pills2 from '../../../../../components/Misc/3Pills/2Pills'

const AllowQuestions = ({ activeLabel, setLabel }) => (
  <div className="w-full text-lg font-medium">
    <p className="font-normal mb-4">Allow Questions</p>
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

export default AllowQuestions
