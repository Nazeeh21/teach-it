import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { setFees } from '../../../store/actions/createServiceAction'

const FeesSelector = ({ fees, feesChangedHandler }) => {
  // const dispatch = useDispatch()
  // const fees = useSelector(state => state.createService.fees)

  return (
    <div className='w-full'>
      <p className='mt-2 text-lg'>How much will you charge for this service?</p>
      <p className='mt-1 mb-2 text-darkGrey text-sm'>
        Videowork commission for this service at 35% is ₹ 2100. Learn more about{' '}
        <span className='cursor-pointer text-secondary'>commision slabs</span>
      </p>
      <div className='grid grid-rows-1 grid-cols-2 text-sm font-medium my-5'>
        <div className='flex w-6/12'>
          <input
            value={fees}
            type='number'
            className='rounded bg-lightGrey w-6/12 p-2'
            onChange={(e) => {
              feesChangedHandler(e.target.value)
              // dispatch(setFees(e.target.value))
            }}
          />
          {/* <p className='rounded bg-lightGrey w-6/12 p-2'>₹6000</p> */}
          <p className='w-8/12 p-2'>per week</p>
        </div>
        <div className='flex justify-self-end w-7/12 '>
          <p className='w-7/12 p-2 '>You will get</p>
          <p
            style={{ background: '#fafcc2' }}
            className='text-lg rounded w-5/12 p-2'
          >
            ₹3900
          </p>
        </div>
      </div>
    </div>
  )
}

export default FeesSelector
