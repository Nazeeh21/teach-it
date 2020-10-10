import React from 'react'
import AgeGroupContainer from './AgeGroupContainer';

const AgeGroups = [
  {label: 'Below 10 years', value: '<10'},
  {label: '10 to 17 years', value: '10-17'},
  {label: '18 years and above', value: '>18'}
]

const AudienceSelector = ({ activeAgeGroup, ageGroupChangeHandler}) => {
  
  return (
    <div className='w-full'>
      <p className='mt-2 text-lg'>Age groups allowed</p>
      <p className='mt-1 mb-2 text-darkGrey text-sm'>
        Learners who are not in the specified age group, will not be shown the service.{' '}
        <div className='grid grid-cols-2 grid-rows-2 grid-flow-row gap-5 my-5'>
          <AgeGroupContainer ageGroup={AgeGroups[0]} active={activeAgeGroup === AgeGroups[0].value} clickHandler={ageGroupChangeHandler} /> 
          <AgeGroupContainer ageGroup={AgeGroups[1]} active={activeAgeGroup === AgeGroups[1].value} clickHandler={ageGroupChangeHandler} /> 
          <AgeGroupContainer ageGroup={AgeGroups[2]} active={activeAgeGroup === AgeGroups[2].value} clickHandler={ageGroupChangeHandler} /> 
        </div>
        <span className='cursor-pointer text-secondary'>Legal</span>
      </p>
    </div>
  )
};

export default AudienceSelector;