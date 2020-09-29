import React from 'react'

export const Icon = ({src, alt, active = false}) => (
  
  <img className='cursor-pointer m-2 w-6 h-auto align-middle' src={src} alt={alt} />
)
