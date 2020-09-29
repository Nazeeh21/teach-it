import React from 'react'

export default ({src, alt, purpose }) => {
  switch(purpose) {
    case 'isForChat' : 
      return <img src={src} alt={alt} className={`w-10 h-10 m-2 rounded-full`} />
    case 'isForProfile' :
      return <img src={src} alt={alt} className={`w-full h-auto m-2 rounded-full`} />
    default :
      return <img src={src} alt={alt} className={`w-16' h-auto m-2 rounded-full`} />
  }
}