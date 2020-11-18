import React from 'react'
import { PrimaryButton } from '../../../components/Buttons/Index'

const Question = ({ question, time, clickHandler }) => {
  const date = new Date(time)

  console.log(date)

  return (
    <React.Fragment>
      <div className="flex rounded-lg border-highlight border-2 bg-white w-full p-6">
        <p className="w-3/4 font-semibold">{question}</p>
        <div className="w-1/4 ml-4">
          <PrimaryButton label="View" clickHandler={clickHandler} />
        </div>
      </div>
      <div className="grid grid-cols-1 -mt-5 font-semibold">
        <p className="justify-self-end text-darkGrey text-sm">
          {date.toString()}
        </p>
      </div>
    </React.Fragment>
  )
}

export default Question
