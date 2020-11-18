import React, { useState } from 'react'
import Avatar from '../../../components/Images/Avatar'
import OptionContainer from './OptionContainer'

const Option = () => (
  <div className="flex">
    <div className="rounded-full bg-darkGrey w-1 h-1 mr-1" />
    <div className="rounded-full bg-darkGrey w-1 h-1 mr-1" />
    <div className="rounded-full bg-darkGrey w-1 h-1 mr1" />
  </div>
)

const User = ({ src, name, text }) => {
  const [showOptions, setShowOptions] = useState(false)

  const toggleShowOptionsHandler = () =>
    setShowOptions((prevState) => !prevState)

  return (
    <div className="w-full bg-lightGrey py-1 px-2 text-darkGrey grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1 items-center">
      {showOptions && (
        <div
          style={{
            position: 'absolute',
            marginLeft: '32rem',
            marginTop: '2.5rem',
            zIndex: '2000',
          }}
          className=""
        >
          <OptionContainer />{' '}
        </div>
      )}
      <div className="flex items-center">
        <Avatar src={src} alt={name} purpose="isForChat" />
        <p className="mdtext-lg ml-2">{name}</p>
      </div>
      <div className="flex items-center justify-end">
        <div>{text}</div>
        <div>
          <div
            className="cursor-pointer mx-3"
            onClick={toggleShowOptionsHandler}
          >
            {<Option />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default User
