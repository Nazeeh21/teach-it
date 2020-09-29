import React from 'react'
import CardButton from './CardButton/CardButton'
import loremIpsum from '../../../utility/loremIpsum'

const Image = ({ src, alt }) => (
  <img className='w-full rounded-lg h-auto ' src={src} alt={alt} />
)

const CompactServiceCard = (
  { descriptionText , hrefText = '', butttonText, buttonDisabled = false, media }
) => <div className='flex flex-row w-auto p-2 bg-white shadow-md rounded-lg my-3'>
  <div className='p-3 w-2/12 flex flex-col'>
    <Image src='nazeeh_profile.jpg' alt='Nazeeh' />
    <p className='text-3xl font-bold text-accent m-auto'>13</p>
  </div>

  <div className='p-1 w-10/12 flex flex-col'>
    <p className='text-sm font-medium'>{loremIpsum.length > 100 ? loremIpsum.substring(1, 50) + '...' : loremIpsum}</p>
    <div className='flex flex-row mt-6'>
      <div className='w-1/2 text-sm'>
        SPORTS & FITNESS
        <div style={{lineHeight: '130%'}} className='text-darkGrey'>
          <p>15000000/week</p>
          <p>5:30 pm</p>
          <p style={{opacity: '80%'}}>Mon, Tue, Wed, Thurs, Sat</p>
          <p style={{opacity: '80%'}}>Start date: 5th Aug 2020</p>
        </div>
      </div>
      <p className='text-darkGrey text-xs font-medium w-1/2'>
        English, Marathi & Gujarati
        <p>17 weeks</p>
      </p>
    </div>
    <div className='flex flex-row'>
      <div style={{color: `${media.color}`}} className='font-medium flex flex-col w-1/2 mt-4'>
        {media.text}
      </div>
      <div className='w-4/12 flex items-center'>
        <div className='w-3/12 mx-2'>
          <a style={{color: '#00bcd4'}} href='/'>{hrefText}</a>
        </div>
        <div className='w-9/12 mx-2'>
          <CardButton label={butttonText} disabled={buttonDisabled} />
        </div>
      </div>
    </div>
  </div>
</div>;

export default CompactServiceCard;


// Live