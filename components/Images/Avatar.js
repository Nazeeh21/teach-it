import React from 'react'

const Avatar = ({ src, alt, purpose }) => {
  switch (purpose) {
    case 'isForChat':
      return (
        <img
          src={src}
          alt={alt}
          className={`w-10 object-cover h-10 m-2 rounded-full`}
        />
      )
    case 'isForProfile':
      return (
        <img
          src={src}
          alt={alt}
          className={`w-full h-auto m-2 rounded-full object-cover`}
        />
      )
    default:
      return (
        <img src={src} alt={alt} className={`w-16' h-auto m-2 rounded-full`} />
      )
  }
}

export default Avatar
