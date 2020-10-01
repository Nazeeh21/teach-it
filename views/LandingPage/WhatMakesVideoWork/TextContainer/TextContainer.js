import React from 'react'

const TextContainer = ({ data }) => (
  <div className='ml-5 mt-5 md:m-2  xl:m-10 inline-block'>
    <div className='flex  flex-row md:flex-col'>
      <div
        style={{ background: `${data.imgBg}` }}
        className=' h-16 w-16 mb-10 rounded-lg flex items-center'>
        <img className='w-8/12 m-auto' src={data.src} alt={data.alt} />
      </div>
      <p className='mt-4 ml-2 font-medium md:mt-3 md:ml-0 lg:mt-0 lg:ml-0 text-xl lg:font-bold'>{data.title}</p>
    </div>
    
    <p className='hidden text-lg font-medium text-darkGrey md:block'>{data.subTitle}</p>
  </div>
)

export default TextContainer




// m-6 my-12 w-5/12