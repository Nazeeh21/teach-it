import React from 'react'
import loremIpsum from '../../utility/loremIpsum'

const Item = ({ title, titleColor, description }) => (
  <div className='w-full p-6'>
    <h3 className={`text-xl text-${titleColor}`}>{title}</h3>
    <p className='leading-5 text-darkGrey text-sm'>{description}</p>
    <div className='w-6/12'>
    <button className='w-full mt-6 border-secondary border-2 text-secondary text-lg bg-white text-secondary pt-1 pb-1 pl-4 pr-4 rounded-lg'>
      Create
    </button>
    </div>
  </div>
)

const CreateServiceCard = () => {
  return (
    <div className='rounded-lg bg-white flex flex-col shadow mt-6'>
      <div className='rounded-tl-lg rounded-tr-lg p-6'>
        <h3 className='text-2xl text-primary'>Create a service</h3>
      </div>
      <img className='w-full h-auto' src='yoga.jpg' alt='Create a service' />
      <Item title='Live' titleColor='red' description={loremIpsum} />
      <Item title='Rich media' titleColor='green' description={loremIpsum} />
    </div>
  )
};

export default CreateServiceCard;
