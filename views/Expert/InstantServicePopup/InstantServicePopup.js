import React, { useState } from 'react'
import BackDrop from '../../../components/Backdrop'
import { PrimaryButton } from '../../../components/Buttons/Index'
// import Modal from './Modal/Modal'

const InstantServicePopup = ({ show, backdropClickedHandler }) => {
  const [cost, setCost] = useState(0)
  const [duration, setDuration] = useState(0)

  return (
    <div>
      <BackDrop show={show} clicked={backdropClickedHandler} />
      <div
        style={{
          zIndex: '100',
          borderBottomLeftRadius: '1rem',
          borderTopLeftRadius: '1rem',
        }}
        className=" fixed right-0 top-0 w-5/12 bg-white "
      >
        <div className="mx-10 my-6 overflow">
          <button
            className="text-5xl font-small"
            onClick={backdropClickedHandler}
          >
            X
          </button>
          <div className="my-5">
            <p className="text-2xl font-medium">Create an instant sevice</p>
            <div className="rounded-md bg-lightGrey text-darkGrey font-medium text-sm p-4 my-4">
              Instant is a pre-built service template which allows you to
              quickly offer a one time Live service without too many details.
              It’s ideal for learners who look for immediate consultancy. No
              restrictions on categories or audiences. Just set the price and
              duration and it’s done!
            </div>
            <div className="my-2  ">
              <p className="text-xl font-medium">
                How much will you charge for this service?
              </p>
              <p className="text-sm text-darkGrey font-medium">
                Video work commission for this service is at 35% is Rs 2100.
                Learn more about{' '}
                <a style={{ color: '#4968FF' }} href="/">
                  commision labs
                </a>
              </p>
            </div>
            <div className="grid grid-rows-1 grid-cols-2 text-sm font-medium my-5">
              <div className="flex w-8/12">
                <input
                  type="number"
                  min="0"
                  value={cost}
                  onChange={(e) => setCost(e.target.value)}
                  className="rounded bg-lightGrey w-8/12 p-2"
                  placeholder="6000"
                />
                <p className="w-8/12 p-2">per week</p>
              </div>
              <div className="flex justify-self-end w-8/12 ">
                <p className="w-7/12 p-2 ">You will get</p>
                <p
                  style={{ background: '#fafcc2' }}
                  className="text-lg rounded w-6/12 p-2"
                >
                  {(cost * 0.35).toFixed(2)}
                </p>
              </div>
            </div>
            <div className="font-medium my-5">
              <p className="text-xl">Duration</p>
              <div className="flex w-6/12 my-2">
                <input
                  placeholder="2"
                  min="0"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  type="number"
                  className="rounded bg-lightGrey w-3/12 p-2"
                />
                <p className="w-7/12 p-2">hours</p>
              </div>
            </div>
            <div className="w-4/12 my-10">
              <PrimaryButton label="Send Invite" />
            </div>
          </div>
        </div>
      </div>
    </div>
    // </Modal>
  )
}

export default InstantServicePopup
