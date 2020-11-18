import React, { useState } from 'react'

const Icon = ({ imgSrc, active = false }) => {
  return (
    <img
      src={imgSrc}
      alt="Pick this icon"
      className={`rounded-full w-16 cursor-pointer border-2 ${
        active ? 'border-primary' : 'border-highlight'
      }`}
    />
  )
}

const Index = () => {
  const [selection, setSelection] = useState(0)

  return (
    <div>
      <p className="block text-textBoxTitle p-1 text-darkGrey text-left w-full mb-4">
        Select an icon
      </p>
      <div className="flex gap-6">
        <div onClick={() => setSelection(0)}>
          <Icon imgSrc="/avis/ana.png" active={selection === 0} />
        </div>
        <div onClick={() => setSelection(1)}>
          <Icon imgSrc="/avis/ana.png" active={selection === 1} />
        </div>
        <div onClick={() => setSelection(2)}>
          <Icon imgSrc="/avis/ana.png" active={selection === 2} />
        </div>
      </div>
    </div>
  )
}

export default Index
