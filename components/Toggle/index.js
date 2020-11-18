import React, { useState } from 'react'

const Switch = () => {
  const [isOn, toggle] = useState(true)

  return (
    <div className="-mt-6">
      <input
        checked={isOn}
        onChange={() => toggle((on) => !on)}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        className={`react-switch-label bg-${isOn ? 'secondary' : 'darkGrey'}`}
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </div>
  )
}

export default Switch
