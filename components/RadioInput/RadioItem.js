import React from 'react'

export default ({ label, value, formName }) => {
  return (
    <div style={{ display: 'table-cell', verticalAlign: 'middle' }} className='p-2 flex flex-row block border-b-2 border-lightGrey mb-2'>
      <input
        // hidden
        className='cursor-pointer m-2'
        type='radio'
        id={label}
        name={formName}
        value={value}
      />
      <label className='m-1' for={label}>
        {label}
      </label>

    </div>
  )
}
