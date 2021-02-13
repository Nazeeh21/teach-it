import React from 'react'

export const Icon = ({ src, alt, active, width = 'w-6' }) => {
  return (
    <img
      className={`cursor-pointer m-2 ${width} h-auto align-middle`}
      src={src}
      alt={alt}
    />
  )
}
