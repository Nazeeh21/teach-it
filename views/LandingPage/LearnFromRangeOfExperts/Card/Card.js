import React from 'react'

const Card = ({ cardData }) => (
  <div
    style={{ background: 'white' }}
    className="w-32 inline-block m-3 rounded-lg p-5 h-32"
  >
    <div
      style={{ background: `${cardData.bgColor}`, opacity: '50%' }}
      className="flex items-center w-10 h-10 rounded-full m-auto font-semibold"
    >
      <div style={{ color: `${cardData.color}` }} className="m-auto">
        {cardData.text.charAt(0)}
      </div>
    </div>
    <div className="m-2 flex justify-center font-semibold text-darkGrey">
      {cardData.text}
    </div>
  </div>
)

export default Card
