import React, { useState } from 'react'

export default ({ text, footerText }) => {
  const [file, setFile] = useState()

  const handleClick = () => {
    document.getElementById('upload-input').click()
  }

  return (
    <React.Fragment>
      <img
        onClick={handleClick}
        src='plus.png'
        alt='Upload button'
        className='cursor-pointer border-secondary border-2 border-dashed rounded-md p-6 m-2 w-24'
      />
      <p className='m-1 text-serviceCardTitle'>{text}</p>
      <p className='m-1 text-serviceCardDescription text-darkGrey'>
        {footerText}
      </p>
      <input
        id='upload-input'
        className='hidden'
        type='file'
        value={file}
        onChange={(e) => setFile()}
      />
    </React.Fragment>
  )
}
