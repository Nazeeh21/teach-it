import React from 'react'

export const Pill = ({
  label,
  clickHandler,
  inactive = false,
  color,
  textColor,
}) => {
  const inactiveClass = 'bg-none text-sm border-none inline m-1 p-1 w-1/2 '

  return (
    <button
      style={{ outline: 'none' }}
      className={
        inactive
          ? inactiveClass
          : `bg-${color} text-${textColor} text-sm rounded-full inline m-1 w-1/2 p-1`
      }
      onClick={(e) => clickHandler(e.target.value)}
    >
      {label}
    </button>
  )
}
