import React from 'react'
import AllowQuestions from './AllowQuestions'

const QuestionFees = ({
  value,
  changeHandler,
  allowQuestions,
  allowQuestionChangeHandler,
}) => {
  return (
    <div className="flex w-full items-center">
      <div className="w-6/12">
        <AllowQuestions
          activeLabel={allowQuestions}
          setLabel={allowQuestionChangeHandler}
        />
      </div>
      <div className="w-6/12 flex items-center justify-center">
        <input
          value={value}
          min="0"
          type="number"
          className="rounded bg-lightGrey w-3/12 p-2"
          onChange={(e) => {
            changeHandler(e.target.value)
          }}
        />
        <div className="text-sm font-medium ml-2">Question Fees</div>
      </div>
    </div>
  )
}

export default QuestionFees
