import React from 'react'

const Card = ({src, alt, heading, description, features}) => (
  <div className='w-4/12 m-3 bg-white p-8'>
    <div className='m-8'>
    <img className='mt-5 mb-5' alt={alt} src={src} />
    <p className={`text-${heading.color} font-bold text-5xl`}>{heading.text}</p>
    <div className='mt-3 mb-3 h-48 text-darkGrey text-lg font-medium'>{description}</div>
    <div className='bg-lightGrey m-auto w-full h-1' />
    <div className='m-6'>
    {
      features.map(feature => (
        <div className='flex  items-center'>
          <div style={{backgroundColor: 'lightGrey',}} className='m-2 w-5 h-5  rounded-full flex'>
            <div style={{backgroundColor: `${feature.color}`}} className='m-auto self-center w-3 h-3 rounded-full'/>
          </div>
          <div className='text-darkGrey text-lg m-2'>{feature.text}</div>
        </div>
      ))
    }
    </div>
  </div>
  </div>
  
)

export default Card

