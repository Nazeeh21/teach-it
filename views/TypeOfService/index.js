import React from 'react'
import Pills3 from '../../components/Misc/3Pills/3Pills'
import Pills2 from '../../components/Misc/3Pills/2Pills'
import Rating from '../../components/Rating/Rating'
import DatePicker from '../Expert/CreateService/LiveServiceFormComponents/DateSelector/DatePicker/DatePicker'
import { PrimaryButton } from '../../components/Buttons/Index'

const RatingSelection = <div className='flex'>
<Rating /> 
</div>

export default () => (
  <div className='w-full rounded-lg bg-white px-3 py-2'>
    
    <p className='mb-2 text-lg font-medium'>Type of Service</p>
    <Pills2 width='full' color='white' label1='Live' label2='Rich media' />
    
    <p className='text-lg font-medium mt-6'>Maximum Cost</p>
    <input className='mt-2 w-full bg-lightGrey rounded-md h-10' type='number' /> 
    
    <p className='text-lg font-medium mt-6'>Duration</p>
    <select className='h-10 mt-2 pl-2 w-full rounded-md text-sm bg-lightGrey'>
      <option value='2 hours' label='2 hours'/>
      <option value='3 hours' label='3 hours'/>
      <option value='4 hours' label='4 hours'/>
      <option value='5 hours' label='5 hours'/>
    </select>
    
    <p className='text-lg font-medium mt-6'>Categories</p>
    <a style={{color: '#4968FF'}} className='mt-4 text-sm' href='/'>Add categories</a>
    
    <p className='text-lg font-medium mt-6'>Rating</p>
    <select className='h-10 mt-2 pl-3 w-full rounded-md bg-lightGrey'>
      <option value='2' label='2 & above' />
      <option value='3' label='3 & above' />
      <option value='4' label='4 & above' />
      <option value='5' label='5 & above' />
    </select>
    
    <p className='text-lg font-medium mt-6 mb-2'>Timings</p>
    <Pills3 width='full' color='white' label1='Anytime' label2='First half' label3='Second half' />
    
    <p className='text-lg font-medium mt-6 mb-2'>Date</p>
    <div className='-ml-2'><DatePicker /></div>
    
    <p className='text-lg font-medium mt-6'>Service Language</p>
    <select className='h-10 mt-2 pl-2 w-full rounded-md text-sm bg-lightGrey'>
      <option value='English' label='English'/>
      <option value='Hindi' label='Hindi'/>
      <option value='Gujarati' label='Gujarati'/>
    </select>
    
    <p className='text-lg font-medium mt-6'>Provider Location</p>
    <select className='h-10 mt-2 pl-2 w-full rounded-md text-sm bg-lightGrey'>
      <option value='india' label='India'/>
      <option value='germany' label='Germany'/>
      <option value='USA' label='USA'/>
    </select>
    
    <p className='text-lg font-medium mt-6'>Type of Experts</p>
    <select className='h-10 mt-2 pl-2 w-full rounded-md text-sm bg-lightGrey'>
      <option value='pro' label='Only Pro experts'/>
      <option value='intermediate' label='Intermediate experts'/>
      <option value='basic' label='Basic experts'/>
    </select>

    <div className='mt-8'>
      <PrimaryButton label='Search' />
    </div>
  </div>
)
