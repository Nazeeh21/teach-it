import React from 'react'
import RadioItem from './RadioItem'

const Index = ({ items }) => {
  return (
    <form className='bg-highlight w-3/12 p-2 m-2 flex flex-col'>
      <RadioItem formName='gender' value='male' label='Male' />
      <RadioItem formName='gender' value='female' label='Female' />
    </form>
  )
};

export default Index;