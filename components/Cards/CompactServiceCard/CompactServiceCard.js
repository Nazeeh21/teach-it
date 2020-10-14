import React from 'react'
import loremIpsum from '../../../utility/loremIpsum'
import { CardButton } from '../../Buttons/Index'
import QuestionCard from './QuestionCard'
// import { useRouter } from 'next/router'

const Image = ({ src, alt }) => (
  <img className='w-full rounded-lg h-auto ' src={src} alt={alt} />
)

const CompactServiceCard = ({ descriptionText = loremIpsum, imgSrc = 'stock/girl2.jpg', category, languages, paymentType, buttonClickHandler }) => {
  // const router = useRouter()

  return (
    <div className='flex flex-row w-full p-2 bg-white shadow-md rounded-lg mb-6'>
      <div className='p-3 w-2/12 flex flex-col'>
        <Image src={imgSrc} alt='Nazeeh' />
        {/* <p className='text-3xl font-bold text-accent m-auto'>13</p> */}
      </div>

      <div className='p-3 w-10/12 flex flex-col'>
        <p>
          {descriptionText.length > 100
            ? descriptionText.substring(0, 50) + '...'
            : descriptionText}
        </p>
        <div className='flex flex-row mt-6'>
          <p className='w-1/2'>{category}</p>
          <p className='text-darkGrey w-1/2'>{languages}</p>
        </div>
        <div className='grid grid-cols-2 items-center'>
          <div className='flex flex-col w-1/2 mt-4'>
            <p className='text-darkGrey'>Date: 5 Aug, 2020</p>
            <p className='text-darkGrey'>Payments: {paymentType}</p>
          </div>
          <div className='mr-10 sm:w-4/12 md:w-2/12 lg:w-3/12 justify-self-end md:mr-40 lg:mr-12 xl:mr-24'>
            <CardButton clickHandler={buttonClickHandler} label='View' />
          </div>
        </div>
        <div className='flex flex-col mt-4'>
          <h3 className='text-primary text-xl mb-2'>New questions</h3>
          <QuestionCard />
          <QuestionCard />
        </div>
      </div>
    </div>
  )
}

export default CompactServiceCard
