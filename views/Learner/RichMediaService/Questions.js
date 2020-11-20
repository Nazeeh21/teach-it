import React, { useCallback, useEffect, useState } from 'react'
import { Icon } from '../../../components/Images/Icon'
import Question from './Question'
import { PrimaryButton } from '../../../components/Buttons/Index'
import AskQuestion from './AskQuestion/index'
import api from '../../../api'
import QuestionModal from './QuestionModal'

const Questions = () => {
  const [activeChatId, setActiveChatId] = useState()

  const [showAskQuestionModal, toggleAskQuestionModal] = useState(false)
  const [showQuestionModal, toggleQuestionModal] = useState(false)
  const [triggerFetch, setTriggerFetch] = useState(false)

  const askQuestionOpenHandler = () => toggleAskQuestionModal(true)
  const askQuestionCloseHandler = () => {
    toggleAskQuestionModal(false)
    setTriggerFetch((val) => !val)
  }

  const questionModalOpenHandler = (chatId) => {
    toggleQuestionModal(true)
    setActiveChatId(chatId)
  }
  const questionModalCloseHandler = () => toggleQuestionModal(false)

  const [questions, setQuestions] = useState([])

  const getQuestions = useCallback(async () => {
    try {
      const res = await api.get('service/1/questions/', {
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`,
          'X-Profile-ID': localStorage.getItem('currentProfile'),
        },
      })
      console.log('Fetched questions', res.data)
      setQuestions(res.data)
    } catch (e) {
      console.log('Error while fetching questions', e)
    }
  }, [triggerFetch])

  useEffect(() => {
    getQuestions()
  }, [getQuestions])

  return (
    <div className="w-full">
      {showAskQuestionModal && (
        <AskQuestion
          show={showAskQuestionModal}
          clickHandler={askQuestionCloseHandler}
        />
      )}
      {showQuestionModal && (
        <QuestionModal
          show={showQuestionModal}
          clickHandler={questionModalCloseHandler}
          chatId={activeChatId}
          serviceId={1}
        />
      )}
      <div className="grid grid-cols-2 items-center">
        <h3 className="justify-self-start text-2xl">Stock Market Ideas</h3>
        <div className="justify-self-end">
          <Icon src="/search.png" />
        </div>
      </div>
      <div className="grid grid-flow-row grid-cols-1 gap-6">
        {questions.map((question) => (
          <Question
            key={question.pk}
            question={question.title}
            clickHandler={questionModalOpenHandler}
            chatId={question.chat}
          />
        ))}
      </div>
      <div className="mb-20 md:mb-0 grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 items-center mt-5">
        <div className="w-full md:w-11/12">
          <PrimaryButton
            label="Ask a question"
            clickHandler={askQuestionOpenHandler}
          />
        </div>
        <div className="text-darkGrey text-sm text-center">
          You will be charged ₹200 for each question
        </div>
      </div>
    </div>
  )
}

export default Questions
