import React, { useState } from 'react'
import { Icon } from '../../../components/Images/Icon'
import loremIpsum from '../../../utility/loremIpsum'
import Question from './Question'
import { PrimaryButton } from '../../../components/Buttons/Index'
import AskQuestion from './AskQuestion/index'
import ShowQuestions from './ShowQuestions'
 
const Questions = () => {
  const [showAskQuestion, setShowAskQuestion] = useState(false)
  const [showQuestions, setShowQuestions] = useState(false)

  const AskQuestionOpenHandler = () => setShowAskQuestion(true)
  const AskQuestionCloseHandler = () => setShowAskQuestion(false)

  const ShowQuestionsOpenHandler = () => setShowQuestions(true)
  const ShowQuestionsCloseHandler = () => setShowQuestions(false)

  return (
    <div className='w-full'>
      {showAskQuestion && <AskQuestion show={showAskQuestion} clickHandler={AskQuestionCloseHandler} />}
      {showQuestions && <ShowQuestions show={showQuestions} clickHandler={ShowQuestionsCloseHandler} />}
      <div className='grid grid-cols-2 items-center'>
        <h3 className='justify-self-start text-2xl'>Stock Market Ideas</h3>
        <div className='justify-self-end'>
          <Icon src='/search.png' />
        </div>
      </div>
      <div className='grid grid-flow-row grid-cols-1 gap-6'>
        <Question question={loremIpsum} clickHandler={ShowQuestionsOpenHandler} />
        <Question question={loremIpsum} clickHandler={ShowQuestionsOpenHandler} />
        <Question question={loremIpsum} clickHandler={ShowQuestionsOpenHandler} />
      </div>
      <div className='mb-20 md:mb-0 grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 items-center mt-5'>
        <div className='w-full md:w-11/12'>
          <PrimaryButton 
            label='Ask a question' 
            clickHandler={AskQuestionOpenHandler} 
            />
        </div>
        <div className='text-darkGrey text-sm text-center'>
        You will be charged ₹200 for each question
        </div>
      </div>
    </div>
  )
};

export default Questions;
