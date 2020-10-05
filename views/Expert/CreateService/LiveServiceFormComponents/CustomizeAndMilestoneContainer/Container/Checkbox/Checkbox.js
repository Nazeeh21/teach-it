import React from 'react'

const Checkbox = ({active, clicked}) => <div  className='rounded-lg'>
  {/* <label class="container">
    <input type="checkbox" checked="checked" />
    <span class="checkmark"></span>
</label> */}
  <button style={{background: `${active ? '#4968FF' : 'white'}`, border: `${!active && '2px solid #4968FF'}`, outline: 'none'}} className='w-6 h-6 rounded-md p-1' onClick={clicked}>
    {active && <img className=' m-auto' src='/tick.svg' alt='tick' />}
  </button>
</div>;

// import './Checkbox.css'

export default Checkbox;