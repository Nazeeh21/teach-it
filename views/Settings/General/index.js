import React from 'react'
import { PrimaryButton } from '../../../components/Buttons/Index'
import Pills3 from '../../../components/Misc/3Pills/3Pills'
import ShowAllButton from '../ShowAllButton'
import User from '../Users'

const Unblock = () => <div style={{color: '#4968FF'}} className='cursor-pointer text-md'>Unblock</div>

const GreyLine = () => <div style={{height: '0.05rem', opacity: '50%'}} className='bg-darkGrey w-full' />

const AcceptedText = () => <div className='text-md text-darkGrey'>Accepted on 13/6</div>

const PendingText = () => <div style={{color: '#FF7575'}} className='text-md'>Pending</div>

const GeneralSetting = () => (
  <div className='w-full'>
    <p className='text-2xl font-medium'>General settings</p>
    <div className='w-full h-auto mt-5 pt-6 px-5 pb-8 bg-white rounded-lg'>
      <p className='text-lg font-medium'>Blocked users</p>
      <div className='w-full bg-lightGrey mt-6 pb-4'>
        <User src='stock/girl2.jpg' name='Arun P' text={<Unblock />} />
        <GreyLine />
        <User src='stock/girl2.jpg' name='Arun P' text={<Unblock />} />
        <GreyLine />
        <User src='stock/girl2.jpg' name='Arun P' text={<Unblock />} />
        <GreyLine />
        <User src='stock/girl2.jpg' name='Arun P' text={<Unblock />} />
        <ShowAllButton />
      </div>
      <div className='w-full mt-6 grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 items-center'>
        <p className='text-lg font-medium'>Invitations</p>
        <div>
          <Pills3 width='full' color='white' label1='All' label2='Accepted' label3='Pending' />
        </div>
      </div>
      <div className='w-full bg-lightGrey mt-4 pb-4'>
        <User src='stock/girl2.jpg' name='Arun P' text={<AcceptedText />} />
        <GreyLine />
        <User src='stock/girl2.jpg' name='Arun P' text={<AcceptedText />} />
        <GreyLine />
        <User src='stock/girl2.jpg' name='Arun P' text={<PendingText />} />
        <GreyLine />
        <User src='stock/girl2.jpg' name='Arun P' text={<AcceptedText />} />
        <ShowAllButton />
      </div>
      <p className='text-lg font-medium mt-8'>Preferred Language</p>
      <div className='w-full mt-3'>
        <select className='bg-lightGrey w-10/12 md:w-5/12 py-2 pl-1'>
          <option value='english' label='English' />
          <option value='hindi' label='Hindi' />
          <option value='german' label='German' />
        </select>
      </div>
      <div className='mt-8 w-10/12 md:w-4/12'><PrimaryButton label='Save' /></div>
    </div>
  </div>
)

export default GeneralSetting