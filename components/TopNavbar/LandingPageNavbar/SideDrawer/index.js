import React from 'react'
import Backdrop from '../../../Backdrop/index'

const SideDrawer = ({ open, closed }) => (
  <div className={`${!open && 'hidden'} absolute w-full h-full`}>
    <Backdrop show={open} clicked={closed} />
    <div
      style={{ zIndex: '500' }}
      className={`fixed flex flex-col w-8/12 h-full right-0 top-0 bg-white box-border transition duration-300 ease-out ${
        open && 'translate-x-0'
      } ${closed && '-translate-x-100'} md:hidden`}
    >
      <div className="w-full h-auto flex flex-col justify-center">
        <img
          onClick={() => router.push('/')}
          className="mt-10 cursor-pointer"
          src="/Logo.svg"
          alt="logo"
        />
        <a className="m-auto mt-8" href="/">
          Home
        </a>
        <a className="m-auto mt-3" href="/">
          Features
        </a>
        <a className="m-auto mt-3" href="/">
          Contact us
        </a>
      </div>
    </div>
  </div>
)

export default SideDrawer
