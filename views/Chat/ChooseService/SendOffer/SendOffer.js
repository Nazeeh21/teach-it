import React from 'react'
import { ContainerWithShadow } from '../../../../containers'
import CardButton from '../../CompactServiceCard/CardButton/CardButton'
import DatePicker from '../../../../views/Expert/CreateService/LiveServiceFormComponents/DateSelector/DatePicker/DatePicker'

const Input = <input className="w-full  text-2xl" type="number" />

const timeStamp = ['AM', 'PM']

const SendOffer = () => (
  <div className="absolute">
    <ContainerWithShadow width="8/12">
      <div className="m-3">
        <p className="mx-2 text-darkGrey">Price</p>
        {/* <Input /> */}
        <input
          style={{ boxShadow: '0 2px #dddddd' }}
          className="w-full mx-2 text-2xl"
          type="number"
        />
        <div className="flex justify-center my-8">
          <div className="w-6/12 mx-2">
            <p className="mx-2 text-darkGrey">Date</p>
            {/* <Input /> */}
            <input
              style={{ boxShadow: '0 2px #dddddd' }}
              className="w-full text-2xl"
              type="number"
              placeholder="14 June 2020"
            />
            {/* <DatePicker /> */}
          </div>
          <div className="w-6/12 ml-4">
            <p className=" text-darkGrey">Time</p>
            <input
              style={{ boxShadow: '0 2px #dddddd' }}
              className="w-full  text-2xl"
              type="text"
              placeholder="5:30 pm"
            />
            {/* <Input /> */}

            {/* <div className='flex'>
              <input
                type='number'
                max='12'
                min='1'
                placeholder='5'
                className='bg-lightGrey rounded-sm py-1 pl-2'
                onChange={(e) => e.target.value}
              />
              <span className='mx-2'>:</span>
              <input
                type='number'
                max='59'
                min='0'
                placeholder='30'
                className='bg-lightGrey rounded-sm py-1 pl-2'
                onChange={(e) => e.target.value}
              />
              <select className='bg-lightGrey ml-4 py-1 px-2'>
                {timeStamp.map((time) => (
                  <option>{time}</option>
                ))}
              </select>
            </div> */}
          </div>
        </div>
        <div className="w-full grid grid-cols-2 grid-rows-1">
          <div></div>
          <div className="justify-self-end">
            <CardButton label="Send Offer" />
          </div>
        </div>
      </div>
    </ContainerWithShadow>
    4{' '}
  </div>
)

export default SendOffer
