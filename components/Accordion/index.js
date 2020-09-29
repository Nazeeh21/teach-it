import React, { useState } from 'react'

export default ({ label, children }) => {
  const [open, toggleOpen] = useState(true)

  const toggleHandler = () => toggleOpen((open) => !open)

  return (
    <React.Fragment>
      <div
        onClick={toggleHandler}
        className='mt-5 cursor-pointer rounded border-2 border-lightGrey py-2 px-4 grid grid-cols-2 bg-highlight items-center mb-4'
      >
        <h3 className='uppercase font-semibold'>{label}</h3>
        <img
          src={`angle-arrow-${open ? 'up' : 'down'}.svg`}
          className='h-auto w-2 justify-self-end'
          alt={open ? 'Collapse' : 'Open'}
        />
      </div>
      {open && children}
    </React.Fragment>
  )
}
