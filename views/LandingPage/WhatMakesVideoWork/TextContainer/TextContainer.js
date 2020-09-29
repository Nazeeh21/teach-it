import React from 'react'

const TextContainer = ({ data }) => (
  <div className='m-10 inline-block'>
    <div
      style={{ background: `${data.imgBg}` }}
      className='h-16 w-16 mb-10 rounded-lg flex items-center'>
      <img className='w-8/12 m-auto' src={data.src} alt={data.alt} />
    </div>
    <p className='text-xl font-bold'>{data.title}</p>
    <p className='text-lg font-medium text-darkGrey'>{data.subTitle}</p>
  </div>
)

export default TextContainer




// m-6 my-12 w-5/12