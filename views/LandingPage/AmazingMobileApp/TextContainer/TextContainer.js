import React from 'react'

const TextContainer = ({ data }) => (
  <div className="mx-6">
    <p
      style={{ color: '#1d2d50', lineHeight: '120%' }}
      className="text-3xl text-left font-semibold "
    >
      {data.title}
    </p>
    <p
      style={{ lineHeight: '110%', color: '#8A8EA0' }}
      className="my-4 opacity-75 text-darkGrey text-left text-xl font-medium"
    >
      {data.subTitle}
    </p>
  </div>
)

export default TextContainer
// Invite phone contacts
