import React, { useEffect, useState } from 'react'
import { fetchQuestions } from '../../../services/fetchQuestions'
import loremIpsum from '../../../utility/loremIpsum'
import { CardButton } from '../../Buttons/Index'
import QuestionCard from './QuestionCard'
import ISO6391 from 'iso-639-1'
import { useSelector } from 'react-redux'
// import { useRouter } from 'next/router'

const Image = ({ src, alt }) => (
  <img className="w-full rounded-lg h-auto " src={src} alt={alt} />
)

const CompactServiceCard = ({
  descriptionText = loremIpsum,
  imgSrc = 'stock/girl2.jpg',
  category = 'Music',
  languages,
  paymentType,
  buttonClickHandler,
  serviceType,
  servicePk,
  startDate,
}) => {
  let date = new Date(startDate)
  const token = useSelector((state) => state.auth.token)
  const currentProfileId = useSelector((state) => state.app.currentProfile)
  // const router = useRouter()
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetchQuestions(servicePk, token, currentProfileId)
      .then((res) => setQuestions(res))
      .catch((e) => console.log(e))
  }, [servicePk, token, currentProfileId])

  // console.log('Compact Service Card', questionData)
  return (
    <div className="flex flex-row w-full p-2 bg-white shadow-md rounded-lg mb-6">
      <div className="p-3 w-2/12 flex flex-col">
        <Image src={imgSrc} alt="service-image" />
        {/* <p className='text-3xl font-bold text-accent m-auto'>13</p> */}
      </div>

      <div className="p-3 w-10/12 flex flex-col">
        <p>
          {descriptionText.length > 100
            ? descriptionText.substring(0, 50) + '...'
            : descriptionText}
        </p>
        <div className="flex flex-row mt-6">
          <p className="w-1/2 font-medium">{category ? category : 'Music'}</p>
          <p className="text-darkGrey text-sm w-1/2">
            {languages.map((lang, idx) => (
              <span key={idx}>{ISO6391.getName(lang)}</span>
            ))}
          </p>
        </div>
        <div className="grid grid-cols-2 items-center">
          <div className="flex flex-col w-8/12 mt-2">
            <p className="text-darkGrey">Date: {date.toLocaleDateString()}</p>
            <p
              style={{ textTransform: 'capitalize' }}
              className="text-darkGrey"
            >
              Payments: {paymentType}
            </p>
            <div
              style={{ color: `${serviceType === 'rich' ? 'green' : 'red'}` }}
              className="font-medium flex flex-row w-11/12 mt-2"
            >
              <img
                className="mr-1"
                src={`${serviceType}.svg`}
                alt={serviceType}
              />
              <span style={{ textTransform: 'capitalize' }}>
                {serviceType === 'rich' ? 'Rich Media' : 'Live Media'}
              </span>
            </div>
          </div>
          <div className="mr-8 sm:w-4/12 md:w-5/12 lg:w-4/12 justify-self-end md:mr-40 lg:mr-12 xl:mr-24">
            <CardButton clickHandler={buttonClickHandler} label="View" />
          </div>
        </div>
        <div className="flex flex-col mt-4">
          {questions && questions.length !== 0 && (
            <h3 className="text-primary text-xl mb-2">New questions</h3>
          )}
          {/* <QuestionCard data={questionData} /> */}
          {questions &&
            questions.map(
              (question) => <QuestionCard data={question} />
              // console.log('Questions data from CompactServiceCard', question)
            )}
        </div>
      </div>
    </div>
  )
}

export default CompactServiceCard
