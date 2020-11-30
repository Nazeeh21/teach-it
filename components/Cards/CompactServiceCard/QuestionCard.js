import React, { useEffect, useState } from 'react'
import { fetchQuestionCreator } from '../../../services/fetchQuestions'
import loremIpsum from '../../../utility/loremIpsum'
import Avatar from '../../Images/Avatar'

const QuestionCard = (questionData) => {
  const dateCreated = questionData.data.created_at.toString().slice(0, 10)
  const timeCreated = questionData.data.created_at.toString().slice(11, 19)
  const [creatorName, setCreatorName] = useState('')

  useEffect(() => {
    fetchQuestionCreator(questionData.data.creator)
      .then((res) => {
        setCreatorName(res.name)
        console.log('[fetchQuestionCreator]', res)
      })
      .catch((e) => console.log(e))
  }, [])

  return (
    <div className="flex flex-col border-2 border-lightGrey rounded p-2 mb-4">
      <div className="grid grid-cols-2 items-center w-full">
        <div className="flex flex-row items-center">
          <Avatar
            purpose="isForChat"
            src="/stock/girl2.jpg"
            alt="Nazeeh Vahora"
          />
          <p className="text-md justify-self-start">{creatorName}</p>
        </div>
        <div className="text-darkGrey justify-self-end items-center text-sm">
          <div>{dateCreated}</div>
          <div className="text-right">{timeCreated}</div>
        </div>
      </div>
      <p className="pl-2">{questionData.data.title}</p>
    </div>
  )
}

export default QuestionCard
