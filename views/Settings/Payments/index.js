import React from 'react'
import { PrimaryButton } from '../../../components/Buttons/Index'
import ShowAllButton from '../ShowAllButton'
import User from '../Users'
import WebsiteUrl from './WebsiteUrl'

const GreyLine = () => <div style={{height: '0.05rem', opacity: '50%'}} className='bg-darkGrey w-full' />

const ProfileSetting = () => (
  <div className='w-full'>
    <p className='text-2xl font-medium'>Settings Popups</p>
    <div className='w-full h-auto mt-5 pt-6 pb-8 px-5 bg-white rounded-lg'>
      <div className='grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 h-64'>
        <div className='md:mr-3'>
          <p className='text-xl font-medium'>Currency</p>
          <select className='bg-lightGrey w-full py-2 pl-1'>
            <option value='indian' label='₹ - Indian Rupee' />
            <option value='usd' label='US$ - United States Dollar' />
            <option value='aud' label='A$ - Australian Dollar' />
            <option value='thb' label='THB - Thai Baht' />
            <option value='cad' label='CA$ - Canadian Dollar' />
          </select>
        </div>
        <div className='md:ml-3'>
        <p className='text-xl font-medium'>Currency</p>
         <div className='bg-lightGrey px-1'>
          <select className='bg-lightGrey pl-1 py-2 w-full'>
            
              <option value='indian' label='₹ - Indian Rupee' />
              <option value='usd' label='US$ - United States Dollar' />
              <option value='aud' label='A$ - Australian Dollar' />
              <option value='thb' label='THB - Thai Baht' />
              <option value='cad' label='CA$ - Canadian Dollar' />
          </select>
          </div> 
      
      </div>
      </div>
      <div className='w-full bg-lightGrey mt-4 pb-4'>
        <User src='nazeeh_profile.jpg' name='Arun P' text='₹ 3500' />
        <GreyLine />
        <User src='nazeeh_profile.jpg' name='Arun P' text='₹ 3600' />
        <GreyLine />
        <User src='nazeeh_profile.jpg' name='Arun P' text='₹ 3800' />
        <GreyLine />
        <User src='nazeeh_profile.jpg' name='Arun P' text='₹ 4000' />
        <ShowAllButton />
      </div>
      <div className='w-full flex flex-col md:flex-row mt-10'>
        <div className='md:mr-1 md:w-6/12'><WebsiteUrl /></div>
        <div className='md:ml-1 md:w-6/12'><WebsiteUrl /></div>
      </div>
      <div className='mt-20'>
        <div className='w-10/12 md:w-4/12 mb-6'><PrimaryButton label='Save' disabled /></div>
        <div className='w-10/12 md:w-4/12'><PrimaryButton label='Save' /></div>
      </div>
    </div>
  </div>
)

export default ProfileSetting
