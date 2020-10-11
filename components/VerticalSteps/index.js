import React from 'react'
import Step from './Step'
import {v4 as uuid} from 'uuid'

const Index = ({ items, activeStep }) => {
  return (
    <div className='bg-white rounded-lg p-4 shadow-sm flex flex-col'>
      {items.map((item, index) => (
        <Step
          key={uuid}
          label={item}
          index={index + 1}
          active={index === activeStep - 1}
          done={index < activeStep - 1}
          id={item.toLowerCase()}
        />
      ))}
    </div>
  )
};

export default Index;
